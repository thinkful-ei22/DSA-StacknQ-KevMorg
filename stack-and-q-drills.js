

const Stack = require('./stack-class');

const starTrek = new Stack();

const {
  peek,
  display
} = require('./helper');


function main (){
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek));
  starTrek.push('McCoy');
  starTrek.push('Spock');
  starTrek.push('Kirk');
  console.log('BEFORE',display(starTrek));

  starTrek.pop();
  // console.log(JSON.stringify(starTrek, null, 2));
  // console.log(peek(starTrek));
  console.log('AFTER',display(starTrek));
}

main();