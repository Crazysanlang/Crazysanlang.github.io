/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-16 15:31:48
 * @version $Id$
 */

$(document).ready(function(){
    $(window).resize();
});

$(window).resize(function(){

if($(window).width()<=1300){
    $(".logo").css("margin-left","0");
    $(".phone").css("display","none");
}
else{
    $(".logo").css("margin-left","-250px");
     $(".phone").css("display","block"); 
}
});

// 轮播

// 轮播动画

function Carousel (banner,allpic,btn,style,hid,prev,next) {
    // 克隆第一幅图片
        $(allpic).children().eq(0).clone().appendTo($(allpic));
        var W = $(allpic).children().eq(0).width();
        var len = $(allpic).children().size();
        $(allpic).width(len*W);
        $(btn).eq(0).addClass(style).siblings().removeClass(style);
     
    //封闭轮播动画
        var i=0,t;
        function move()
        {
            if (i == len)
            {
                $(allpic).css({left:0});
                i = 1;
            }
           if (i<0) 
           {
                $(allpic).css({left:-(len-1)*W});
                i=len-2;
            }
            setTimeout(function(){
                if (i == len-1)
                {
                    $(btn).eq(0).addClass(style).siblings().removeClass(style);
                }else{
                    $(btn).eq(i).addClass(style).siblings().removeClass(style);
                }
            },300);
            
            $(allpic).stop().animate({left:-i*W},300);
        }
        t=setInterval(function(){ 
          i++; 
          move();
          
        },5000);
    // 鼠标经过时定时停止//隐藏翻页按钮
        $(banner).mouseenter(function(){
            clearInterval(t);
            $(hid).fadeIn();
        }).mouseleave(function(){
            t=setInterval(function(){ 
              i++; 
              move();  
           },5000);
        });
    // //前进后退按钮
    //     $(prev).click(function(){
    //         i--;
    //         move();
    //     })
    //     $(next).click(function(){
    //         i++;
    //         move();
    //     })
    // 点击分页按钮
        $(btn).click(function(){
            i = $(this).index();
            move();
        });
}

Carousel(".bannerBox",".banner_ul",".footerBtn>.bannerBtn>li","current");
