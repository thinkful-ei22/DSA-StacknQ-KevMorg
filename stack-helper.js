

const peekStack = stack => {
  // return stack.top.data;
  var node = stack.top;
  if(node){
    return node.data;
  }
  else {
    return false;
  }
};

const displayStack = stack => {
  // return stack.top;
  const stackDisplay = {};
  let currNode = stack.top;
  let position = 0;
  while (currNode) {
    // add node to list obj
    stackDisplay[`node${position}`] = 
    { data: currNode.data, next: currNode.next ? currNode.next.data: null };
    // move to the next node
    currNode = currNode.next;
    position++;
  }
  // console.log(stackDisplay);
  return stackDisplay;
};

module.exports = {
  peekStack,
  displayStack
};