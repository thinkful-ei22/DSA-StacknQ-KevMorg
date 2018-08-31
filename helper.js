'use strict';

const peek = stack => {
  return stack.top.data;
};

const display = stack => {
  // return stack.top;
  const stackDisplay = {};
  let currNode = stack.top;
  let position = 0;
  while (currNode) {
    // add node to list obj
    stackDisplay[`node${position}`] = 
    { value: currNode.data, next: currNode.next ? currNode.next.data: null };
    // move to the next node
    currNode = currNode.next;
    position++;
  }
  // console.log(stackDisplay);
  return stackDisplay;
};

module.exports = {
  peek,
  display
};