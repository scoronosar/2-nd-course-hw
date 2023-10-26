/* 1 */
const num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
	if (num[i] == 10) break;
	console.log(num[i]);
}

/* 2 */

console.log(num.indexOf(4));

/* 3 */

const numbers = [1, 3, 5, 10, 20];

console.log(numbers.join(" "));

/* 4 */

let abs = []

for (let i = 0; i < 3; i++) {
  abs[i] = [];
  for (let j = 0; j < 3; j++) {
    abs[i][j] = "palestine";
  };
};

console.log(abs);

/* 5 */

const number = [1 , 1 , 1 ];

number.push(2 , 2 , 2);

console.log(number);

/* 6 */

const array1 = [9, 8, 7, 'a', 6, 5];

array1.sort();
array1.pop()

console.log(array1);

/* 7 */

const arr = [9, 8, 7, 6, 5];

if (arr.includes(Number(prompt(`Угадай число`)))) {

    alert(`Угадал`)

} else {

    alert(`Не угадал`)

}

/* 8 */

let a = 'abcdef';
abc = [];

for (let i = 0; i <= a.length ; i++ ){
    abc.push(a[i]);
}

abc.reverse();
console.log(abc.join(''));

/* 9 */

const massiv = [[1, 2, 3],[4, 5, 6]];
massiv1 = []

for (let i = 0; i <= massiv.length ; i++){
    for (let j = 0; j <= massiv[i].length; j++){
        massiv1.push(massiv[i][j])
    }
}
console.log(massiv1)