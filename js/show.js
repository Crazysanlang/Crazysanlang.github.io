/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-12-16 21:30:50
 * @version $Id$
 */
$(function() {
    // banner部分
        $(".imgs").animate({
            right: "242px",
            top: "130px",
            opacity: "1"
        }, 1500);
        $(".imgb").animate({
            right: "100px",
            top: "65px",
            opacity: "1"
        }, 1500);
        $(".banner .wel div").css({
            "transform": "translate(0,0)",
            "opacity": "1"
        });
    // 客照第一季
    // 轮播
    function smallTab(banner, imgul, hid, prev, next) {
        // 克隆第一幅图片
        $(imgul).children().eq(0).clone().appendTo($(imgul));
        var W = $(imgul).children().eq(0).width() + 2;
        var H = $(imgul).children().eq(0).height();
        var len = $(imgul).children().size();
        var r = $(imgul).width(len * W);
        // $(banner).height(H);
        // $(banner).width(W);

        //封闭轮播动画
        var i = 0,
            t;

        function move() {
            if (i == len) {
                $(imgul).css({
                    left: 0
                });
                i = 1;
            }
            if (i < 0) {
                $(imgul).css({
                    left: -(len - 1) * W
                });
                i = len - 2;
            };
            $(imgul).stop().animate({
                left: -i * W
            }, 500);
        }


        t = setInterval(function() {
            i++;
            move();

        }, 5000);
        // 鼠标经过时定时停止//隐藏翻页按钮
        $(hid).hide();
        $(banner).mouseenter(function() {
            clearInterval(t);
            $(hid).fadeIn(100);
        }).mouseleave(function() {
            t = setInterval(function() {
                i++;
                move();
            }, 3000);
            $(hid).fadeOut(100);
        });
        //前进后退按钮
        $(prev).click(function() {
            i--;
            move();
        })
        $(next).click(function() {
            i++;
            move();
        })
    }

    smallTab(".seab", ".first", ".seab span", ".seab .left", ".seab .right");

    $(window).scroll(function(event) {
        var tetop = $(".txt").offset().top;
        var wH = $(window).height();
        if ($(window).scrollTop() > (tetop - wH) + 100) {
            $(".txt").css('opacity', '1');
            $(".txt").addClass('fadeInUp');
        } else if ($(window).scrollTop() < (tetop - wH) - 200) {
            $(".txt").css('opacity', 0);
        }
    });

    // 最新客照
    // 轮播开始
    (function() {
        $(".fade .img li").eq(0).fadeIn(200, function() {
            $(".icon ul li").eq(0).addClass("current").siblings().removeClass("current");
        }).siblings().fadeOut();
        var size = $(".fade .img li").size();
        var i = 0; //索引值
        var t;

        function move() {
            if (i < 0) {
                i = size - 1;
            }
            if (i >= size) {
                i = 0;
            }
            $(".fade .img li").eq(i).fadeIn(200, function() {
                $(".icon ul li").eq(i).addClass("current").siblings().removeClass("current");
            }).siblings().fadeOut();
        }

        t=setInterval(function(){
            i++;
            move();
        },5000);

        $(".fade , .icon>ul").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                i++;
                move();
            }, 5000);
        });

        // 按钮
        // $(".banner .prev").click(function(){
        //     i --;
        //     move();
        // });
        // $(".banner .next").click(function(){
        //     i ++;
        //     move();
        // });

        $(".icon ul li").click(function() {
            i = $(this).index();
            move();
        });
    })();
    // 点击喜欢按钮
    void
    function() {
        var num = 1;
        ! function() {
            $(".fade .love").click(function(event) {
                if (num == 1) {
                    $(this).css('background-position', '-47px 0');
                    num++;
                    } else {
                    $(this).css('background-position', '-111px -56px');
                    num = 1;
                    };
            });
        }()
    }()

    //往期客照

    // 顶部开始
    $(document).ready(function() {
        $(window).resize();
    });

    $(window).resize(function() {

        if ($(window).width() < 1366) {
            $(".logo").css("margin-left", "0");
            $(".phone").css("display", "none");
        } else {
            $(".logo").css("margin-left", "-250px");
            $(".phone").css("display", "block");
        }

    });

    // -----------------侧边栏 hover状态
    $("#fixsider li").on("mouseenter", function() {
        var sp = $(this).find("span");
        sp.stop().css({
            "display": "block"
        }).animate({
            "width": "120px"
        }, 200);

        $(this).on("mouseleave", function() {
            sp.stop().animate({
                'width': 0
            }, 200, function() {
                sp.css({
                    "display": "none"
                })
            });
        })
    })

    $("#fixsider li.totop").on("click", function() {
        $('body,html').animate({
            "scrollTop": 0
        }, 600);
    })


    // ----------------------侧边栏显示隐藏
    void
    function() {
        var fs = $("#fixsider");
        var flag = 0;
        var flagg = 1;
        var fw = 1;

        fs.hide();
        $(document).ready(function() {
            $(window).resize();
            $(window).scroll(function() {
                if (fw) {
                    $(window).scrollTop() > 500 ?
                        flag && (flag = 0, fs.fadeIn(), flagg = 1) :
                        flagg && (flagg = 0, fs.fadeOut(), flag = 1);
                }
            })
        });


        $(window).resize(function() {
            $(window).width() <= 1500 ? (fw = 0, fs.hide()) : fw = 1;
            $(window).width() <= 1300 ? $("#process .decorate").hide() : $("#process .decorate").show()
        });

    }();
    // 底部图标动画
    $(function() {
        $(".icon li").on("mouseenter", function() { // 鼠标经过事件
            var self = $(this);

            $(this).addClass("bounce");
            self.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                self.removeClass("bounce")
            });
        });
    });
})