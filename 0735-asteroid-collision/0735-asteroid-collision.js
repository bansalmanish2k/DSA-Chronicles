/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];
    let top = -1;
    let i = 0;

    while (i < asteroids.length) {
        if (top == -1 ||
            asteroids[i] > 0 ||
            stack[top] < 0) {
            top++;
            stack.push(asteroids[i]);
            i++;
            continue;
        } 
        if (Math.abs(stack[top]) == Math.abs(asteroids[i])) {
                stack.pop();
                top--;
                i++;
                continue;
            }
           
            if (Math.abs(stack[top]) > Math.abs(asteroids[i])) {
                i++;
                continue;
            }

                stack.pop();
                top--;
                continue;

    }
    return stack;

};