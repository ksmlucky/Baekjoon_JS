let selfNumArr = Array(10001).fill(false);

for (let i = 1; i <= 10000; i++) {
    if (isSelfNum(i) <= 10000) {
        selfNumArr[isSelfNum(i)] = true;
    }
}

for (let i = 1; i <= 10000; i++) {
    if (selfNumArr[i] == false) {
        console.log(i);
    }
}

function isSelfNum(num) {
    let sum = num;

    while (num != 0) {
        sum += (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}



