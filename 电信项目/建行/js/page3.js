
let imglist = [];
let robot1 = [];
let robot2 = [];
let robot3 = [];
let robot4 = [];

let body = document.querySelector('body');
let closeDec = document.querySelectorAll('.closeDec');
let QRcode = document.querySelectorAll('.QR-code');
let popup = document.querySelector('.popup');
let closeDecMain = document.querySelector('.closeDec-main');
let prompt = document.querySelector('.prompt');

let unlike = document.querySelector('.option-unlike');
let like = document.querySelector('.option-like');
let change = document.querySelector('.change');
let roboHome = document.querySelectorAll('.closeDec-robo');


//音效
let musicBtn = document.getElementById('music-btn');
// let door = document.getElementById('open_door');
// let earth = document.querySelector('#music-earth');
let licai = document.querySelector('#licai');
// let huan = document.querySelector('#huan');
let admission = document.querySelector('#admission');
// let tex3 = document.querySelector('#tex3');
let person = document.querySelector('#person');

let num = 1;



(function () {
    
    
    loadImages();
    //换一批
    changeLay();
    isLike();
    //关闭详情页
    closeDetails();
    //返回首页
    backHome();
    // noHuman();
    imgInfo()

    setTimeout(function() {
        licai.play();
    },2000);
    setTimeout(function() {
        initCircle(1);
    }, 1000);

     //2s后打开提示页面
    

    let timer = 0;
    timer = setTimeout(function () {
        prompt.style.display = 'block';
        unlike.style.display = 'none';
        like.style.display = 'none';
        change.style.display = 'none';
        timer = setTimeout(function () {
            prompt.style.display = '';
            unlike.style.display = '';
            like.style.display = '';
            change.style.display = '';
        }, 3000);
    }, 1000);
    promptHandle()
})();

function loadImages() {
    for (let i = 1; i < 97; i++) {
        robot1.push(`./img/InfoView/jiqi/1/jiqi1_${i}.png`);
    }
    for (let i = 1; i < 276; i++) {
        robot2.push(`./img/InfoView/jiqi/2/jiqi2_${i}.png`);
    }
    for (let i = 1; i < 95; i++) {
        robot3.push(`./img/InfoView/jiqi/3/jiqi3_${i}.png`);
    }
    for (let i = 1; i < 18; i++) {
        robot4.push(`./img/InfoView/jiqi/4/jiqi4_${i}.png`);
    }
}
// const loadImages = (function () {

// })();

const mySwiper = new Swiper ('.swiper-container-father', {
    loop: true,
    allowTouchMove: false,
});
const swiperSon = new Swiper('.swiper-container-son',{
    loop: true,
    speed:500,
    allowTouchMove: false,
    on:{
        init:function(swiper){
            slide=this.slides.eq(0);
            slide.removeClass('ani-slide');
        },
        slideChangeTransitionStart: function(){
            for(i=0;i<this.slides.length;i++){
                slide=this.slides.eq(i);
                slide.removeClass('ani-slide');
                
            }
            slide=this.slides.eq(this.activeIndex-1);
            slide.addClass('ani-slide');
            
        },
    }
});

// 返回主页
function backHome() {
    closeDecMain.addEventListener('click', function () {
        window.location.href = "./index.html";
    }, false);
    for (let i = 0; i < roboHome.length; i++) {
        roboHome[i].addEventListener('click', function () {
            window.location.href = "./index.html";
        }, false);
    }
}

function openDoor() {
    let go = document.querySelector('.go');
    let lf = document.querySelector('.door-lf');
    let rt = document.querySelector('.door-rt');
    // let recommend = document.querySelector('.recommend');
    let swiper = document.querySelector('.swiper-container');
    let option = document.querySelector('.option');
    let timer = 0;
    
    
}

function promptHandle() {
    body.addEventListener('click',function(){
        prompt.style.display = '';
        unlike.style.display = '';
        like.style.display = '';
        change.style.display = '';
    }, false);
}

