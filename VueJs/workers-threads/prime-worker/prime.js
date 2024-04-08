'use strict'
const { parentPort } = require('worker_threads')
let number = 10000000

function test_prime(n){
    if (n===1)  {
        return false;
    }  else if(n === 2)  {
        return true;
    } else {
        for(var x = 2; x < n; x++) {
            if(n % x === 0) {
                return false;
            }
        }
    }
    return true;  
}

while (true) {
    number++
    
    if (test_prime(number)){
        parentPort.postMessage("isPrime :" + number)
    }
}
