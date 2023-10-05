let password = "hateyou";
let requestPassword = prompt("Введите пароль");

if (requestPassword === "Пароль введен верно") {
    alert("Пароль введен верно")
}else{
    alert("Пароль введен неправильно")
}

let c = 8

if (c > 0 && c < 10) {
    console.log("Верно")
}else{
    console.log("Неверно")
};

let d = 123;
let e = 341;

if (d > 100 || e > 100) {
    console.log("верно")
}else{
    console.log("неверно")
};

let a = "2";
let b = "3";

alert(Number(a) + Number(b));

let mouthNumber = 12;

switch(mouthNumber){
    case 1:
        console.log("зима");
        break;
    case 12:
        console.log("зима");
        break;
    case 2:
        console.log("зима");
        break;
    case 3:
        console.log("весна");
        break;
    case 4:
        console.log("весна");
        break;
    case 5:
        console.log("весна");
        break;
    case 6:
        console.log("лето");
        break;
    case 7:
        console.log("лето");
        break;
    case 8:
        console.log("лето");
        break;
    case 9:
        console.log("осень");
        break;
    case 10:
        console.log("осень");
        break;
    case 11:
        console.log("осень");
        break;
    default:
        console.log("указано неверное число месяца")
}
