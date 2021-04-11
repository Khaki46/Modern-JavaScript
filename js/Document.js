console.log(`width:${window.innerWidth}`);
console.log(`height:${window.innerHeight}`);
document.body.style.background = "pink";
setTimeout(() => {
    document.body.style.background = "";
}, 3000);
// alert(location.href); // 显示当前 URL
// if (confirm("Go to Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // 将浏览器重定向到另一个 URL
// }

// console.log(document.body.innerHTML);


let div = document.querySelector('div');
let div2 = document.querySelectorAll('div')[1];
let p = document.querySelector('p');
// document.body.style.backgroundColor = prompt('what is you color','green');
div2.classList.add('color');

setTimeout(() => {
    div.classList.add('color');
}, 1000);
setTimeout(() => {
    div.classList.remove('color');
    p.style.display = 'none'
}, 3000);
setTimeout(() => {
    p.style.display = ''
}, 4000);
div2.style.cssText = 'width: 200px; height: 200px; background-color: pink'

let getDiv2Style = getComputedStyle(div2);
div2.style.width = parseInt(getDiv2Style.width) + 200 + 'px';
function showNotification({top = 0, right = 0, html, className}) {
    let createDiv = document.createElement('div');
    createDiv.className = className;
    
    createDiv.style.top = top + 'px';
    createDiv.style.right = right + 'px';
    createDiv.innerHTML = html;
    document.body.prepend(createDiv);
    setTimeout(() => {
        // createDiv.innerHTML = "";
        // createDiv.classList.remove(className);
        //隐藏占位置 
        // createDiv.style.visibility = "hidden";
        //隐藏掉不占位置 
        createDiv.style.display = 'none';
        // 直接删除元素
        // document.body.removeChild(createDiv)
    }, 1500);
}
showNotification({
    top: 10, // 距窗口顶部 10px（默认为 0px）
    right: 10, // 距窗口右边缘 10px（默认为 0px）
    html: "Hello! AD", // 通知中的 
    className: 'ad'
});
  let example = document.getElementById('example');
    console.log(example.offsetTop);
console.log(example.offsetHeight);
console.log(example.clientLeft);