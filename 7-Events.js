// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

let input = document.querySelector('input');
input.addEventListener('keyup', function ddt (i){
    let li = document.createElement('li');
    li.innerText = i.key;
    document.querySelector('ul').appendChild(li);
})

// Задание 2

// Вставить в html теги input и div (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)

let input = document.querySelector('input');
input.addEventListener('keyup', () => console.log(input.value))

// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value).

let form = document.querySelector('form');
let input = document.querySelector('input');
form.addEventListener('submit', function ddt (event){
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input.value;
    document.querySelector('ul').appendChild(li);
    input.value = '';
})


// Задание 4

// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.



// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)

let select = document.getElementById('select');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let submit = document.getElementById('submit');
let div = document.getElementById('div');
let form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (select.value == '+'){
        div.innerText = Number(text1.value) + Number(text2.value);
    } else if (select.value == '-'){
        div.innerText = Number(text1.value) - Number(text2.value);
    } else if (select.value == '*'){
        div.innerText = Number(text1.value) * Number(text2.value);
    } else if (select.value == '/'){
        div.innerText = Number(text1.value) / Number(text2.value);
    }
})

// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

let button = document.querySelector('button');

button.addEventListener('click', function (event) {
    event.preventDefault();
    min = Math.ceil(0);
    max = Math.floor(256);
    let red = (Math.floor(Math.random() * (max - min)) + min);
    let green = (Math.floor(Math.random() * (max - min)) + min);
    let blue = (Math.floor(Math.random() * (max - min)) + min);
    button.style.backgroundColor = (`rgb(${red}, ${green}, ${blue})`);
})

button.addEventListener('mouseleave', function (event){
    min = Math.ceil(-180);
    max = Math.floor(180);
    let rotate = (Math.floor(Math.random() * (max - min)) + min);
    event.preventDefault();
    button.style.transform = (`rotate(${rotate}deg)`)
})
