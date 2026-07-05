/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let n = grid[0].length;
    let m = grid.length;
    let col = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            col[i][j] = grid[j][i]
        }
    }

    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < m; i++) {
        obj1[grid[i]] = (obj1[grid[i]] || 0) + 1;
    };

    for (let i = 0; i < m; i++) {
        obj2[col[i]] = (obj2[col[i]] || 0) + 1;
    };
    let count = 0;

    for (let key in obj1) {
        if (key in obj2) {
            count += obj1[key]*obj2[key]
        }
    }
    
    return count
};