/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-12-16 20:40:26
 * @version $Id$
 */
$(function(){

    $(document).ready(function(){
        $(window).resize();
    });
    $(window).resize(function(){

        if($(window).width()<=1500){
            $(".logo").css("margin-left","0");
            $(".phone").css("display","none");
        }
        else{
            $(".logo").css("margin-left","-250px");
             $(".phone").css("display","block");
        }
    });

    (function(){
        var imgLen = $(".banner .banner-cont .slider-wrapper .slide").size();
        var btnLen = $(".banner .banner-cont .banner-btn li").size();

        // 初始化
        function init(){
            for (var i = 1 ; i < imgLen; i++){
                $(".banner .banner-cont .slider-wrapper .slide").eq(i).css({opacity:0})
            }
             $(".banner .banner-cont .slider-wrapper .slide").eq(i).css({opacity:0})
             $(".banner .banner-cont .banner-btn li").eq(0).addClass("cur");
        }
        init();

        //淡入
        function fadeIn(obj){
            obj.animate({opacity:1},1000);
        }
        //淡出
        function fadeOut(obj){
            obj.animate({opacity:0},1000);
        }

        // 分页按钮
        function pageBtn(){
            for ( var n = 0; n < btnLen; n++){
                    $(".banner .banner-cont .banner-btn li").eq(n).removeClass("cur");
            }
            $(".banner .banner-cont .banner-btn li").eq(cur).addClass("cur");
        }



        //单图动画
        function ani(){
            cur++;
            if ( cur == imgLen){
                fadeIn($(".banner .banner-cont .slider-wrapper .slide").eq(0));
                fadeOut($(".banner .banner-cont .slider-wrapper .slide").eq(imgLen-1));
                cur = 0;
            }else{
                fadeIn($(".banner .banner-cont .slider-wrapper .slide").eq(cur));
                fadeOut($(".banner .banner-cont .slider-wrapper .slide").eq(cur-1));
            }
            pageBtn();
        }

        //轮播动画
        var cur = 0;
        var timer = setInterval(ani,3000);

        //鼠标经过banner动画停止,离开继续播放
        $(".banner").onmouseenter = function(){
            clearInterval(timer);
        }
        $(".banner").onmouseleave = function(){
            timer = setInterval(ani,3000);
        }

        //点击分页按钮出现相应页面
        $(".banner .banner-cont .banner-btn li").click(function(){
            clearInterval(timer);
            var pre = cur;
            cur = $(this).index();
            fadeIn($(".banner .banner-cont .slider-wrapper .slide").eq(cur));
            fadeOut($(".banner .banner-cont .slider-wrapper .slide").eq(pre));
            pageBtn();
            timer = setInterval(ani,3000);
        })
    })();

    (function(){
        var mySwiper = new Swiper('.case-cont',{
            // autoplay:5000,
            loop:true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        })

        $('.arrow-left').on('click', function(e){
            e.preventDefault()
            mySwiper.swipePrev()
          })
          $('.arrow-right').on('click', function(e){
            e.preventDefault()
            mySwiper.swipeNext()
          })
    })();


    (function(){
        var mySwiper = new Swiper('.hot-cont',{
            autoplay:5000,
            loop:true,
            autoplayDisableOnInteraction : false,
            pagination: '.pagination2',
            paginationClickable :true,
        })
    })();
})

