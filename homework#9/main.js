const calculate = () => {
    // Инициализация переменных
    const inputPhones = parseInt(document.querySelector('#phone').value);
    const inputPhonesPrice = parseInt(document.querySelector('#phone_price').value);
    const inputLaptops = parseInt(document.querySelector('#laptop').value);
    const inputLaptopsPrice = parseInt(document.querySelector('#laptop_price').value);
    const inputTv = parseInt(document.querySelector('#tv').value);
    const inputTvPrice = parseInt(document.querySelector('#tv_price').value);

    // Проверка на заполнение всех полей
    if (isNaN(inputPhones) || isNaN(inputPhonesPrice) || isNaN(inputLaptops) || isNaN(inputLaptopsPrice) || isNaN(inputTv) || isNaN(inputTvPrice)) {
        alert("Заполните все поля!");
        return;
    };

    // Проверка на неотрицательность значений для количества покупаемых товаров
    if (0 > inputPhones || 0 > inputLaptops > 0 || 0 > inputTv) {
        alert("Количество товара не может быть отрицательным!");
        return;
    };

    // Проверка на неотрицательность значений для цен при условии, что соответствующие товары будут покупать
    if ((0 >= inputPhonesPrice && inputPhones > 0) || (0 >= inputLaptopsPrice && inputLaptops > 0) || (0 >= inputTvPrice && inputTv > 0)) {
        alert("Цена не может быть нулевой или отрицательной!");
        return;
    };


    // Сумма значений
    let priceSum = (inputPhones * inputPhonesPrice) + (inputLaptops * inputLaptopsPrice) + (inputTv * inputTvPrice);
 
    // Вывод результата
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `<b>Итоговая стоимость: $${priceSum.toFixed(2)}</b>`;
};
