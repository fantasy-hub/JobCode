//初始的随机定位
function initPosition(width, height) {
    let randomX = Math.round((document.body.clientWidth - width) * Math.random());
    let randomY = Math.round((document.body.clientHeight - height) * Math.random());
    let positionList = [randomX, randomY];
    return positionList;
}

//移动的偏移量，随机方向
function randomNum(px) {
    //移动常量
    const PX = px;
    //1  -1 随机数
    let plusOrMinus =  Math.random() < 0.5 ? -1 : 1;
    let moveRange = plusOrMinus * PX;
    return moveRange;
}
//上下左右随机移动    
function randMove(dom) {
    let ele = $(dom);
    let X = randomNum(1);
    let Y = randomNum(1);
    // let width = parseInt(ele.css('width'));
    // let height = parseInt(ele.css('height'));
    let height = ele[0].offsetHeight;
    let width = ele[0].offsetWidth;
   
    let positionList = initPosition(width, height);
    let movX = positionList[0];
    let movY = positionList[1];
    setInterval(function () {
        if (collision(dom) === 'xBom') {
            X = -X;
        }
        if (collision(dom) === 'yBom') {
            Y = -Y;
        }
        movX = movX + X;
        movY = movY + Y;      
        ele.css({'left': movX});
        ele.css({'top': movY});
    }, 25)
   

}
//碰撞检测
function collision(dom) {
    let ele = $(dom);
    let nowTop = $(ele).offset().top;
    let nowLeft = $(ele).offset().left;
    if (nowLeft > document.body.clientWidth - parseInt($(ele).css('width')) || nowLeft < 0) {
        return 'xBom';
    }
    if (nowTop > document.body.clientHeight - parseInt($(ele).css('height')) || nowTop < 0) {
        return 'yBom';
    }  
    

}

//点赞
function praise(list, item) {
    $('.fabulous').on('click', list, function () {
        list[item] = list[item] + 1;
        $('.count').html(`${list[item]}`);
    }); 
}

//随机从数组中取出几个元素
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}



let imgInfo = getRandomArrayElements(imgData, 7);

//领导背景
function leaderGg(dom) {
    $(dom).css({"background": "url('./img/image/img_bg_dj_ld_k.png') no-repeat", "background-size": "100%"})
}

if (imgInfo[0].type === "0") {
    leaderGg('#f');
}
if (imgInfo[1].type === "0") {
    leaderGg('#h');
}
if (imgInfo[2].type === "0") {
    leaderGg('.photo');
}
if (imgInfo[3].type === "0") {
    leaderGg('.photo1');
}
if (imgInfo[4].type === "0") {
    leaderGg('.photo2');
}
if (imgInfo[5].type === "0") {
    leaderGg('.photo3');
}
if (imgInfo[6].type === "0") {
    leaderGg('.photo4');
}

$('#f>img').attr('src', imgInfo[0].path);
$('#h>img').attr('src', imgInfo[1].path);
$('.photo>img').attr('src', imgInfo[2].path);
$('.photo1>img').attr('src', imgInfo[3].path);
$('.photo2>img').attr('src', imgInfo[4].path);
$('.photo3>img').attr('src', imgInfo[5].path);
$('.photo4>img').attr('src', imgInfo[6].path);

randMove('#f');
randMove('#h');
randMove('.photo');
randMove('.photo1');
randMove('.photo2');
randMove('.photo3');
randMove('.photo4');

let countList = {
    imgNum1: 0,
    imgNum2: 0,
    imgNum3: 0,
    imgNum4: 0,
    imgNum5: 0,
    imgNum6: 0,
    imgNum7: 0,
}

