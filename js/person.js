let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
//   rabbit.prototype = animal; // (*)
Object.setPrototypeOf(rabbit, animal);//代替rabbit.__proto__ = animal;

  // 现在这两个属性我们都能在 rabbit 中找到：
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps ); // true

// 水仙数
let number = 100;
let narcissisticNumber = 0;
while (number <= 999) {
  narcissisticNumber = Math.pow(+number.toString().split("")[0], 3) + Math.pow(+number.toString().split("")[1], 3) + Math.pow(+number.toString().split("")[2], 3)
  if (narcissisticNumber == number) {
    console.log(number);
  }
  number++;
}

// 数字对象
let value = "5";
let num = Number(value);
console.log(num);
console.log(typeof num);
let objNum = new Number(value);
console.log(objNum instanceof Number);
console.log(typeof objNum);

// 一到十随机数
console.log(Math.floor(Math.random() * 10 + 1));
// 范围随机数
function selectForm(min, max) {
  let choices = max - min + 1;
  return Math.floor(Math.random() * choices + min);
}

const arr = ["mike", "bar", "tim"];
console.log(Array.from(arr.keys()));
console.log(Array.from(arr.values()));
console.log(Array.from(arr.entries()));
console.log(arr.join(" "));
console.log(arr.reverse());
const numArr = [2, 6, 9, 0, 23, 11];
console.log(numArr.sort(compare));
console.log(numArr.sort((a,b)=>{return b-a}));
function compare(num1, num2) {
  return num1 - num2;
}
console.log(numArr.every((item) => item >= 0));
console.log(numArr.some((item) => item > 10));
console.log(numArr.reduce((num1, num2) => num1 + num2));

const arrLetter = ["Z", "Z", "J", "6", "q", "Z", "v"]
let str = "gsadgadd"
Array.prototype.getMost = function(){
  let obj = this.reduce((p, n) => ((p[n]++ || (p[n] = 1)), (p.max = p.max >= p[n] ? p.max : p[n]), (p.key = p.max > p[n] ? p.key : n), p), {});
  return 'key: '+ obj.key+ ' len: '+obj.max;
}
console.log(arrLetter.getMost());

let objStr = {}
for (const iterator of arrLetter) {
  if (objStr[iterator]) {
    objStr[iterator]++
  } else {
    objStr[iterator] = 1;
  }
}
console.log(objStr);
let max = 0;
let letter = "";
for (const key in objStr) {
  if (max < objStr[key]) {
    max = objStr[key];
    letter = key;
  }
}
console.log(`出现最多字母:${letter}出现次数:${max}`);
