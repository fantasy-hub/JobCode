$(function () {
    /* 背景图transform */
    var yLen = 0,
        xLen = 0,
        disHandle = null;

    function transHandle(e, t) {
        var n = 'rotateX(' + t + 'deg) rotateY(' + e + 'deg)';
        document.querySelector('.star-position').style.transform = n;
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