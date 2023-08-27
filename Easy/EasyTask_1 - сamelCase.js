// Необходимо реализовать функцию, которая преобразует слова, разделённые "-" и "_", в верблюжий регистр (CamelCase).
// Первая буква первого слова должна быть в том же регистре, что и в исходной строке.
// Следующие же слова должны быть написаны с большой буквы.
// Предусматреть случай, когда передаётся пустая строка.

// Примеры:
// "the-stealth-warRior"превращается в"theStealthWarrior"

// "The_Stealth_Warrior"превращается в"TheStealthWarrior"

// "The_Stealth-Warrior"превращается в"TheStealthWarrior"
  

// моё решение
function toCamelCase(str = ""){
    if (str === "") {
        return str;
    } else {
        let arr = str.split(/[-_]/);
        str = '';
        if (arr[0][0] === arr[0][0].toUpperCase()) {
            str += correctReg(arr[0]);
        } else {
            str += arr[0].toLowerCase();
        }
        for (let i = 1; i < arr.length; i++) {   
            str += correctReg(arr[i]);  
        }
        function correctReg(item) {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        }
        return str;
    }
}

console.log(toCamelCase('the-stealth-waRrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('The_Stealth-Warrior'));
console.log(toCamelCase(''));