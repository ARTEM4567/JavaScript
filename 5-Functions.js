// Задание 1

// Дан объект:

// let user = { name: 'Tom', age: 20, isMarried: false }



// Cформировать массив строк вида "имя_поля - значение_поля":

// ['name - Tom', 'age - 20', 'isMarried - false']

// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in

let user = { name: 'Tom', age: 20, isMarried: false };

function arr (user1) {
    let array = [];
        for (let i in user1){
            array.push(i + ' - ' + user[i]);
        };
    return array;
};

console.log(arr(user))



// Задание 2.1



// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.



// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

function sum (a, b){
    if (arguments.length !== 2){
        console.log('введите два параметра');
    } else if (typeof a == 'number' && typeof b == 'number'){
        let c;
        c = a + b;
        return c;
    } else if (typeof a == 'string' || typeof b == 'string'){
        console.log('введенные данные не являются числами');
    }
    }

console.log(sum(1, 'q'))




// Задание 3



// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”



// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.



// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let guessTheNumber = (number) => {
    let a = Math.floor(Math.random() * (10 - 0)) + 0;
    if (number > 10 || number < 0){
        console.log('Введите число от 1 до 10')
    } else if (typeof number == 'number' && number == a){
        console.log('Вы выйграли!')
    } else if (typeof number == 'number' && number != a){
        console.log(`Вы не угадали, ваше число - ${number},  а выпало число ${a}`)
    } else {
        console.log('Введите число')
    }
}

guessTheNumber(3)

// Задание 4



// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

let array = [1, 3, 5];

let newArray = array.map((item)=>{
    return item;
});

console.log(newArray)


// Задание 5



// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

let list = document.querySelectorAll('li');

let listArray = [];

for (let i = 0; i < list.length; i++){
    if (0 == Number(list[i].innerText) % 2){
        listArray.push(list[i].innerText);
    }
}

for (let item of listArray){
    let li = document.createElement('li');
    li.innerText = item;
    document.querySelector('ul').appendChild(li);
}

console.log(listArray)


// Задание 6

// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option с текстом Категория 1, Категория 2, Категория 3). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). Для этого можно использовать функцию setInterval https://learn.javascript.ru/se...
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

let form = document.createElement('form');
let input = document.createElement('input');
let select = document.createElement('select');
let ul = document.createElement('ul')

document.body.appendChild(form);
form.appendChild(input);
form.appendChild(select);
document.body.appendChild(ul);

for (let i = 1; i <= 10; i++){
    let option = document.createElement('option');
    option.innerText = `Категория ${i}`;
    select.appendChild(option);
};

function time (){
    let li = document.createElement('li');
    li.innerText = 'Hello';
    ul.appendChild(li);
};

setInterval(time, 1000);
