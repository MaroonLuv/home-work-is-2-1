// Шестопалов Артём, 28 вариант

let count_movies_after_year = (movies, year) => { // Инициализация функции
    let res = [];
    for (let i of movies) {
        if (i[1] > year) {
            res.push(i[0])
        };
    };
    return res;
}; 


let list = [["Film#1", 2010], ["Film#2", 2015], ["Film#3", 2009], ["Film#4", 2011], ["Film#5", 2014], ["Film#6", 2012], ["Film#7", 2010], ["Film#8", 2021]]; // Список фильмов
let x = prompt(); // Ввод года

console.log(count_movies_after_year(list, x)); // Вызов функции и вывод её результата
