const events = require('events');


// Exemple 1
const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {
    console.log('connection succesful.');
   
    eventEmitter.emit('data_received');
 }
 
eventEmitter.on('connection', connectHandler);


 eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
 });


eventEmitter.emit('connection');


// Exemple 2

eventEmitter.on('new_subscriber', function (data) {
    console.log('Hello new subscriber: ' + data);
});


eventEmitter.emit('new_subscriber', 'Node Js');


// Exemple 3 

function LoopProcessor(num) {
    let e = new events.EventEmitter();
    
    setTimeout(function () {
        
        for (let i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            e.emit('AfterProcess', i);
        }
    }
    , 2000)
    
    return e;
}
const lp = LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

console.log("Program Ended.");