let i = 0;

while (i < 2) {
    console.log("привет");
    i++;
};

i = 1;

while (i < 6) {
    console.log(i);
    i++;
};

i = 7;

while (i < 23) {
    console.log(i);
    i++;
};

const obj = {
    коля: "200",
    вася: "300",
    петя: "400"
};
for(let sollary in obj){
    console.log('${sollary}-зарплата ${obj[sollary]} долларов');
}

i = prompt("дата первой пятницы в неделе")

while (i < 32){
    console.log("Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.");
    i+=7;
}