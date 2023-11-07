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
    if (!isNaN(a) && !isNaN(b)){
        return (a*b);
    }
    else{
        return ('Одно или оба значения не являются числом');
    }
}

nan(prompt() , prompt());

function nan(a){
    if (!isNaN(a)){
        return (`n в кубе равняется ${a*a*a}`);
    }
    else{
        return ('Переданный параметр не является числом');
    }
}

nan(prompt());

function getArea() {
    return(this.radius * this.radius * Math.PI);
}


function getPerimeter() {
    return(2 * Math.PI * this.radius);
}
const circle1 = {
  radius: 3,
  getArea,
  getPerimeter,
};

const circle2 = {
  radius: 5,
  getArea,
  getPerimeter,
};


console.log(circle1.getArea())
console.log(circle1.getPerimeter())

console.log(circle2.getArea())
console.log(circle2.getPerimeter())