function starAnimation() {
    let star = document.querySelector('.bg-move');
    let starAnimation = animation().loadImage(imglist).changeSrc(star, imglist).repeatForever();
    // starAnimation.start(40);
}
// 机器人动画
let robotFor = '';
let robotFor1 = '';
let robotFor2 = '';
function robotAnimation() {
    let robot = document.querySelectorAll('.robot-mv');
    // console.log(robot)
    let qr = '';

    if (num === 1 || num === 4) {
        robot = robot[2];
        qr = QRcode[2];
    }
    if (num === 2) {
        robot = robot[1];
        qr = QRcode[1];
    }
    if (num === 3) {
        robot = robot[0];
        qr = QRcode[0];
    }

    let QRcodeBg1 = document.querySelector('.details1 .QR-code-bg');
    let QRcodeBg2 = document.querySelector('.details2 .QR-code-bg');
    let QRcodeBg3 = document.querySelector('.details3 .QR-code-bg');
    //金条
    let pret = document.querySelector('.pret1');
    //卡
    let pret2 = document.querySelector('.pret2');
    // 理财
    let pret3 = document.querySelector('.pret3');

    admission.play();
    robotFor = animation().loadImage(robot1).changeSrc(robot, robot1).then(function () {
        setTimeout(function (){
            // tex3.play();
            if (num === 1 || num === 4) {
                tex3.play();
                QRcodeBg1.style.opacity = 1;
                pret3.style.opacity = 1;
            }
            if (num === 2) {
                tex2.play();
                QRcodeBg2.style.opacity = 1;
                pret2.style.opacity = 1;
            }
            if (num === 3) {
                tex1.play();
                QRcodeBg3.style.opacity = 1;
                pret.style.opacity = 1;
            }
            qr.style.opacity = 1;

            
        }, 1500)
        
        robotFor1 = animation().changeSrc(robot, robot2).then(function () {
            robotFor2 = animation().changeSrc(robot, robot3).repeatForever().start(40);
        }).start(15);
    });
    robotFor.start(20);
}



function changeLay() {
    let change = document.querySelector('.change');
    let flag = 0;
    change.addEventListener('click', function () {
        if (flag) {
            return;
        }
        flag = 1;;
        setTimeout(function () {
            flag = 0;
            
        }, 800);       
        
        musicBtn.play();
        mySwiper.slideNext();

        num++
        if(num > 4) {
            num = 2;
        }
        if (num === 1) {
            if (swiperSon[num].activeIndex === 1 || swiperSon[num].activeIndex === 4) {
                initCircle(4);
            }
            if (swiperSon[num].activeIndex === 2) {
                initCircle(2);
            }
            if (swiperSon[num].activeIndex === 3) {
                initCircle(3);
            }                
        }
        if (num === 4) {
            if (swiperSon[num].activeIndex === 1) {
                initCircle(6);
            }
            if (swiperSon[num].activeIndex === 2) {
                initCircle(7);
            }
            if (swiperSon[num].activeIndex === 3) {
                initCircle(8);
            }
            if (swiperSon[num].activeIndex === 4) {
                initCircle(9);
            }
           
        }
        
    }, false);
}

