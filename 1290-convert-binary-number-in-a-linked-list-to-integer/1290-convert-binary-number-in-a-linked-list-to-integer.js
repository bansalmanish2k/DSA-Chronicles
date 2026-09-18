/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let ans=0;

    let current = head;

    while(current != null){
        ans = ans*2 + current.val;

        current = current.next;
    }

    return ans
    
};