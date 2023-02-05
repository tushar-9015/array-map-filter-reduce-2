const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 20]

const oddSum = (sum, num) => num % 2 === 0 ? sum: sum + num;

const oddEven = (arr, num) => num %2 ===0 ? [...arr, num -1] : [...arr, num + 1]

const oddIdx = (sum, curr , index) => index % 2 === 0 ? sum : sum + curr;

const maxNum = (largNum, curr) => largNum > curr ? largNum: curr;

const divisibleByTen = (arr, curr) => curr%10 === 0 ? [...arr,curr] :arr;

const oddEvenSum = (sum, curr) => curr%2 === 0 ? {...sum, sumEven : sum.sumEven + curr}: {...sum,sumOdd : sum.sumOdd + curr}

const ans1 = numbers.reduce(oddSum, 0);
const ans2 = numbers.reduce(oddEven, [])
const ans3 = numbers.reduce(oddIdx,0);;
const ans4 = numbers.reduce(maxNum, 0);
const ans5 = numbers.reduce(divisibleByTen, []);
const ans6 = numbers.reduce(oddEvenSum,{sumOdd: 0, sumEven: 0});

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
console.log(ans5);
console.log(ans6);


