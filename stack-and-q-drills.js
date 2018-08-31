const Stack = require('./stack-class');

const starTrek = new Stack();

function main (){
  starTrek.push('Scotty');
  console.log(JSON.stringify(starTrek));
  starTrek.push('McCoy');
  starTrek.push('Spock');
  starTrek.push('Kirk');
  console.log(JSON.stringify(starTrek, null, 2));
}

main();