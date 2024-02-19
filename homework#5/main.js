// Вараинт 28 (3)


task = {
    title: "Пропылесосьте",
    description: "Пропылесосьте ковры в комнатах",
    difficulty: 1,
    time: 10
};

for (let i in task) {
    console.log(task[i]);
};

if (task.difficulty === 0) {
    console.log("Задание лёгкое");
}
else if (task.difficulty == 1) {
    console.log("Задание средней сложности")
}
else {
    console.log("Задание сложное");
};