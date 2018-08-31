

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



console.log(parens('( ( 3 + 1) + ( 2 * 4) )/1'));