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

if($(window).width()<1366){
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
        }).mouseleave(function(){
            t=setInterval(function(){
              i++;
              move();
           },5000);
        });

    // 点击分页按钮
        $(btn).click(function(){
            i = $(this).index();
            move();
        });
}

Carousel(".bannerBox",".banner_ul",".footerBtn>.bannerBtn>li","current");




// -----------------侧边栏 hover状态
$("#fixsider li").on("mouseenter",function(){
    var sp = $(this).find("span");
    sp.stop().css({"display":"block"}).animate({"width":"120px"},200);

    $(this).on("mouseleave",function(){
        sp.stop().animate({'width':0},200,function(){
            sp.css({"display":"none"})
        });
    })
})

$("#fixsider li.totop").on("click",function(){
    $('body,html').animate({"scrollTop": 0 },600);
})


// ----------------------侧边栏显示隐藏
void function(){
    var fs = $("#fixsider");
    var flag = 0;
    var flagg = 1;
    var fw = 1;
    if($(window).scrollTop() > 500){
        fs.show();
    }else{
        fs.hide();

    }
    $(document).ready(function(){
        $(window).resize();
        $(window).scroll(function(){
            if (fw)
            {
                $(window).scrollTop() > 500 ?
                flag && (flag = 0,fs.fadeIn(),flagg = 1) :
                flagg && (flagg = 0,fs.fadeOut(),flag = 1) ;
            }
        })
    });


    $(window).resize(function(){
         $(window).width() <= 1500 ? (fw = 0,fs.hide()) : fw = 1;
         $(window).width() <= 1300 ? $("#process .decorate").hide() : $("#process .decorate").show()
    });

}();


// 轮播图片上方的遮罩出现与隐藏

$(function(){
    $(".img_box .shade").hide(); // 默认隐藏所有内层元素
    $(".img_box li").hover(function() {  // 鼠标经过事件
        $(this).find(".shade").fadeIn(450)  // 切换显示和隐藏
    }, function() {
        $(this).find(".shade").fadeOut(450) // 切换显示和隐藏
    });
});

// 底部图标动画
$(function(){
    $(".icon li").on("mouseenter",function() {  // 鼠标经过事件
        var self = $(this);

        $(this).addClass("bounce");
        self.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            self.removeClass("bounce")
        });
    });
});