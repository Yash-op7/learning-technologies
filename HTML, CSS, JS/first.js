// problem statemet: given a bunch of scores, and your scores, output your rank after each score
function solve(n, scores, x, trials) {
    let uniqueScores = []
    uniqueScores = scores.filter((value) => {
        return uniqueScores.find(value);
    })
    console.log(scores);
    console.log(uniqueScores);
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
        // Reading n
        let n = parseInt(input[index++]);

        // Reading scores array
        let scores = input[index++].split(' ').map(Number);

        // Reading x
        let x = parseInt(input[index++]);

        // Reading trials array
        let trials = input[index++].split(' ').map(Number);

        solve(n, scores, x, trials);
    }
});

function solve(n, scores, x, trials) {
    // Your logic to solve the problem goes here
    console.log(`n: ${n}, scores: ${scores}, x: ${x}, trials: ${trials}`);
}
