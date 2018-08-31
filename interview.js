

const Stack = require('./stack-class');
const { display, peek } = require('./helper');


function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const stack = new Stack();
  for(let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }
  //console.log(display(stack));

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
      const candidate = peek(stack);
      if(!candidate){
        return false;
      }
      stack.pop();
    }
  }
  if(peek(stack)){
    return false;
  }
  return true;
}
// console.log(parens('( ( 3 + 1) + ( 2 * 4) )/1'));
function sortStack(origStack){
  let returnStack = new Stack();
  let tempStack = new Stack();
  // let peekO = origStack.peek();
  // let peekR = returnStack.peek();
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
// const arr = [12, 4, 2];
// console.log(arr.sort((function(a, b) {
//   return a - b;
// })
// ));
function main(){
  const stack1 = new Stack();
  stack1.push(10);
  stack1.push(7);
  stack1.push(1);
  stack1.push(3);
  console.log(display(stack1));
  console.log(display(sortStack(stack1)));
}

main();