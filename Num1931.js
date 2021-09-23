const input = [];

const strToNumArr = (str) =>
    str.split(' ').map((numString) => Number(numString));

require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', function (line) {
        input.push(line.trim());
    })
    .on('close', function () {
        const N = Number(input.shift());
        //회의를 다음 순서대로 정렬
        //1) 먼저 끝나는 회의
        //2) 끝나는 시간이 같다면, 먼저 시작하는 회의
        const schedule = input
            .map((str) => strToNumArr(str))
            .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

        let result = 0,
            recentEnd = 0;
        schedule.forEach(([start, end]) => {
            //전에 진행된 회의가 끝나기 전에 시작되면 다음으로
            if (start < recentEnd) {
                return;
            }
            //아니면 진행
            result++;
            recentEnd = end;
        });

        console.log(result);
    });