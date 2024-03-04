// Вариант №22


let num_check = (array) => {
    let result = [];
    for (let i of array) {
        if (i < 0) {
            result.push(i); // Добавление элемента в список, если оно меньше нуля
        };
    };
    return result; // Возврат списка в res
};


let nums = [2, 5, -1, 16, -317, 32, 8, 64, 128, 256, -26, -6, -1]; // Задание массива
let res = num_check(nums); // Вызов функции
console.log(`Числа, которые являются отрицательными: ${res}`); // Вывод результата
