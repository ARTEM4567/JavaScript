// Задание 1

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    let newStr = str[0].toUpperCase() + str.slice(1, str.length);
    return newStr;
}

console.log(ucFirst('привет, мир!'));



// Задание 2

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str){
    if (str.toLowerCase() == 'badword' || str.toLowerCase() == 'xxx'){
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('xxX'))


// Задание 3

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function reverse (str){
    let newStr = str.split('');
    newStr.reverse();
    newStr = newStr.join('');
    return newStr;
}

console.log(reverse('Привет Женя!'));



// Задание 4



// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 



// let stations = [

// 'MAN675847583748sjt567654;Manchester Piccadilly',

// 'GNF576746573fhdg4737dh4;Greenfield',

// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

// 'SYB4f65hf75f736463;Stalybridge',

// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

// ];




// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

// MAN: Manchester Piccadilly

// Вывести эти строки в консоль

// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

let stations = ['MAN675847583748sjt567654;Manchester Piccadilly', 'GNF576746573fhdg4737dh4;Greenfield', 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 'SYB4f65hf75f736463;Stalybridge','HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

function ccc (stations){
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < stations.length; i++){
        let li = document.createElement('li');
        let stationCode = stations[i].slice(0, 3);
        let stationName = stations[i].slice(stations[i].indexOf(';') + 1, stations[i].length);
        let stationInfo = stationCode + ': ' + stationName;
        li.innerText = stationInfo;
        ul.appendChild(li);
        console.log(stationInfo);
    }
}

ccc(stations);



// Задание 5

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

// Пример:

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr){ // Первое решение
    let array = [];
    for (let i = 0; i < arr.length; i++){
        let status = false;
        for (let a = 0; a < array.length; a++){
            if (arr[i] == array[a]){
                status = true;
            }
        }
        if (status == false){
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(unique(strings));

function unique(arr){ //Второе решение
    let array = [];
    for (let i = 0; i < arr.length; i++){
        if (array.indexOf(arr[i]) == -1){
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(unique(strings));
