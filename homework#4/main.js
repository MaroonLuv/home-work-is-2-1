// Первое задание

console.log("Первое задание:\n\n")

let nums = [[1, 3, 5, 9, 2], [5, 2, 3], [7, 5, 9, 2]];
let summa = 0;

for (let i = 0; i < nums.length; i++) {
    console.log(`Массив №${i}, количество элементов: ${nums[i].length}`);
    for (let j = 0; j < nums[i].length; j++) {
        summa += nums[i][j];
        console.log(nums[i][j]);
    };
};

console.log(`Сумма элементов двумерного массива = ${summa}`);


// Второе задание

console.log("\n\n\nВторое задание:\n\n")

let peoples = [
    {
        name: "John",
        age: 15,
        growth: 175
    },
    {
        name: "Marina",
        age: 24,
        growth: 160
    },
    {
        name: "Bob",
        age: 19,
        growth: 180
    }
];

for (let info of peoples) {
    info.growth += 5;
    console.log(`Имя: ${info.name}; рост: ${info.growth}`);
};


// Третье задание

console.log("\n\n\nТретье задание:\n\n")

let companys = {
    company_1: {
        title: "Apple",
        age: 26,
        staff: {
            manager: {
                name: "Bob",
                age: 20
            },
            administrator: {
                name: "Bill",
                age: 34
            },
            worker: {
                name: "Lilia",
                age: 26
            }
        }
    },
    company_2: {
        title: "Samsung",
        age: 14,
        staff: {
            manager: {
                name: "John",
                age: 215
            },
            administrator: {
                name: "Kim",
                age: 21
            },
            worker: {
                name: "Maria",
                age: 14
            }
        },
    }
    
};

for (let i in companys) {
    console.log(`Компания «${companys[i].title}», сотрудники:`);
    for (let j in companys[i].staff) {
        console.log(companys[i].staff[j].name)
    };
    console.log("\n");
};
