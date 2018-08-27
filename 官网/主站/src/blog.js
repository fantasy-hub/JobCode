(function () {
    /* 背景图transform */
    var yLen = 0,
        xLen = 0,
        disHandle = null;

    function transHandle(e, t) {
        var n = 'rotateX(' + t + 'deg) rotateY(' + e + 'deg)';
        document.querySelector('.header-bgimg').style.transform = n;
    }

    function enterHandle() {
        transHandle(yLen, xLen);
        disHandle = window.requestAnimationFrame(enterHandle);
    }
    document.addEventListener('DOMContentLoaded', function () {

        var el = document.querySelector('.header'),
            _body = document.querySelector('body'),
            _width = _body.offsetWidth,
            _height = _body.offsetHeight;
        el.addEventListener("mousemove", function (e) {
            yLen = -15 * (e.pageX / _width - .5) || 5;
            xLen = 10 * (e.pageY / _height - .5) || 5;
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