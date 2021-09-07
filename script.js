/*
    1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
console.log('_________1 задание_________');
let nums = 0;
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; ++i) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }
    if (check)
        console.log(nums);
    ++nums;
}

/*
    2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
    Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
    3. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    return number;
}

console.log('_________2 задание_________');
let basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "eraser",
        price: getNumber(50, 100)
    },
    {
        product: "ruler",
        price: getNumber(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар: " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice);

console.log('_________3 задание_________');
function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let prod of basket) {
        basketPrice += prod.price;
    }

    return basketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket));
/*
    4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
*/

console.log('_________4 задание_________');
for (let i = 0; i <= 9; console.log(i++)) { }

/*
    5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
    только у вашей пирамиды должно быть 20 рядов, а не 5:
*/

console.log('_________5 задание_________');
let str = 'x';
for (let i = 0; i <= 20; ++i) {
    console.log(str)
    str += "x";
}