function isLike() {
    let like = document.querySelector('.option-like');
    let unlike = document.querySelector('.option-unlike');
    let main = document.querySelector('.main');
    let popUnlike = document.querySelector('.popup-unlike');
    let popLike = document.querySelector('.popup-like');
    let timer = 0;

    let likeFace = document.querySelector('#face2');
    let unlikeFace = document.querySelector('#face1');

    let details3 = document.querySelector('.details3');
    let details1 = document.querySelector('.details1');
    let details2= document.querySelector('.details2');

    let details1Title = document.querySelector('.details1-title');
    let details1Time = document.querySelector('.details1-time');
    let interestPer = document.querySelector('.details1 .interest-per');
    let details1Foot = document.querySelector('.details1-foot');
    let QRcode1 = document.querySelector('.details1 .QR-code');

    let details2Banner = document.querySelector('.details2-banner');
    let details2Title = document.querySelector('.details2-title');
    let details2Info = document.querySelector('.details2-info');
    let QRcode2 = document.querySelector('.details2 .QR-code');

    let detailsBanner = document.querySelector('.details-banner');
    let detailsTitle = document.querySelector('.details-title');
    let detailsInfo = document.querySelector('.details-info');
    let QRcode3 = document.querySelector('.details3 .QR-code');
    let detailsItem = document.querySelector('.details-bg-item');

            
    like.addEventListener('click', function () {
        // clearTimeout(timer);
        unlike.style.opacity = 0;

        likeFace.classList.add('popup-like-face');
        unlikeFace.classList.remove('popup-unlike-face');
        popUnlike.classList.remove('popup-unlike-ac');
        popLike.classList.remove('popup-like-ac');



        popup.style.display = 'block';
        timer = setTimeout(function () {
            popup.style.display = '';
            // popup.style.opacity = 1;
            if (num === 1 || num === 4) {
                
                if (swiperSon[num].activeIndex === 1 || swiperSon[num].activeIndex === 4) {
                    details1Title.innerHTML = '乾元-私享荟';
                    details1Time.innerHTML = '2018-第91期理财产品';
                    interestPer.innerHTML = `4.95<span>%</span>`;
                    details1Foot.innerHTML = `<span>起购金额∶600万</span>
                    <span>投资期限∶128天</span>`;
                    QRcode1.style.background = '';
                    QRcode1.style.background = "url(./img/InfoView/Q-code/1.png) no-repeat";
                    QRcode1.style.backgroundSize = "100%";
                    initCircle(10);
                }
                if (swiperSon[num].activeIndex === 2) {
                    details1Title.innerHTML = '乾元-善盈';
                    details1Time.innerHTML = '2018-第176期理财产品';
                    interestPer.innerHTML = `5.2<span>%</span>`;
                    details1Foot.innerHTML = `<span>起购金额∶10万</span>
                    <span>投资期限∶142天</span>`;
                    QRcode1.style.background = '';
                    QRcode1.style.background = "url(./img/InfoView/Q-code/2.png) no-repeat";
                    QRcode1.style.backgroundSize = "100%";
                    initCircle(10);
                }
                if (swiperSon[num].activeIndex === 3) {
                    details1Title.innerHTML = '乾元-私享';
                    details1Time.innerHTML = '2018-第228期理财产品';
                    interestPer.innerHTML = `4.85<span>%</span>`;
                    details1Foot.innerHTML = `<span>起购金额∶100万</span>
                    <span>投资期限∶185天</span>`;
                    QRcode1.style.background = '';
                    QRcode1.style.background = "url(./img/InfoView/Q-code/3.png) no-repeat";
                    QRcode1.style.backgroundSize = "100%";
                    initCircle(10);
                }

                details1.style.display = 'block';
                details3.style.display = '';
                details2.style.display = '';
            }
            if (num === 2) {
                if (swiperSon[num].activeIndex === 1 || swiperSon[num].activeIndex === 4) {
                    details2Title.innerHTML = '龙卡途牛旅游卡';
                    details2Info.innerHTML = `<div class="details2-info-item">途牛专属礼遇</div>
                                            <div class="details2-info-item">特色增值服务</div>
                                            <div class="details2-info-item">基础平台权益</div>`;
                    QRcode2.style.background = '';
                    QRcode2.style.background = "url(./img/InfoView/Q-code/4.png) no-repeat";
                    QRcode2.style.backgroundSize = "100%";
                    details2Banner.setAttribute('src', './img/MainScene/cards2/cards2_7.png');
                 
                }
                if (swiperSon[num].activeIndex === 2) {
                    details2Title.innerHTML = 'LINEFRIENDS粉丝信用卡纯爱版';
                    details2Info.innerHTML = `<div class="details2-info-item">超萌粉丝卡</div>
                                            <div class="details2-info-item">粉丝专属礼遇</div>
                                            <div class="details2-info-item">特色增值服务</div>`;
                    QRcode2.style.background = '';
                    QRcode2.style.background = "url(./img/InfoView/Q-code/5.png) no-repeat";
                    QRcode2.style.backgroundSize = "100%";
                    details2Banner.setAttribute('src', './img/MainScene/cards2/cards2_29.png');
                  
                }
                if (swiperSon[num].activeIndex === 3) {
                    details2Title.innerHTML = '全球热购信用卡';
                    details2Info.innerHTML = `<div class="details2-info-item">多重礼遇</div>
                                            <div class="details2-info-item">特色功能</div>
                                            <div class="details2-info-item">增值服务</div>`;
                    QRcode2.style.background = '';
                    QRcode2.style.background = "url(./img/InfoView/Q-code/6.png) no-repeat";
                    QRcode2.style.backgroundSize = "100%";
                    details2Banner.setAttribute('src', './img/MainScene/cards2/cards2_10.png');
                    
                }

                details2.style.display = 'block';
                details3.style.display = '';
                details1.style.display = '';
            }
            if (num === 3) {
                if (swiperSon[num].activeIndex === 1 || swiperSon[num].activeIndex === 4) {
                    detailsTitle.innerHTML = '投资金条';
                    detailsInfo.innerHTML = `材质：Au9999 <br>重量：50g、100g、200g、500g、1000g、5000g<br> 代码：261100101-104、261100106、261100108`;
                    detailsItem.innerHTML = '品质保证，盛世典藏';
                    QRcode3.style.background = '';
                    QRcode3.style.background = "url(./img/InfoView/Q-code/7.png) no-repeat";
                    QRcode3.style.backgroundSize = "100%";
                    detailsBanner.setAttribute('src', './img/MainScene/golds2/golds2_1.png');
                  
                } 
                if (swiperSon[num].activeIndex === 2) {
                    detailsTitle.innerHTML = '金元宝';
                    detailsInfo.innerHTML = `材质：Au9999 <br>重量：20g、50g、100g、200g和500g <br>代码：261600101、261600102、261600103、261600104、261600105`;
                    detailsItem.innerHTML = '财源广进 大利四方';
                    QRcode3.style.background = '';
                    QRcode3.style.background = "url(./img/InfoView/Q-code/8.png) no-repeat";
                    QRcode3.style.backgroundSize = "100%";
                    detailsBanner.setAttribute('src', './img/MainScene/golds2/golds2_2.png');
                  
                }
                if (swiperSon[num].activeIndex === 3) {
                    detailsTitle.innerHTML = '福豆';
                    detailsInfo.innerHTML = `材质：Au9999 <br>重量：5g<br>代码：261703801、261703802`;
                    detailsItem.innerHTML = '幸福安康 阖家幸福';
                    QRcode3.style.background = '';
                    QRcode3.style.background = "url(./img/InfoView/Q-code/9.png) no-repeat";
                    QRcode3.style.backgroundSize = "100%";
                    detailsBanner.setAttribute('src', './img/MainScene/golds2/golds2_28.png');
                   
                }

                details3.style.display = 'block';
                details1.style.display = '';
                details2.style.display = '';
            }
            main.style.display = 'none';
            robotAnimation();
            unlike.style.opacity = 1;
        }, 2000);



        person.play();
        
    }, false);
    
    unlike.addEventListener('click', function () {
        like.style.opacity = 0;

        popup.style.display = 'block';

        likeFace.classList.remove('popup-like-face');
        unlikeFace.classList.add('popup-unlike-face');
        popUnlike.classList.add('popup-unlike-ac');
        popLike.classList.add('popup-like-ac');

        timer = setTimeout(function () {
            popup.style.display = '';
            swiperSon[num].slideNext();
            console.log(swiperSon[num])
            like.style.opacity = 1;
            if (num === 1) {
                if (swiperSon[num].activeIndex === 1 || swiperSon[num].activeIndex === 4) {
                    initCircle(4);
                }
                if (swiperSon[num].activeIndex === 2) {
                    initCircle(2);
                }
                if (swiperSon[num].activeIndex === 3) {
                    initCircle(3);
                }                
            }
            if (num === 4) {
                if (swiperSon[num].activeIndex === 1 || swiperSon[num].activeIndex === 4) {
                    initCircle(9);
                }
                if (swiperSon[num].activeIndex === 2) {
                    initCircle(7);
                }
                if (swiperSon[num].activeIndex === 3) {
                    initCircle(8);
                }
                console.log(swiperSon[num].activeIndex)
                
            }

        }, 2000);

        person.play();
        
        console.log(num)
        
    }, false);
}
// 关闭详情页
function closeDetails() {
    let main = document.querySelector('.main');
    let QRcode1 = document.querySelector('.details1 .QR-code');
    let QRcode2 = document.querySelector('.details2 .QR-code');
    let QRcode3 = document.querySelector('.details3 .QR-code');

    let QRcodeBg1 = document.querySelector('.details1 .QR-code-bg');
    let QRcodeBg2 = document.querySelector('.details2 .QR-code-bg');
    let QRcodeBg3 = document.querySelector('.details3 .QR-code-bg');
    //金条
    let pret = document.querySelector('.pret1');
    //卡
    let pret2 = document.querySelector('.pret2');
    // 理财
    let pret3 = document.querySelector('.pret3');
    
    for (let i = 0; i < closeDec.length; i++) {
        closeDec[i].addEventListener('click',function () {
            let robot = document.querySelectorAll('.robot-mv');
            musicBtn.play();
            if (robotFor) {
                robotFor.dispose();
            }
            if (robotFor1) {
                robotFor1.dispose();
            }
            if (robotFor2) {
                robotFor2.dispose();
            }
            if (num === 1) {
                if (swiperSon[num].activeIndex === 1) {
                    let timeId = setTimeout(function () {
                        initCircle(1);
                        clearTimeout(timeId);
                    },1000);
                   
                }
                if (swiperSon[num].activeIndex === 2) {
                    let timeId = setTimeout(function () {
                        initCircle(2);
                        clearTimeout(timeId);
                    },1000);
                }
                if (swiperSon[num].activeIndex === 3) {
                    let timeId = setTimeout(function () {
                        initCircle(3);
                        clearTimeout(timeId);
                    },1000);
                }
                if (swiperSon[num].activeIndex === 4) {
                    let timeId = setTimeout(function () {
                        initCircle(4);
                        clearTimeout(timeId);
                    },1000);
                }                
            }
            if (num === 4) {
                if (swiperSon[num].activeIndex === 1) {
                    let timeId = setTimeout(function () {
                        initCircle(6);
                        clearTimeout(timeId);
                    },1000);
                }
                if (swiperSon[num].activeIndex === 2) {
                    let timeId = setTimeout(function () {
                        initCircle(7);
                        clearTimeout(timeId);
                    },1000);
                }
                if (swiperSon[num].activeIndex === 3) {
                    let timeId = setTimeout(function () {
                        initCircle(8);
                        clearTimeout(timeId);
                    },1000);
                }
                if (swiperSon[num].activeIndex === 4) {
                    let timeId = setTimeout(function () {
                        initCircle(9);
                        clearTimeout(timeId);
                    },1000);
                }
                console.log(`change:${swiperSon[num].activeIndex}`)
               
            }

            let robotAnimation = animation().loadImage(robot4).changeSrc(robot[i], robot4).then(function () {
                main.style.display = '';
                QRcode1.style.opacity = 0;
                QRcode2.style.opacity = 0;
                QRcode3.style.opacity = 0;
                pret.style.opacity = 0;
                pret2.style.opacity = 0;
                pret3.style.opacity = 0;

                QRcodeBg1.style.opacity = 0;
                QRcodeBg2.style.opacity = 0;
                QRcodeBg3.style.opacity = 0;
            });
            robotAnimation.start(40);       
        }, false);
    }
    
}

