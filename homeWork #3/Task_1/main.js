let college = [
    {
        name: "Harry",
        age: 17,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 321232,
        typeLearning: "Заочная",
        task: ["ИЗО", "БЖ", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-2-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    }
];


let count = 2;
let studName = college[count].name;
let studAge = college[count].age;
let isStud = college[count].isStudent;
let studCash = college[count].cash;
let isKur = college[count].isKurator;
let kurGroup = college[count].kuratorGroup;


if ( isStud === true ) {
    console.log(`Вы выбрали студента ${studName}`);
    if ( college[0]["age"] >= 18 ) {
        console.log(`Студент ${studName} совершеннолетний. Ему ${college[0]["age"]}`);
    } else {
        console.log(`Студент ${studName} не совершеннолетний. Ему ${college[0]["age"]}`);
    }
    if (studCash >= 4500 ) {
        console.log(`Студент ${studName} получает повышенную стипендию. (${studCash} руб.)`);
    } else if ( studCash <= 4400 && studCash >= 1 ) {
        console.log(`Студент ${studName} получает обычную стипендию. (${studCash} руб.)`);
    } else if  ( studCash === 0 ) {
        console.log(`Студент ${studName} не получает стипендию.`);
    }
} else if ( isStud === false ) {
    console.log(`Вы выбрали преподавателя ${studName}`);
    if ( isKur === true ) {
        console.log(`Преподаватель ${studName} куратор группы ${kurGroup} `);
    }
}
