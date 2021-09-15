/*
    1. Написать функцию, преобразующую число в объект. 
    Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
    в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
    Например, для числа 245 мы должны получить следующий объект: 
        {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

console.log('_________1 задание_________');
let num = 1000;
let categories = {};

if (num < 10) {
    categories['единицы'] = num % 10;
    categories['десятки'] = 0
    categories['сотни'] = 0
}
else if (num < 100) {
    categories['единицы'] = num % 10;
    categories['десятки'] = Math.floor(num / 10) % 10;
    categories['сотни'] = 0
}
else if (num < 1000) {
    categories['единицы'] = num % 10;
    categories['десятки'] = Math.floor(num / 10) % 10;
    categories['сотни'] = Math.floor(num / 100) % 10;
}
else
    console.log("Число превышает 999!")

console.log(categories);

/*
    2. Продолжить работу с интернет-магазином:
    В прошлом домашнем задании вы реализовали корзину на базе массивов.
    Какими объектами можно заменить их элементы?
    Реализуйте такие объекты.
    Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

console.log('\n_________2 задание_________');

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    return number;
}

function basket(product = "", price = 0) {
    let point = {};

    point['product'] = product;
    point['price'] = price;

    basketData[basketData.length] = point;
    this.basketData = basketData;

    this.basketPricePrint = basketPrice;
}

function basketPrice() {
    let sumBasketPrice = 0;
    for (item of this.basketData)
        sumBasketPrice += item.price;
    return sumBasketPrice;
}

var basketData = [];

new basket("pencil", getNumber(50, 100));
new basket("eraser", getNumber(50, 100));
new basket("ruler", getNumber(50, 100));
let last_product = new basket("pen", getNumber(50, 100));

console.log("Сумма вашей корзины:", last_product.basketPricePrint());

/*
    3. * Подумать над глобальными сущностями. 
    К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. 
    Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
    но в разных местах давал возможность вызывать разные методы.
*/

console.log('\n_________3 задание_________');

console.log('Подумал :)')