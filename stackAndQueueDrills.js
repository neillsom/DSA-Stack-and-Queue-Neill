'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

}

function peek(stack) {
  let currentNode = stack.top;
  let displayNode = currentNode.data;

  if (currentNode === null) {
    throw new Error('empty stack');
  }
  console.log(displayNode);
  return displayNode;
}

function display(stack) {
  let currentNode = stack.top;
  let displayStack = currentNode.data;

  if (currentNode === null) {
    throw new Error('Empty stack');
  }
  while (currentNode.next !== null) {
    displayStack = displayStack + ', ' + currentNode.next.data;
    currentNode = currentNode.next;
  }
  console.log(displayStack);
  return displayStack;
}

const starTrek = new Stack;

function main(){
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
}

main();
display(starTrek);
peek(starTrek);
