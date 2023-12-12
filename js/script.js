'use strict';

console.log("The examples")
// Пример №1
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических 
// операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 7 + 2,
// 7 - 3,
// 2 * 4,
// 4 / 2,
// поместив результат каждого выражения в соответствующую 
// переменную. Например, let a1 = 7 + 2. Результаты переменных вывести в console.log();
let a1 = 7+2; // 9
let a2 = 7-3;// 4
let a3 = 2*4;// 8
let a4 = 4/2;// 2
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


// Пример №2
// Напишите скрипт, который находит площадь прямоугольника высота 23см. 
// (в числовую переменную height), шириной 10см (в числовую переменную width), 
// значение площади должно хранится в числовой переменной s. (S=a*b);
let height = 23;
let width = 10;
let s;
s = height * width;
console.log(`S = ${s}`);


// Пример №3
// Создайте переменную str и присвойте ей значение 'qwerty'. Обращаясь к отдельным 
// символам этой строки выведите на экран символ 'q', символ 'w', символ 'r'.
let str = 'qwerty';
console.log(str[0]);
console.log(str[1]);
console.log(str[3]);

// Пример №4
// Напишите скрипт, который считает количество секунд в часе.
console.log(60 * 60);

// Пример №5
// Переделайте приведенный код так, чтобы в нем использовались операции 
// +=, -=, *=, /=, ++, --. 
// Количество строк кода при этом не должно измениться. Код для переделки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// console.log(num);
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --; 
console.log(num);


// ДОМАШНЕЕ ЗАДАНИЕ

console.log("The homework")

// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();

console.log("Exercise №1");

let b1 = 5 % 3;
let b2 = 3 % 5;
let b3 = 5 + '3';
let b4 = '5' - 3;
let b5 = 75 + 'кг';

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

// Пример №2 
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.

console.log("Exercise №2");

let heightC = 10;
let dC = 4;
let v = (dC / 2) * (dC / 2) * 3.14 * 10;

console.log(v);

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).

console.log("Exercise №3");

let a = 10;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.

console.log("Exercise №4");

let c = 15;
let d = 2;

let result = c + d;

console.log(result);

// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

console.log("Exercise №5");

a = 10;
b = 2;
c = 5;

console.log(a+b+c);


// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.

console.log("Exercise №6");

a = 17;
b = 10;
c = a - b;
d = 7;
result = c + d;

console.log(result);

// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.

console.log("Exercise №7");

let name = "Alexander";

console.log(`Привет, ${name}!`);

// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.

console.log("Exercise №8");

let age = 25;
console.log(`Мне ${age} лет!`);

// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.

console.log("Exercise №9");

str = 'abcde';

console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

console.log("Exercise №10");

console.log(`В часе ${60*60} секунд`);
console.log(`В сутках ${60*60*24} секунд`);
console.log(`В месяце ${60*60*24*30} секунд`);

//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. 
// Количество строк кода при этом не должно измениться.
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);

console.log("Exercise №11");

num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;

console.log(num);

// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --. 
// Количество строк кода при этом не должно измениться.
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// console.log(num);

console.log("Exercise №12");

num = 10;
num ++;
num ++;
num --;

console.log(num);