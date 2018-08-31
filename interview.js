

const Stack = require('./stack-class');
const Queue = require('./queue-class');
const { displayStack, peekStack } = require('./stack-helper');
const { displayQueue, peekQueue } = require('./queue-helper');


function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const stack = new Stack();
  for(let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }
  //console.log(displayStack(stack));

  let reversed = '';
  for(let i = 0; i < s.length; i++){
    reversed += stack.pop();
  }
  //loop through each node -> '' + Pop

  return s === reversed;

}

// true, true, true
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

//( ( 3 + 1) ) + ( 2 * 4) ) /1
// 0 , 1, 2, 1, 0, 1, 0, -1
//( ( 3 + 1) + ( 2 * 4) ) /1
// function goodParens(fxn){
//   const stack = new Stack();
//   let parenCount = 0;
//   for(let i =0 ; i < fxn.length; i++){
//     stack.push(fxn[i]);
//     if(fxn[i] === '('){
//       parenCount ++;
//     }
//     else if(fxn[i] === ')'){
//       parenCount --;
//     }
//     // let currNode = stack.top;
//     if(parenCount < 0){
//       let popFxn = '';
//       for(let j = 0; j < fxn.length; j++){
//         console.log(stack.pop(), '====');
//         console.log(popFxn);
        
//       }
//       // while(currNode){
//       //   popFxn =  stack.pop() + popFxn;
//       //   currNode = currNode.next;
//       // }
//       return `${popFxn} extra closing parens`;
//     }
//   }
//   if(parenCount < 0){//extra closing
//     return 'Missing opening parens';
//   }
//   if(parenCount > 0){//extra opening parens
//     return 'Missing closing parens';
//   }
//   return true;
// }

function parens(s){
  const stack = new Stack();
  for(let i = 0; i < s.length; i++){
    const var1 = s.charAt(i);
    if(var1 === '('){
      stack.push(var1);
    }
    else if( var1 ===')'){
      const candidate = peekStack(stack);
      if(!candidate){
        return false;
      }
      stack.pop();
    }
  }
  if(peekStack(stack)){
    return false;
  }
  return true;
}
// console.log(parens('( ( 3 + 1) + ( 2 * 4) )/1'));
function sortStack(origStack){
  let returnStack = new Stack();
  let tempStack = new Stack();
  // let peekO = origStack.peekStack();
  // let peekR = returnStack.peekStack();
  let currNode = origStack.top;
  let tempNode = origStack.top;
  while(currNode){
    if((origStack.top) && 
    (currNode.data <= currNode.next.data)){
      tempNode = origStack.top.data;
      console.log(currNode.data, currNode.next.data, 'less than below');
      tempStack.push(origStack.pop());
      returnStack.push(origStack.pop());
      returnStack.push(tempStack.pop());
    }
    else if((currNode.top) && 
    (currNode.top.data > currNode.top.next.data)){
      tempNode = origStack.top.data;
      const one = returnStack.push(origStack.pop());
      console.log(one);
      const one1 = returnStack.push(origStack.pop());
      console.log(one1);
    }
    currNode = currNode.next;
   
  }
  return returnStack;
  
}

function queueDancers(queuePeople){
  let queueM = new Queue();
  let queueF = new Queue();
  let pairQueue = new Queue();
  let currNode = queuePeople.first;
  //start at the front of the queue with .first and move to
  //the back of the queue
  while(currNode){
    // console.log(currNode.value);
    if(currNode.value.gender === 'F'){
      queueF.enqueue(currNode.value);
    }
    else {
      queueM.enqueue(currNode.value);
    }
    currNode = currNode.prev;
  } 
  while(peekQueue(queueM) && peekQueue(queueF)){
    let dQM = queueM.dequeue();
    let dQF = queueF.dequeue();
    // console.log(dQM, '----------', dQF);
    pairQueue.enqueue([dQM, dQF]);
    // console.log(displayQueue(pairQueue));
  }
  if(peekQueue(pairQueue) === null){
    return 'No people';
  }
  return pairQueue;
  // console.log(displayQueue(queueM), '-------------------------------', 
  //   displayQueue(queueF)); //good check
}
// const arr = [12, 4, 2];
// console.log(arr.sort((function(a, b) {
//   return a - b;
// })
// ));
function main(){
  const stack1 = new Stack();
  const queuePeople = new Queue();
  queuePeople.enqueue({name: 'Jane', gender: 'F'});
  queuePeople.enqueue({name: 'Frank', gender: 'M'});
  queuePeople.enqueue({name: 'John', gender: 'M'});
  queuePeople.enqueue({name: 'Sherlock', gender: 'M'});
  queuePeople.enqueue({name: 'Madonna', gender: 'F'});
  queuePeople.enqueue({name: 'David', gender: 'M'});
  queuePeople.enqueue({name: 'Christopher', gender: 'M'});
  queuePeople.enqueue({name: 'Beyonce', gender: 'F'});
  queuePeople.enqueue({name: 'Emma', gender: 'F'});
  // console.log(displayQueue(queuePeople));
  console.log(
    JSON.stringify(
      displayQueue(
        queueDancers(
          queuePeople)
      )
      , null, 2)
  );
  // stack1.push(10);
  // stack1.push(7);
  // stack1.push(1);
  // stack1.push(3);
  // console.log(displayStack(stack1));
  // console.log(displayStack(sortStack(stack1)));
}

main();