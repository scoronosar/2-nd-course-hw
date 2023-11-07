function season() {
    let monthNumber = prompt(`Введите номер месяца`);

    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        console.log (`Зима`);
        }
    else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
        console.log (`Весна`);
        }
    else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
        console.log (`Лето`);
        }
    else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
        console.log (`Осень`);
        }
    else {
        console.log (`Вы ввели неверное значение`);
        }
    }

function guess() {
    const guessThings = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    guess.sort(function () {
        return 0.5 - Math.random();
    });

    alert(guessThings);
    let Ans1 = prompt('Чему равнялся первый элемент массива?');
    let Ans2 = prompt('Чему равнялся последний элемент массива?');

    if (Ans1 === guessThings[0] && Ans2 === guessThings[guessThings.length- 1]) {
        alert("Поздравляем! Вы угадали оба элемента!");
        }
    else if (Ans1 === guessThings[0] || Ans2 === guessThings[guessThings.length - 1]) {
        alert("Вы были близки к победе!");
        } 
    else {
        alert("Вы ответили неверно.");
        }
    }