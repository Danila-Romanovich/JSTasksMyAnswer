// Необходимо реализовать функцию, которая возводит в квадрат каждую цифру входного числа и соединяет результаты.
// Примеры: 
// Ввод 9119 вернёт 811181, потому что 9^2 — это 81, а 1^2 — это 1. (81-1-1-81)
// Ввод 765 вернёт 493625.

// Примечание. Функция принимает целое число и возвращает целое число.

// function squareDigits(num){
//     let newNum = '';
//     for (let i=0; i<String(num).length; i++) {
//         newNum += String(num)[i] ** 2;
//     }
//     return +newNum;
// }


function squareDigits(num){
    return +((num + '').split('')).map(i => i*i).join('');
}

console.log(squareDigits(9119));