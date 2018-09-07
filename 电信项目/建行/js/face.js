
let visitor = document.querySelector('.visitor');
let body = document.querySelector('body');
let closeDec = document.querySelector('.closeDec');


noHuman();
backHome();
storageHandle();

let numbers = getNum(); 
visitor.innerHTML = `欢迎${numbers}号访客`;
function backHome() {
    closeDec.addEventListener('click', function () {
        window.location.href = "./index.html";
    }, false);
}


//创建本地存储访客数
function storageHandle() { 
    let num = localStorage.getItem('num');
    if (!num) {
        localStorage.setItem('num', 1);
    }  
}
function addNum() {
    num = localStorage.getItem('num');
    num++
    localStorage.setItem('num', num);
    console.log(`访客数:${num}`);
    //当访客数达到9999时清空访客数
    if (num === 9999) {
        localStorage.clear();
    }
}
function getNum() {
    let num = localStorage.getItem('num');
    if (num < 10) {
        num =  `00${num}`;
    } else if (num < 100) {
            num =  `0${num}`;
    } else {
        num = num;
    }
    return num;
    
    
}

//临时通过代码
setTimeout(function () {
    window.location.href = "./product.html";
}, 5000);










//无人操作时自动跳回主页
function noHuman() {
    let timer = 0;
    body.addEventListener('touchstart',function(){
        clearTimeout(timer);
    }, false);
    body.addEventListener('touchend',function(){
        timer = setTimeout(function () {
            window.location.href = "./index.html";
        }, 15000);
    }, false);

}



