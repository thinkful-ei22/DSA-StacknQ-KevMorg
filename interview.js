'use strict';

const Stack = require('./stack-class');
const { display } = require('./helper');


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
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));