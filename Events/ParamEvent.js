//import event module
const EventEmitter=require('events')
//construct EventEmitter
const customEmitter=new EventEmitter()

//Declare event response
customEmitter.on('Param',(name,age)=>
{
    console.log('Param Event triggers')
    console.log(`Data Received ${name} ${age}`)
})

customEmitter.emit('Param','John',34)

//trigger the event response before declare
customEmitter.emit('response')

//Declare event response 
customEmitter.on('response',()=>
{
    console.log('This event will not execute')
})

