// there is some global method in javascript that can be used in node js here is some example :
// 1. console.log()
console.log('learn node js');

// 2. setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
const timeout = 2000;
const myTimeout = setTimeout(() => {
    console.log(`this console.log will executed after ${timeout} ms`); // will execute console.log after 2000 ms
}, timeout)

// call myTimeout
myTimeout

// 3. clearTimeout() to clear timeout that has been initiated
clearTimeout(myTimeout);

// 4. setInterval() repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
const interval = 2000;
const myInterval = setInterval(() => {
    console.log(`this console.log will executed repeatedly every ${interval} ms`);
}, interval)

// call myInterval
myInterval

// 5. clearInterval() to clear interval that has been initiated
clearInterval(myInterval);