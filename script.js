/*
    1. Дан код:
    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2 ++a - преинкрементом значит значение увеличивается на 1
    d = b++; alert(d);           // 1 b++ - постинкрементом значит значение 1 занесется в переменную с, а потом b увеличивается на 1
    c = (2+ ++a); alert(c);      // 5 к 2 прибавляем а увеличенное на 1 и получаем 5
    d = (2+ b++); alert(d);      // 4 к 2 прибавляем значение b и получаем 4, а потом b увеличивается на 1
    alert(a);                    // 3 а увеличивали два раза на 1, при начальном значение 1, значит получим 3
    alert(b);                    // 3 b увеличивали два раза на 1, при начальном значение 1, значит получим 3
*/

/*
    2. Чему будет равен x в примере ниже?
    var a = 2;
    var x = 1 + (a *= 2);

    Ответ: 5
*/

/*
    3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
    Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

let a = 1, b = 0;

if (a >= 0 && b >= 0)
    console.log(a - b);
else if (a < 0 && b < 0)
    console.log(a * b);
else if (a >= 0 && b < 0 || a < 0 && b >= 0)
    console.log(a + b);

/*
    4. Присвоить переменной а значение в промежутке [0..15].
    С помощью оператора switch организовать вывод чисел от a до 15.
*/
console.log("\n");

const MIN = 0, MAX = 15;
a = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

switch (a) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

/*
    5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
    Обязательно использовать оператор return.
*/

function summation(num_1, num_2) {
    return num_1 + num_2;
}

function subtraction(num_1, num_2) {
    return num_1 - num_2;
}

function multiplication(num_1, num_2) {
    return num_1 * num_2;
}

function division(num_1, num_2) {
    return num_1 / num_2;
}

/*
    6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2 – значения аргументов, operation – строка с названием операции.
    В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

function mathOperation(arg1, arg2, operation) {
    let meaning;

    switch (operation) {
        case "+":
            meaning = summation(arg1, arg2);

            break;
        case "-":
            meaning = subtraction(arg1, arg2);

            break;
        case "*":
            meaning = multiplication(arg1, arg2);

            break;
        case "/":
            meaning = division(arg1, arg2);

            break;
    }

    return meaning;
}

console.log(mathOperation(2, 2, "*"));

/*
    7. *Сравнить null и 0. Попробуйте объяснить результат.
    null используется чтобы указать на отсутсвие вообще какого-либо значения, а 0 это уже конкретное значение
*/

/*
    8. *С помощью рекурсии организовать функцию возведения числа в степень.
    Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow) {
    if (pow == 1)
        return val;
    else
        return val * power(val, pow - 1);
}

console.log(power(18, 4));