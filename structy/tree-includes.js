// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  if (root === null) return false
  const queue = [ root ]
  while(queue.length > 0){
    const curr = queue.shift()
    if(curr.val === target) return true
    if(curr.left !== null) queue.push(curr.left)
    if(curr.right !== null) queue.push(curr.right)
  }
  return false
};


