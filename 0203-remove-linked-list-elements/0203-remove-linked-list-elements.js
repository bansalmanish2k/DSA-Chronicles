/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {


    while (head !== null && head.val === val) {
        head = head.next;
    }
    let value = head;

    while(value !== null && value.next !== null) {
        if (value.next.val === val) {
            value.next = value.next.next;
        } else {
            value = value.next
        }

    }
    return head

};