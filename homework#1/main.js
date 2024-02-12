let product = {
    name: "Чайник",
    price: 500,
    inStock: true,
    brand: "apple",
    specifications: {
        power: 900
    },
    discount: {
        percentage: 25,
        expirationDate: "2024-02-06"
    }
};


let customer = {
    name: "Tom",
    budget: 2500
};

let price = product.price;
let perc = product.discount.percentage;

if (customer.budget >= price) {
    console.log(`Информация о покупке. Название: ${product.name}; Цена: ${price}, Наличие: ${product.inStock}, Бренд: ${product.brand}`)
    console.log(`Характеристики товара. Мощность: ${product.specifications.power} Вт.`)
    if (perc > 0) {
        console.log(`Информация о скидке. Процент скидки: ${perc}%. Скидка действует до ${product.discount.expirationDate}`)
        let sum = price - price * (perc / 100)
        console.log(`Итоговая цена (с учётом скидки): ${sum}`)
    } else {
        console.log(`Итоговая цена: ${price}`)
    }
} else {
    console.log("Ваш бюджет меньше цены товара!")
};
