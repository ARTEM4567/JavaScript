// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.



// Выведите в консоль строку:

// С помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

console.log(`С помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`)



// Задание 2

// В файле html есть разметка:

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// Вывести в консоль каждое из имен (содержимое каждого li).

for(let i = 0; i < document.querySelectorAll('li').length; i++){
    console.log(document.querySelectorAll('li')[i].innerText)
}

// Задание 3

// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

for (let i = 0; i < document.querySelectorAll('li').length; i++){
    document.querySelectorAll('li')[i].innerText = i;
}

// Задание 4

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.




function newTag (tagText, tagName, tagColor) {
    let tag = document.createElement(tagName);
    tag.innerText = tagText;
    tag.style.backgroundColor = tagColor;
    document.body.appendChild(tag);
};

newTag(123, 'div', 'red');



// Задание 5

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу

let p = document.createElement('p');
p.innerText = 'text';
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';
document.body.appendChild(p);


// Задание 6

// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

for (let i = 1960; i <= 2020; i++){
    let option = document.createElement('option');
    option.innerText = i;
    document.querySelector('select').appendChild(option);
}



// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:


// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];



// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

let array = [{name: "Женя", order: false}, {name: "Кристина", order: true}, {name: "Павел", order: false}, {name: "Виолетта", order: false}, {name: "Костя", order: true}];

for (let i = 0; i < array.length; i++){
    let order1
    if(array[i].order){
        order1 = 'оплатил';
    } else {
        order1 = 'отменил';
    }
    let orderText = `Клиент ${array[i].name} ${order1} заказ`;
    let text = document.createElement('li');
    text.innerText = orderText;
    document.getElementById('list2').appendChild(text);
}



// Задание 8

// Есть массив ссылок:

let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];

// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

let div = document.createElement('div');
div.style.backgroundColor = 'green';
div.style.padding = '15px';
div.style.display = 'inline-block';
div.style.border = 'black 3px solid';
document.body.appendChild(div);

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:

// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.

// Вкладывать ссылки в див нужно с помощью метода appendChild или append.

for (i = 1; i < linksArr.length; i++){
    let a = document.createElement('a');
    a.target = "_blank";
    a.innerText = linksArr[i];
    a.href = linksArr[i];
    a.style.display = "block";
    div.appendChild(a);
}

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY


// Задание 9

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let d = document.querySelectorAll('.forRemove');

for (i = 0; i < d.length; i++){
    d[i].remove();
}

// Задание 10*

// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
// заполненную этими объектами. Name должно быть красного цвета, age - зеленого.

let array = [{name: 'Имя1', age: 1}, {name: 'Имя2', age: 2}, {name: 'Имя3', age: 3}, {name: 'Имя4', age: 4}, {name: 'Имя5', age: 5}, {name: 'Имя6', age: 6}];

for (i = 0; i < array.length; i++){
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    document.querySelector('table').appendChild(tr);
    td.innerText = array[i].name;
    td.style.backgroundColor = 'red';
    tr.appendChild(td);
    td2.innerText = array[i].age;
    td2.style.backgroundColor = 'green';
    tr.appendChild(td2);
}

