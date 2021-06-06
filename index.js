// 1. Задача про Числа Фібоначчі
const fibo = (n) => {

    if (n < 0) {
        return 0;
    }
    if (n < 2) {
        return 1;
    }
    return (fibo(n - 1) + fibo(n - 2));
}
console.log(fibo(5));

// 2.геометрична прогресія за допомогою function expression

const geo = function(n, q) {
    let b1 = 1;
    let sum = 0;
    let str = '';
    for (let i = 0; i < n; i++) {
        sum += b1;
        str += b1 + ' ';
        b1 *= q;
    }
    console.log(str);
    return sum;
}
console.log(geo(5, 2));


// 3.
// let a = parseInt(prompt('Enter the first number of range'))
// let b = parseInt(prompt('Enter the second number of range'))
// let simple = 1;
// let simpleNumber = function (a, b) {
//     for (let i = 1; i <= a; i++) {
//         for (let g = 1; g >= b; g--) {

//         }
//     }
// }
// console.log(a, b);

// let a = parseInt(prompt('Enter number of range'));
// let b = parseInt(prompt('Enter second number of range'));
// let str = 
// function isSimple(a, b) {
//     for (let i = 2; i < a; i++) {
//         for (let h = 1; h < b; h--)
//             if (a % i === 0) {
//                 return false;
//             }
//     }
//     return ;
// }
// console.log(isSimple(4));


// let v = parseInt(prompt('Enter number of range'));
// let b = parseInt(prompt('Enter second number of range'));
const isPrime = num => {
    // let str = '';
    let count = 2;
    while (count < (num / 2) + 1) {
        if (num % count !== 0) {
            count++;
            continue;
        }
        return false;
    }
    return true;
}
const primeBetween = (a, b) => {
    let count = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
console.log(primeBetween(3, 17));