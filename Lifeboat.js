function solution(people, limit){
    var answer = 0
    people.sort((a,b) => b-a)
    let l = 0
    let r = people.length-1

    while(l<r){
        var sum = people[l] + people[r]
        if(sum>limit){
            l++
        } else {
            l++
            r--
        }
        answer++
    }
    if(l == r) answer++
    return answer
}

console.log(solution([70,50,80,50],100));
console.log(solution([70,80,50],100))
