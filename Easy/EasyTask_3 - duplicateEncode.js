// Необходимо реализовать функцию, которая преобразует каждый символ в "(", если он встречается в исходной строке 1 раз,
// если же символ в исходной строке повторяется, то преобразуем его в ")".
// Примечание. Если в исходной строке встречается одна и та же буква в верхнем и нижнем регистре, то считать её за один и тот же символ.

// Примеры:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Моё решение
function duplicateEncode(word){
    word = word.toLowerCase();
    let obj = {},
        result = '';
    for (let i=0; i < word.length; i++) {
        (word[i] in obj) ?  obj[`${word[i]}`] = ')' : obj[`${word[i]}`] = '(';
    }
    for(let i=0; i < word.length; i++) {
        result += obj[`${word[i]}`];
    }
    return result
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));