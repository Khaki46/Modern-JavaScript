console.log(`width:${window.innerWidth}`);
console.log(`height:${window.innerHeight}`);
document.body.style.background = "pink";
setTimeout(() => {
    document.body.style.background = "";
}, 1000);
// alert(location.href); // 显示当前 URL
// if (confirm("Go to Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // 将浏览器重定向到另一个 URL
// }

// console.log(document.body.innerHTML);

// task
let li = document.querySelectorAll('ul > li');
for (let index = 0; index < li.length; index++) {
    console.log(li[index].firstChild.textContent);
}

// for (const iterator of li) {
//     console.log(iterator.firstChild.data);
// }

