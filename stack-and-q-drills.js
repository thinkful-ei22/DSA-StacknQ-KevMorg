

const Stack = require('./stack-class');
const Queue = require('./queue-class');
const starTrek = new Stack();
const starTrekQ = new Queue();

const {
  peekStack,
  displayStack
} = require('./stack-helper');
const {
  peekQueue,
  displayQueue
} = require('./queue-helper');


function main (){
  // starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek));
  // starTrek.push('McCoy');
  // starTrek.push('Spock');
  // starTrek.push('Kirk');
  // console.log('BEFORE',display(starTrek));

  // starTrek.pop();
  // console.log(JSON.stringify(starTrek, null, 2));
  // console.log(peek(starTrek));
  // console.log('AFTER',display(starTrek));

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // console.log(starTrekQ);
  // console.log(peekQ(starTrekQ));
  console.log('BEFORE', displayQueue(starTrekQ));
  console.log(starTrekQ.dequeue());
  console.log(starTrekQ.dequeue());
  console.log('AFTER', displayQueue(starTrekQ));
}

main();