// function countBodyChildren() {
//     let bodyElement = document.getElementsByTagName('body')[0];
//     console.log(bodyElement.childNodes);
//     console.log(bodyElement.childNodes.length);
// }
// window.onload = countBodyChildren;

let book = {
    name:"book",
    _year: 2004,//_ 只等用对象方法访问的属性
    edition: 1
}
Object.defineProperties(book, {
    name: {
        writable: false,
        
    }
})
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (value) {
        if (value > 2004) {
            this.edition += value - this._year;
            this._year = value;
        }
    }
})
book.year = 2005;
console.log(book.edition);
console.log(book.year);
book.name = "test";
console.log(book.name);
console.log(book);

// 原型模式
function Person() {
    
}
Person.prototype.name = "Mike";
Person.prototype.age = 20;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let person1 = new Person();
person1.sayName();
let person2 = new Person();
person2.sayName();
console.log(person1.sayName == person2.sayName);

console.log(Person.prototype);
person1.name = "John";
console.log(person1.name);//来自实例
console.log(person2.name);//来自原型
console.log(person1);
console.log(person2);
console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));//原型 false
// __proto__ 继承
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;//放弃使用
console.log(rabbit.eats);//true

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = animal;//当创建一个new Rabbit 时把它的[[Prototype]] 赋值为 animal
let rabbit2 = new Rabbit("Rabbit 2");//rabbit2.__proto__ = animal;
console.log(rabbit2.eats);

// Function.prototype.defer = function(ms) {
//     let f = this;
//     console.log(f);
//     return function(...args) {
//       setTimeout(() => f.apply(this, args), ms);
//     }
//   };
  
//   // check it
//   function f(a, b) {
//     alert( a + b );
//   }
  
//   f.defer(1000)(1, 2); // 1 秒后显示 3
  
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
let theAnimal = {
    name:"",
    eats: true,
    food: [],
    fun: function () {
        console.log(`${this.name}+${this.eats}+${this.food}`);
    }
}
let theRabbit = Object.create(theAnimal);//继承theAnimal
theRabbit.name = "rabbit";
theRabbit.eats = true;
theRabbit.food.push("test");
theRabbit.food.push("test2");
theRabbit.fun();
console.log(Object.getPrototypeOf(theRabbit))