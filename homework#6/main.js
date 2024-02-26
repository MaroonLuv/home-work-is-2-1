// Вариант №28


let num_check = (array) => {
    let result = [];
    for (let i of array) {
        let x = Math.sqrt(i); // Вычисление корня из элемента массива
        if ((x % 1) == 0) {
            result.push(i); // Добавление элемента в список, если корень извлекается
        };
    };
    return result; // Возврат списка в res
};


let nums = [2, 5, 4, 16, 3, 32, 8, 64]; // Задание массива
let res = num_check(nums); // Вызов функции
console.log(`Числа, которые являются степенью двойки: ${res}`); // Вывод результата