//无人操作时自动跳回主页
function noHuman() {
    let timer = 0;
    body.addEventListener('touchstart',function(){
        clearTimeout(timer);
    }, false);
    body.addEventListener('touchend',function(){
        timer = setTimeout(function () {
            window.location.href = "./index.html";
        }, 23000);
    }, false);

}

function initCircle(ref) {
    var clip = document.querySelectorAll('.clip')[ref],
        left = clip.children[0],
        right = clip.children[1],
        num = clip.nextElementSibling,
        //利率
        rate = num.innerText.slice(0,3)*10,
        
        rotate = 0;
        var clip1 = document.querySelectorAll('.clip');
        console.log(clip1)
        right.classList.add('width-none');
        clip.classList.remove('auto');
    var loop = setInterval(function() {
        if(rotate == rate) {
            clearInterval(loop);
            return;
        }
        if(rotate >= 80){
            rotate = 0;
            right.classList.add('width-none');
            clip.classList.remove('auto');
        } else if(rotate > 40){
            right.classList.remove('width-none');
            clip.classList.add('auto');
        }
        rotate++;
        left.style.transform = 'rotate('+ 4.5*rotate + 'deg)';
        num.innerHTML = `${rotate / 10}<span>%</span>`;
    },15)
}


//点击查看大图
function imgInfo() {
    let img = document.querySelector('.bigImg img');
    let bg = document.querySelector('.bigImg');
    body.addEventListener('click', function (event) {
        let e = event.target;
        if(e.classList[0] === 'details-banner') {
            let path = e.getAttribute('src');
            img.setAttribute('src', path);
            bg.style.display = 'block';
        }
    }, false);    
    _closeImgInfo();
}
//关闭图片详情页
function _closeImgInfo() {
    let bg = document.querySelector('.bigImg');
    let close = document.querySelector('.closeImg');
    bg.addEventListener('click', function(event) {
        let e = event.target;
        if(e.className === 'closeImg' || e.className === 'bigImg') {
             bg.style.display = '';
        }
    }, false);  
}

function play() {

}




