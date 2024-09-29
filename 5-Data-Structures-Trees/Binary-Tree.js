function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/*

Level 0: 2^0 = 1;
Level 1: 2^1 = 2;
Level 2: 2^2 = 4;
Level 3: 2^3 = 8;

Number of Nodes = 2^h - 1;

Binary Search Tree

lookup O(log N)
insert O(log N)
delete O(log N)

*/

