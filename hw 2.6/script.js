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

for (let i = 0; i < a.length ; i++ ){
    abc.push(a[i]);
}

abc.reverse();
console.log(abc.join(''));

/* 9 */

const massiv = [[1, 2, 3],[4, 5, 6]];

const massiv1 = [].concat(...massiv);

console.log(massiv1);

/* 10 */

massive = [3, 1, 8, 7, 4];
result = massive[0];

for (let i = 1; i < massive.length; i++) {
    result += massive[i];
    console.log(result);
    result = massiv[i];
}

/* 11 */

const massivee = [1, 4, 9, 16];

const map1 = (massivee) => {
    return massivee.map(x => x ** 2)
}
console.log(map1(massivee))

/* 12 */

const massivString = ['слово', '', 'слог', 'длинное предложение', 'буква'];

function getWordLengths(massivString) {

    return massivString.map(word => word.length);

}

/* 13 */

function filterPositive(array) {

    return array.filter(number => number < 0)

}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);