//点击弹出图片详情
$('.close').on('click', function () {
    $('.popup').addClass('hide');
    $('.mask').addClass('hide');
    $('.fabulous').off('click');
});
$('#f').on('click', function () {
    $('.count').html(`${countList.imgNum1}`);
    praise(countList, 'imgNum1')
    let msg = {};
    msg.src = $('#f>img').attr('src');
    msg.year = imgInfo[0].date.slice(0, 6);
    msg.day = imgInfo[0].date.slice(6, 8);
    msg.desc = imgInfo[0].desc;
    
    _imgInfoBg(imgInfo[0].type)
    _clickHandle(msg);
});
$('#h').on('click', function () {
    $('.count').html(`${countList.imgNum2}`);
    praise(countList, 'imgNum2')
    let msg = {};
    msg.src = $('#h>img').attr('src');
    msg.year = imgInfo[1].date.slice(0, 6);
    msg.day = imgInfo[1].date.slice(6, 8);
    msg.desc = imgInfo[1].desc;
    
    _imgInfoBg(imgInfo[1].type)
    _clickHandle(msg);
})
$('.photo').on('click', function () {
    $('.count').html(`${countList.imgNum3}`);
    praise(countList, 'imgNum3')
    let msg = {};
    msg.src = $('.photo>img').attr('src');
    msg.year = imgInfo[2].date.slice(0, 6);
    msg.day = imgInfo[2].date.slice(6, 8);
    msg.desc = imgInfo[2].desc;
    
    _imgInfoBg(imgInfo[2].type)
    _clickHandle(msg);
})
$('.photo1').on('click', function () {
    $('.count').html(`${countList.imgNum4}`);
    praise(countList, 'imgNum4')
    let msg = {};
    msg.src = $('.photo1>img').attr('src');
    msg.year = imgInfo[3].date.slice(0, 6);
    msg.day = imgInfo[3].date.slice(6, 8);
    msg.desc = imgInfo[3].desc;
    
    _imgInfoBg(imgInfo[3].type)
    _clickHandle(msg);
})
$('.photo2').on('click', function () {
    $('.count').html(`${countList.imgNum5}`);
    praise(countList, 'imgNum5')
    let msg = {};
    msg.src = $('.photo2>img').attr('src');
    msg.year = imgInfo[4].date.slice(0, 6);
    msg.day = imgInfo[4].date.slice(6, 8);
    msg.desc = imgInfo[4].desc;
    
    _imgInfoBg(imgInfo[4].type)
    _clickHandle(msg);
})
$('.photo3').on('click', function () {
    $('.count').html(`${countList.imgNum6}`);
    praise(countList, 'imgNum6')
    let msg = {};
    msg.src = $('.photo3>img').attr('src');
    msg.year = imgInfo[5].date.slice(0, 6);
    msg.day = imgInfo[5].date.slice(6, 8);
    msg.desc = imgInfo[5].desc;
    
    _imgInfoBg(imgInfo[5].type)
    _clickHandle(msg);
})
$('.photo4').on('click', function () {
    $('.count').html(`${countList.imgNum7}`);
    praise(countList, 'imgNum7')
    let msg = {};
    msg.src = $('.photo4>img').attr('src');
    msg.year = imgInfo[6].date.slice(0, 6);
    msg.day = imgInfo[6].date.slice(6, 8);
    msg.desc = imgInfo[6].desc;
    
    _imgInfoBg(imgInfo[6].type)
    _clickHandle(msg);
})


function _clickHandle(obj) {
    $('.pop-main-img>img').attr('src', obj.src);

    $('.calendar').html(`
        <span class="year">${obj.year}</span>
        <span class="day">${obj.day}</span>
    `);
    $('.text').html(`
        <p>${obj.desc}</p>
    `);
    $('.popup').removeClass('hide');
    $('.mask').removeClass('hide');
}

//是否为领导，并添加相片框
function _imgInfoBg(type) {
    if (type === "0") {
        $('.pop-main').css({"background": "url('./img/image/img_bg_dj_ld_k_b.png') no-repeat", "background-size": "100%"});
    } else {
        $('.pop-main').css({"background": "url('./img/image/img_bg_dj_pt_k_b.png') no-repeat", "background-size": "100%"});
    }
}