//import event module
const EventEmitter=require('events')
//construct EventEmitter
const customEmitter=new EventEmitter()

//Declare event response
customEmitter.on('response',()=>
{
    console.log('Event triggers')
})

//trigger the event response
customEmitter.emit('response')