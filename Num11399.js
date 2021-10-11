const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let input = [];
let before = 0;
let answer = 0;

rl.on('line', line => input.push(line)).on('close', () => {
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number).sort((a,b) => a-b);

    for(let i=0; i<n; i++){
        answer += before + arr[i];
        before += arr[i];
    }

    console.log(answer);
})