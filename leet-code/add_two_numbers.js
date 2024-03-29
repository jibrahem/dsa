/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // create variable to hold a head
    let dummyHead = new ListNode(0); // Dummy head to simplify the code
    // create variable current set equal to dummy head
    let current = dummyHead;
    // create varibale carry set equal 0
    let carry = 0;

    // while there is still a value l1 or l2
    while (l1 || l2) {
        // create variable x, if there is a l1 value set it equal to it if not 0
        let x = l1 ? l1.val : 0;
        // create variable y, if there is a l2 value set it equal to it if not 0
        let y = l2 ? l2.val : 0;
        //create variable sum and set it equal to the sum of x, y, and carry
        let sum = carry + x + y;

        // math.floor returns the value rounded down
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
};
