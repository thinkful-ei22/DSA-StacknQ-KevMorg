
class _Node {
  constructor(data,next){
    this.data =data;
    this.next= next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(data){//returns top node
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop(){//returns data
    const node = this.top;
    this.top = node.next ? node.next : null;
    //new top
    return node.data;
  }
}

module.exports = Stack;

