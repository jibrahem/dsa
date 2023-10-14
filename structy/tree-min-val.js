const treeMinValue = (root) => {
    const queue = [root]
    let min = Infinity
    while (queue.length > 0) {
        const curr = queue.shift()
        if (curr.val < min) {
            min = curr.val
        }
        if (curr.left !== null) queue.push(curr.left)
        if (curr.right !== null) queue.push(curr.right)
    }
    return min
};
