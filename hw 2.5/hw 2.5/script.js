function lower(a , b){
    if (a < b){
        return(a);
    }
    else if (a > b){
        return(b);
    }
    else{
        return(a);
    }
}

lower(prompt(), prompt());

function odd(a){
    if (a % 2 == 0){
        return('Число четное');
    }
    else {
        return('Число нечетное');
    }
}

odd(prompt());

function square(a){
    console.log(a * a);
}

square(prompt());

function square(a){
    return(a * a);
}

square(prompt());

function age(a){
    if (a < 0){
        alert("Вы ввели неправильное значение");
    }
    else if (a > -1 && a < 13){
        alert("Привет, друг!");
    }
    else {
        alert('Добро пожаловать!');
    }

}

age(prompt("How old are you?"));

function nan(a , b){
    if (Number.isNaN(a) == true  && Number.isNaN(b) == true){
        return (a*b);
    }
    else{
        return ('Одно или оба значения не являются числом');
    }
}

nan(prompt() , prompt());

function nan(a){
    if (Number.isNaN(a) == true && Number.isNaN(b) == true){
        return (`n в кубе равняется ${a*a*a}`);
    }
    else{
        return ('Переданный параметр не является числом');
    }
}

nan(prompt());

let radius = 3;

var cyrcle1 = {
    getArea: function(radius) {
        return(2*3.14*radius);
    },
    getPerimeter: function(radius) {
        return(2*3.14*radius);
    }
}

radius = 5;

var cyrcle2 = {
    getArea: function(radius) {
        return(2*3.14*radius);
    },
    getPerimeter: function(radius) {
        return(2*3.14*radius);
    }
}