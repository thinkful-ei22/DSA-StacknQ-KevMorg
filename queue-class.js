class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      //sets the new incoming node's next to the one in front of you,
      //of which was previously the last node
      this.last.prev = node;
      //setting the guy behind u to the previous = u
    }
    this.last = node;
  }
  dequeue(){
    // console.log('i was called');
    if(this.first === null){
      // console.log('i was called 2');
      return;
    }
    const node = this.first;
    this.first = node.prev;
    if(this.first){
      this.first.next = null;
    }
    // console.log('i was called 3', node);
    //updating the q. the first/head/top is now the node and
    //the first is the previous one behind the top/head
    if(node === this.last){
      
      this.last = null;
      //if there is only one item, then u set this.last equal to null
      //afterwards
    }
    return node.value;
  }
}

module.exports = Queue;