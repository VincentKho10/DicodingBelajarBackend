const {EventEmitter} = require('events')

const birthdayEventListener = (name)=>{
    console.log(`Happy Birthday ${name}!`)
}

const myEmitter = new EventEmitter()

myEmitter.on('birthdayEventListener', birthdayEventListener)

myEmitter.emit('birthdayEventListener', 'Jared')