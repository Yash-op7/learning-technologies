function binarySearch(x, arr) {
    let l = 0, r = arr.length-1;
    let rank = r+1;
    while(l <= r) {
        let mid = (l+r)/2;
        if(x >= arr[mid]) {
            rank = mid+1;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return rank;
} 

function solve(n, scores, x, trials) {
    const uniqueArray = [...new Set(scores)];
    uniqueArray.sort((a , b) => b-a);
    console.log(uniqueArray, trials);
    result = "";
    let max_score = -1;
    for(let ele of trials) {
        max_score = Math.max(max_score, ele)
        result += binarySearch(max_score, uniqueArray);
        result += ' ';
    }
    console.log(result);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    let index = 0;
    let test_count = parseInt(input[index++]);

    while (test_count--) {
        let n = parseInt(input[index++]);
        let scores = input[index++].split(' ').map(Number);
        let x = parseInt(input[index++]);
        let trials = input[index++].split(' ').map(Number);
        solve(n, scores, x, trials);
    }
});


