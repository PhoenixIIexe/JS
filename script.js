setTimeout(reminder, 5000);
function reminder() {

    /*
    1. Задать температуру в градусах по Цельсию. 
    Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
    Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32,
    где Tf – температура по Фаренгейту, Tc – температура по Цельсию
    */

    let Tc = 36;
    let Tf = (9 / 5) * Tc + 32;
    alert(Tf);

    /*
    2. Работа с переменными.
    3. Объявить две переменные: admin и name.
    Записать в name строку "Василий";
    Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
    */

    let name = "Василий";
    let admin;
    admin = name;
    console.log(admin);

    /*
    4. *Чему будет равно JS-выражение 1000 + "108"
    Ответ: 1000108
    */

    console.log(1000 + "108")
}