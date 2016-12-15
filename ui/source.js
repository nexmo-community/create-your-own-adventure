import localforage from 'localforage'
import List from './Components/List.html'
import WebSocket from 'reconnecting-websocket'


// populate the phone number to call
fetch('/number')
  .then(res => res.text())
  .then(number => document.querySelector('#number').innerText = number)


// Create the UI
const list = new List({
  target: document.querySelector( 'main' ),
  data: { adventurers: [] }
})


const store = []

localforage.getItem('store')
  .then(data => {
    if(data) {
      store.push.apply(store, data)
      list.set({adventurers: store})
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

    list.set({adventurers: store})

    localforage.setItem('store', store)
  }


  if(type == 'update') {
    const matches = store
      .filter( s => s.conversation_uuid == body.conversation_uuid)

    if(matches.length) {
      matches[0].state = body.state
    }

    list.set({adventurers: store})

    localforage.setItem('store', store)
  }

}




const host = location.origin.replace(/^http/, 'ws')

const ws = new WebSocket(host)
ws.onmessage = event => {
  handle(JSON.parse(event.data))
}


// change the data associated with the template
list.set({adventurers: store})


// setTimeout(function(){
//   handle({
//     type: 'create',
//     body: { conversation_uuid: 'db74fbab-b762-466b-a53a-9ab6213babc4', from: '447540838982' } })
// }, 1500)
//
// setTimeout(function(){
//   handle({
//     type: 'update',
//     body: { conversation_uuid: 'db74fbab-b762-466b-a53a-9ab6213babc4',
//       state: 'boat_fire' } })
// }, 2500)
//
// setTimeout(function(){
//   handle({
//     type: 'update',
//     body: { conversation_uuid: 'db74fbab-b762-466b-a53a-9ab6213babc4',
//       state: 'look_for_snack' } })
// }, 4000)
//
//
//
