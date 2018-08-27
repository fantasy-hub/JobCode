var swiper = new Swiper('.swiper-container',{
    direction : 'vertical',
    followFinger : false,
    speed:500,
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
           
            for (var i = 1; i <= total; i++) {
                if (current == 1) {
                    _html += '<li class="swiper-pagination-customs unfold"></li>';
                } else if (current == i) {
                _html += '<li class="swiper-pagination-customs active"></li>';

                }else{
                _html += '<li class="swiper-pagination-customs"></li>';
                }
            }
            
            if(current === 2 || current === 5 || current === 6 || current === 7) {
                hearder.style.padding = '40px 60px 0 60px';
                logo.style.background = 'url(./img/Asteroid小行星_Logo_black2x.png) no-repeat';
                logo.style.backgroundSize = '75%';
                logo.style.backgroundPosition = 'center';
                nav.style.fontSize = '1.17rem';
                if(current === 6 ) {
                    
                    nav.style.color = '#000';
                } else {
                    nav.style.color = '';
                }           
            } else if(current === 3 || current === 4 || current === 8) {
                hearder.style.padding = '40px 60px 0 60px';
                logo.style.background = '';
                logo.style.backgroundSize = '75%';
                nav.style.fontSize = '1.17rem';
            } else {
                hearder.style.padding = '';
                logo.style.background = '';
                nav.style.fontSize = '';
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
                'background': 'url(./img/华为选中.png)',
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
                'background': 'url(./img/建设银行_选中.png)',
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
                'background': 'url(./img/阿里体育_选中.png)',
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
                'background': 'url(./img/京东_选中.png)',
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
                'background': 'url(./img/橙天嘉禾_选中.png)',
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
                'background': 'url(./img/Momenta_选中.png)',
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
                'background': 'url(./img/Garmin_选中.png)',
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
                'background': 'url(./img/吉利_选中.png)',
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



// var startScroll, touchStart, touchCurrent;
// swiper.slides.on('touchstart', function (e) {
//     console.log(e)
//     startScroll = this.scrollTop;
//     touchStart = e.targetTouches[0].pageY;
// }, true);
// swiper.slides.on('touchmove', function (e) {
//     touchCurrent = e.targetTouches[0].pageY;
//     var touchesDiff = touchCurrent - touchStart;
//     var slide = this;
//     var onlyScrolling = 
//             ( slide.scrollHeight > slide.offsetHeight ) &&
//             (
//                 ( touchesDiff < 0 && startScroll === 0 ) ||
//                 ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) ||
//                 ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) )
//             );
//     if (onlyScrolling) {
//         e.stopPropagation();
//     }
// }, true);

// console.log(swiper)
// var dpr = window.devicePixelRatio
// alert(dpr)