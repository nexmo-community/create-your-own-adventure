require('dotenv-safe').load()

const express = require('express')
const bodyParser = require('body-parser')
const WebSocketServer = require('ws').Server
const adventure = require('./adventures/pirate-captain.json')

const server = require('http').createServer()
const app = express()

// frontend and exposed data
app.use(express.static('ui'))
app.get('/number', (req, res) => res.send(process.env.NUMBER))
app.get('/adventure.json', (req, res) => res.send(adventure))


app.use(bodyParser.json())

app.get('/answer/:token', (req, res) => {
  res.send(say('start'))

  const conversation_uuid = req.param('conversation_uuid')
  const from = req.param('from')

  if(conversation_uuid && from &&
    req.params.token == process.env.EVENT_TOKEN) {
    broadcast({
      type:'create',
      body: {
        conversation_uuid: conversation_uuid,
        from: from
      }
    })
  }
})


app.post('/reply/:state', (req, res) => {

  const stateName = req.params.state
  const choice = req.body.dtmf
  const cId = req.body.conversation_uuid

  if(!adventure[stateName]) {
    return res.send([{
      action: 'talk',
      text: 'Error: couldn\'t find state'
    }])
  }

  // find where they want to go
  const next =
    (adventure[stateName].choices||[])
    .find(c => c.dtmf == choice)

  if(next) {
    res.send(say(next.state))
    if(cId) {
      broadcast({
        type:'update',
        body: {conversation_uuid: cId, state: next.state}
      })
    }
  } else {
    res.send(say(stateName))
  }

})


function say(stateName){
  const state = adventure[stateName]
  const commands = []

  commands.push({
    action: 'talk',
    text: state.text
  })

  if(state.choices) {
    state.choices.forEach( choice =>
      commands.push({
        'action': 'talk',
        'text': `to ${choice.text} press ${choice.dtmf}`
      })
    )

    commands.push({
      'action': 'input',
      'maxDigits': 1,
      'timeOut': 10,
      'eventUrl': [`${process.env.HOST}/reply/${stateName}`]
    })

  }

  return commands

}

// expose events to frontend
const wss = new WebSocketServer({server: server})

app.post('/event/:token', (req, res) => {

  res.sendStatus(200)

  if(req.params.token == process.env.EVENT_TOKEN)
    broadcast({type: 'event', body:req.body})

})


function broadcast(message) {
  wss.clients.forEach( client => {
    client.send(JSON.stringify(message))
  })
}

server.on('request', app)
server.listen(process.env.PORT || 3000)
