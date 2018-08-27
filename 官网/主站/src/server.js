(function(){
    function _clearCss(eles) {
        for (let i = 0; i < eles.length; i++) {
            eles[i].children[0].style = '';
          }
    }  

    function _css(element, styles) {
        for (let i in styles) {
          element.style[i] = styles[i];
        }
      }
    const navClick = function () {
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
    }();
    navClick();

    //Tab切换功能
    function Tab($node) {
        this.$tab = $node.find('.system-switch');
        this.$content = $node.find('.system-project');
        this.bind();
    }
    
    Tab.prototype = {
        constructor: Tab,
        bind: function() {
            console.log(this);
            var _this = this;
            this.$tab.on('click', '.system-switch-item', function() {
                var index = $(this).addClass('active')
                                   .siblings('.active').removeClass('active');
                _this.$content.eq(index).addClass('select')
                                        .siblings('select').removeClass('select');
            });
        }
    }

    $('.system').each(function() {
        new Tab($(this));
    });

    /* 背景图transform */
    var yLen = 0,
        xLen = 0,
        disHandle = null;

    function transHandle(e, t) {
        var n = 'rotateX(' + t + 'deg) rotateY(' + e + 'deg)';
        document.querySelector('.asteroid-style').style.transform = n;
    }

    function enterHandle() {
        transHandle(yLen, xLen);
        disHandle = window.requestAnimationFrame(enterHandle);
    }
    document.addEventListener('DOMContentLoaded', function () {
        
        var el = document.querySelector('.header-content'),
            _body = document.querySelector('body'),
            _width = _body.offsetWidth,
            _height = _body.offsetHeight;
        el.addEventListener("mousemove", function (e) {
            yLen = -25 * (e.pageX / _width - .5) || 10;
            xLen = 20 * (e.pageY / _height - .5) || 10;
        });
        el.addEventListener("mouseleave", function (e) {
            disHandle && window.cancelAnimationFrame(disHandle);
            transHandle(0, 0);
        });
        el.addEventListener("mouseenter", function (e) {
            enterHandle();
        });
    });
}());
