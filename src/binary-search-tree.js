const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor () {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data)

    function addWithin(node, data) {
      if (!node) {
        node = new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }
  }

  find(data) {
    return findWithin(this.rootNode, data)

    function findWithin (node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        return findWithin(node.left, data)
      } else  {  
        return findWithin(node.right, data)
      } 
    }
  }

  has(data) {
    return this.find(data) !== null ? true : false
  }


  remove(data) {
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if(data === node.data) {

        if(!node.left && !node.right) {
          return null
        }

        if(!node.right) {
          node = node.left
          return node 
        }

        if(!node.left) {
          node = node.right
          return node
        }

        let max = node.left
        while (max.right) {
          max = max.right
        }
        node.data = max.data
        max = null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      } 
    }
  }

  min() {
    if (!this.rootNode) {
      return
    }

    let minNode = this.rootNode
    while (minNode.left) {
      minNode = minNode.left
    }

    return minNode.data
  }

  max() {
    if (!this.rootNode) {
      return
    }

    let maxNode = this.rootNode
    while (maxNode.right) {
      maxNode.right
    }

    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree
};