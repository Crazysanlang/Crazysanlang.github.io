/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2016-12-26 11:44:24
 * @version $Id$
 */

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
    if($(window).scrollTop()>500){
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