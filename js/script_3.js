'use strict';
// Используя литерал объекта создайте пустой объект cat.
// Добавьте свойство name со значением "Roxy".
// Добавьте свойство lags со значением 4.
// Добавьте свойство color со значением "grey".
// Добавьте свойство full name со значением "Roxy, красивая кошка".
// Выведите full name через console.log().
// let cat = {};
// cat.name = "Roxy";
// cat.lags = 4;
// cat.color = "grey";
// cat["full name"] = "Roxy, красивая кошка";
// console.log(cat["full name"]);

// Напишите функцию-конструктор Person, которая принимает два параметра: 
// name (имя) и age (возраст).
// С помощью оператора new создайте объект person_1, передающий в 
// функцию-конструктор аргументы: имя "Andrey" и возраст 28.
// Выведите свойства объекта person_1 через console.log().
// Добавьте к шаблону объекта Person свойство specialty с помощью 
// prototype. Значением свойства будет "менеджер".
// Выведите свойство specialty объекта person_1 через console.log().
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let person_1 = new Person('Andrey', 28);
// console.log(person_1.name);
// console.log(person_1.age);
// console.log(person_1);

// Person.prototype.specialty = "менеджер";
// console.log(person_1.specialty);

// Используя литерал объекта создайте объект cat с тремя свойствами: 
// name, legs и color.
// С помощью Object.create() создайте объект kitten 
// объектом-прототипом которого будет cat.
// Выведите свойства объекта kitten через console.log().

// let cat = {
//     legs:4,
//     name : 'Roxy',
//     color: 'grey'
// }
// let kitten = Object.create(cat);
// console.log(kitten.name);
// console.log(kitten.legs);
// console.log(kitten.color);

// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). Также класс должен иметь метод 
// getSalary(), который будет выводить зарплату работника. Зарплата - 
// это произведение (умножение) ставки rate на количество отработанных 
// дней days.

/*class worker{
    constructor(name, surname, rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
worker = new worker('Andrey', 'Makeenko', 100, 21);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getSalary());*/


//Домашнее задание


// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.

console.log("Exercise №1");

var city1 = {};
city1.name = "ГородN";
city1.population = 1e6;

console.log(city1.name);
console.log(city1.population);

// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

console.log("Exercise №2");

var city2 = {
    name: "ГородM",
    population: 1e6
}

console.log(city2.name);
console.log(city2.population);

// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.

console.log("Exercise №3");

city1.getName = function(){
    return city1.name;
}
city2.getName = function(){
    return city2.name;
}
console.log(city1.getName());
console.log(city2.getName());

// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.

console.log("Exercise №4");

city1.exportStr = function(){
    return `name=${city1.getName()}\npopulation=${city1.population}\n`
}
city2.exportStr = function(){
    return `name=${city2.getName()}\npopulation=${city2.population}\n`
}

console.log(city1.exportStr());
console.log(city2.exportStr());

// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..

console.log("Exercise №5");

function getObj(){
    return this;
}

city1.getCity = city2.getCity = getObj;

console.log(city1.getCity().getName());
console.log(city2.getCity().getName());


// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

console.log("Exercise №6");

let d1 = [45,78,10,3];
d1[7] = 100;

console.log(d1);
console.log(d1[6], d1[7]);



// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.

console.log("Exercise №7");

let d2 = [45,78,10,3], sum2 = 0;

for(let n of d2){
    sum2 += n;
}

console.log(`Сумма массива: ${sum2}`);

// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

console.log("Exercise №8");

let d3 = [45,78,10,3], sum3 = 0;

d3[7] = 100;

for(let n in d3){
    sum3 += d3[n];
}

console.log(`Сумма массива: ${sum3}`);

// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)

console.log("Exercise №9");

let d4 = [45,78,10,3];

function my(a, b) {
    if (a < b) {
    return 1;
    } 
    else if (a > b) {
    return -1;
    } 
    else {
    return 0;
    }
}

d4.sort(my);

console.log(d4);