// 4.1 Объекты: основы
    // Задача 1: Привет, object (важность: 5)
    // Напишите код, выполнив задание из каждого пункта отдельной строкой:
    // Создайте пустой объект user.
    // Добавьте свойство name со значением John.
    // Добавьте свойство surname со значением Smith.
    // Измените значение свойства name на Pete.
    // Удалите свойство name из объекта.

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

    // Проверка на пустоту (важность: 5)
    // Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
const isEmpty = (obj) => {
    for(let key in obj) {
        if(key) return false;
    }
    return true;
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

    // Сумма свойств объекта (важность: 5)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for( let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

    // Умножаем все числовые свойства на 2 (важность: 3)
    // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
const multiplyNumeric = (obj) => {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key]*= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);