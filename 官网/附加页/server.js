(function(){
    //wap下右上角图标展示功能
    function Showlist() {
        var $dis = $('.dis'),
            $item = $('.wap-server-item');
        $dis.on('click', function() {
            if(!$item.hasClass('show')) {
                $item.addClass('show');
                $item[0].style.display = 'block';
            } else {
                $item.removeClass('show');
                $item[0].style.display = 'none';
            }
        });
    }

    //Tab切换功能
    function Tab($node) {
        this.$tab = $node.find('.system-switch');
        this.$content = $node.find('.system-project');
        this.bind();
    }
    
    Tab.prototype = {
        constructor: Tab,
        bind: function() {
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

    Showlist();
}());
