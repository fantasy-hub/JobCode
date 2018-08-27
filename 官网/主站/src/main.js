
let setAfter = 0;
if(document.documentElement.clientWidth < 768) {
    let height = document.querySelector('.foot-bar').offsetHeight
    console.log(height)
    setAfter = height;
} else {
    setAfter = 440;
}

var swiper = new Swiper('.swiper-container',{
    direction : 'vertical',
    followFinger : false,
    speed: 500,
    slidesOffsetAfter: setAfter,
    // slidesPerView : 'auto',
    mousewheel: true,
    // effect : 'coverflow', //3D流
    // effect : 'fade', //淡入
    // effect : 'cube', //方块
    // effect : 'flip', //3D翻转
    pagination : {
        el:'.swiper-pagination',
        type: 'custom',
        
        renderCustom: function (swiper, current, total) {
           var _html = '';
           let logo = document.querySelector('.logo');
           let nav = document.querySelector('.nav-list');
           let hearder = document.querySelector('.header');
           let navCall = document.querySelector('.nav-call');
           let line = document.querySelector('.nav-close');

           let vertical = document.querySelector('.vertical-line');
           let custom = document.querySelector('.swiper-pagination-custom');
           
            for (var i = 1; i <= total - 1; i++) {
                if (current == 1) {
                    _html += '<li class="swiper-pagination-customs unfold"></li>';
                } else if (current == i) {
                _html += '<li class="swiper-pagination-customs active"></li>';

                }else{
                _html += '<li class="swiper-pagination-customs"></li>';
                }
            }
            if (current !== 1) {
                hearder.style.padding = '.319rem .416rem 0 .416rem';
                nav.style.fontSize = '14px';
                logo.style.top = '.746rem';
                line.style.top = '.746rem';
                _css(navCall, {
                    'width': '140px',
                    'height': '48px',
                    'fontSize': '12px',
                });
            }
            if (current === 8) {
                setTimeout(function () {
                    hearder.style.display = 'none';
                }, 500);
                hearder.style.opacity = 0;
                vertical.style.display = 'none';
                custom.style.display = 'none';
            } else {
                hearder.style.display = '';
                
                setTimeout(function () {
                    vertical.style.display = '';
                    custom.style.display = '';
                    hearder.style.opacity = '';
                }, 500);
            }
            if(current === 2 || current === 4 || current === 5 || current === 6 || current === 8) {
                _css(logo, {
                    'background': 'url(./img/xiaox_black@2x.png) no-repeat',
                    'backgroundSize': '75%',
                    // 'backgroundPosition': 'center',
                });
                line.classList.add('nav-close-black');
                if(current === 5 || current === 6) {
                    nav.style.color = '#000';
                } else {
                    nav.style.color = '';
                }           
            } else if(current === 3 || current === 7) {
                logo.style.background = '';
                logo.style.backgroundSize = '75%';
                line.classList.remove('nav-close-black');
                nav.style.color = ''
            } else {
                hearder.style.padding = '';
                logo.style.background = '';
                nav.style.fontSize = '';
                navCall.style = '';
                line.classList.remove('nav-close-black');
                logo.style.top = '';
                line.style.top = '';
            }
            
            
            return _html;//返回所有的页码html
        }
    },
    on:{
        init:function(swiper){
            slide=this.slides.eq(0);
            slide.addClass('ani-slide');
        },
        transitionStart: function(){
            for(i=0;i<this.slides.length;i++){
                slide=this.slides.eq(i);
                slide.removeClass('ani-slide');
                
            }
            slide=this.slides.eq(this.activeIndex);
            slide.addClass('ani-slide');
        },
        transitionEnd: function(){
            
       
        },
    }
});



let pagin = document.querySelector('.swiper-pagination');
let option = document.querySelector('.tab-list');
let items = document.getElementsByClassName('item');
let bg = document.querySelector('.tab-bg');
pagin.addEventListener('click', function (e) {
    let target = e.target || e.srcElement;
    if(target.nodeName === 'LI') {
        let index =  Array.prototype.indexOf.call(target.parentNode.children, target);
        swiper.slideTo(index, 500, false);
    }
}, false);
option.addEventListener('mouseover', function (e) {
    let target = e.target || e.srcElement;
    if(document.documentElement.clientWidth < 768) {
        return
    }
    // console.log(document.documentElement.clientWidth)
    if (target.nodeName === 'SPAN') {
        let index =  Array.prototype.indexOf.call(target.parentNode.parentNode.children, target.parentNode);
        let ac = document.querySelector('.tab-list .active');
        if (ac) {
            ac.classList.remove('active');
        }   
        if (index === 0 ) {
            _css(bg, {
                'background': 'url(./img/华为.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/华为选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        }
        if (index === 1 ) {
            _css(bg, {
                'background': 'url(./img/建设银行副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/建设银行_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        } 
        if (index === 2 ) {
            _css(bg, {
                'background': 'url(./img/阿里体育副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/阿里体育_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        } 
        if (index === 3 ) {
            _css(bg, {
                'background': 'url(./img/京东副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/京东_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        }
        if (index === 4 ) {
            _css(bg, {
                'background': 'url(./img/橙天嘉禾副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/橙天嘉禾_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        } 
        if (index === 5 ) {
            _css(bg, {
                'background': 'url(./img/Momenta副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/Momenta_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        }
        if (index === 6 ) {
            _css(bg, {
                'background': 'url(./img/Garmin副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/Garmin_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        } 
        if (index === 7 ) {
            _css(bg, {
                'background': 'url(./img/吉利副本.png)',
                'backgroundSize': 'cover'
            });
            _clearCss(items);
            _css(target, {
                'width': '244px',
                'height': '123px',
                'background': 'url(./img/吉利_选中.png) no-repeat',
                'backgroundSize': '100%'
            });
        } 
       
    }
    
}, false);

function _clearCss(eles) {
    for (let i = 0; i < eles.length; i++) {
        eles[i].children[0].style = '';
      }
}

/**
 * 改变元素的style属性
 * 调用方式:_css($el, {"font-size": ..., "background": ...}；
 * @param {dom对象} element
 * @param {样式对象} styles 
 */
function _css(element, styles) {
    for (let i in styles) {
      element.style[i] = styles[i];
    }
  }

const navClick = (function () {
    let navClose = document.querySelector('.nav-close');
    let header = document.querySelector('.header');
    let nav = document.querySelector('.nav');
    let logo = document.querySelector('.logo');
    let status = true;
    return function () {
        navClose.addEventListener('click', function () {
            if (status) {
                _css(nav, {"display": 'block'});
                logo.classList.add('logo-h');
                header.classList.add('header-h');
                navClose.classList.add('nav-close-h');
            } else {
                _css(nav, {"display": ''});
                logo.classList.remove('logo-h');
                navClose.classList.remove('nav-close-h');
                header.classList.remove('header-h');
            }
            status = !status;
        }, false);
    } 
})();
navClick();