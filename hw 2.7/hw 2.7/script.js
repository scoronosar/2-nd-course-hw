//1

let str = 'string';
str = str.toUpperCase();
console.log(str)

//2

function searchStart(massiv, found) {
    return massiv.filter(str => str.toLowerCase().startsWith(found.toLowerCase()));
}

const result = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
const result2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
const result3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

console.log(result, result2, result3)

//3

console.log(Math.floor(32.58884))

console.log(Math.ceil(32.58884))

console.log(Math.round(32.58884))

//4

const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log("Наименьшее число:", minNumber);
console.log("Наибольшее число:", maxNumber);

//5

function randomNumber(a, b) {
    return Math.ceil(Math.random() * 10);
}

console.log(randomNumber(1, 10))

//6
function generateRandomArray(num) {
    let array = [];
    let length = num / 2;
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * num);
        array.push(randomNum);
    }
    return array;
}

let resultF = generateRandomArray(6);
console.log(resultF);

//7
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}
console.log(getRandomNumber(1, 10));
//8
let currentDate5 = new Date();
console.log(currentDate5);
//9
let currentDate1 = new Date();
currentDate1.setDate(currentDate1.getDate() + 73);
console.log(currentDate1)
//10
function formatDateTime(date) {
    let weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekday = weekdays[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let formattedDate = `Дата: ${day} ${month} ${year} - это ${weekday}.`;
    let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    return `${formattedDate}\n${formattedTime}`;
}
const currentDate = new Date();
const formattedDateTime = formatDateTime(currentDate);
console.log(formattedDateTime);
