import localforage from 'localforage'
import Page from './Components/Page.html'
import WebSocket from 'reconnecting-websocket'

// Create the interface
const ui = new Page({
  target: document.body,
  data: { conversations: [] }
})


// a local list of all conversations
const store = []

localforage.getItem('store')
  .then(data => {
    if(data) {
      store.push.apply(store, data)
      ui.set({conversations: store})
    }
  })


const handle = event => {

  const type = event.type
  const body = event.body

  if(type == 'create') {
    const matches = store
      .filter( s => s.conversation_uuid == body.conversation_uuid)

    if(!matches.length) {
      store.unshift({
        conversation_uuid: body.conversation_uuid,
        number: body.from,
        state: 'start',
        created: Date.now()
      })
    }

    ui.set({conversations: store})

    localforage.setItem('store', store)
  }


  if(type == 'update') {
    const matches = store
      .filter( s => s.conversation_uuid == body.conversation_uuid)

    if(matches.length) {
      matches[0].state = body.state
    }

    ui.set({conversations: store})

    localforage.setItem('store', store)
  }

}


const host = location.origin.replace(/^http/, 'ws')

const ws = new WebSocket(host)
ws.onmessage = event => {
  handle(JSON.parse(event.data))
}
