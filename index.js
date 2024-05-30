global.yamadaAnna = "cute";
console.log(global.yamadaAnna);

process.env.USER = "aliwumpa";
console.log(process.env.USER);

// EVENTS
// callback function on event exit example
process.on('exit', () => {
    // do something
})

// register new event with event emitter
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('breakfast', () => {
    console.log('eat 🍞');
})

eventEmitter.emit('breakfast');

//FILE SYSTEM
// readFileSync equal to Blocking it means it will finish the function first before running other code for example we gonna console.log(txt) first
// before console.log(do this ASAP)
const { readFileSync } = require('fs');
const { readFile: readFileCallback } = require('fs');
const { readFile: readFilePromise } = require('fs').promises;
const txt = readFileSync('./yamadaAnna.txt', 'utf8');
console.log('with readFileSync : ', txt);
console.log('do this ASAP example 1');

// meanwhile if we use readFile with callback function it will execute reading the file first and run 
// the other script which is console.log(do this ASAP) and then execute the callback function within readFile
readFileCallback('./yamadaAnna.txt', 'utf8', (err, txt) => {
    if(err) {
        console.log('error:', error);
    }

    console.log('with readFile : ', txt);
})

console.log('do this ASAP example 2');

// we can prevent it to non Blocking and asynchronous by promises 
async function yamadaAnna() {
    const file = await readFilePromise('./yamadaAnna.txt', 'utf8');
    console.log('with promises readFile: ', file);
}

yamadaAnna();

// traditional way to call modules in vanilla javascript COMMON JS is using require() 
// meanwhile node already support the modern ES MODULES with import/export syntax to call the modules

// example HTTP url with express in node js

// call modules express
const express = require('express');
const app = express();

// using app to make http request and response with callback
app.get('/', (request, response) => {
    readFileCallback('./yamada.html', 'utf-8', (error, html) => {
        if(error) {
            response.status(500).send('Whoops ! there is wrong with this page error :', error);
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, console.log(`App available on http://localhost:3000`));

// example above is for simple web app what if the app is grows and there is within callback we calling callback ?
// it way more complicated and not good practice of coding to prevent 'callback hell' we can use method promises
// app.get('/', async (request, response) => {

//     response.send( await readFile('./yamada.html', 'utf8'));
// })