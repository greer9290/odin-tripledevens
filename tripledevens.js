array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 220, 2201, 2202];

let sumOfAllNums = array.reduce((sum, num) => {
    if (num % 2 == 0) {
        num;
    } else {
        num=0;
    } return sum += num*3;
}, 0);

console.log(sumOfAllNums);