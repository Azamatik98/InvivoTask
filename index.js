class BinarySearchTree {
  constructor(container) {
    this.container = container;
    this.root = null;
  }

  insert(value) {
    const newNode = { value, left: null, right: null };

    if (this.root === null) {
      this.root = newNode;
      this.drawNode(newNode);
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          this.drawNode(newNode);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          this.drawNode(newNode);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  drawNode(node) {
    const nodeElement = document.createElement("div");
    nodeElement.classList.add("node");
    nodeElement.innerText = node.value;
    this.container.appendChild(nodeElement);
  }
}

const tree = new BinarySearchTree(document.getElementById("tree-container"));

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    const value = Math.floor(Math.random() * 201) - 100;
    tree.insert(value);
  }
});
