// Write your code here
//ONE
let num1 = 2;
let num2 = 31;
let multiply = num1 * num2;

console.log(`${num1} * ${num2} = ${multiply}`);

//TWO
function random() {
  return Math.ceil(Math.random() *10) + 1;
}

let randomNumber = random();
console.log(randomNumber);

//THREE
let num3 = 22;
let num4 = 6;
let mod = num3 % num4;


console.log(`${num3} % ${num4} = ${mod}`);

//FOUR
function max(numbers) {
  return Math.max(...numbers);
}
let numberSet = [5, 10, 15, 20, 12];
let highestNumber = max(numberSet);
console.log("The highest number is:", highestNumber);


