/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-17 14:04:18
 * @version $Id$
 */


// -------------------------婚纱部分图片遮罩
$("#dresses li").on("mouseenter",function(){
    var shadow = $('a.shadow',$(this));
    var p = $('p',shadow);

    shadow.fadeIn("slow");

    var linet = $('<div class="line-t line"></div>');
    var lineb = $('<div class="line-b line"></div>');
    var linel = $('<div class="line-l line"></div>');
    var liner = $('<div class="line-r line"></div>');
    linet.appendTo(p);
    lineb.appendTo(p);
    linel.appendTo(p);
    liner.appendTo(p);
    function ct(){
        linet.css({'left' : 0,'right':'auto'}).animate({'width':"100%"},800,function(){
            linet.css({'right' : 0,'left':'auto'}).animate({'width':'0'},800,function(){
                ct();
            })
        });
    }
    ct();
    function cb(){
        lineb.css({'right' : 0,'left':'auto'}).animate({'width':"100%"},800,function(){
            lineb.css({'left' : 0,'right':'auto'}).animate({'width':'0'},800,function(){
                cb();
            });
        });
    }
    cb(); 
    function cl(){
        linel.css({'bottom' : 0,'top':'auto'}).animate({'height':"100%"},800,function(){
            linel.css({'top' : 0,'bottom':'auto'}).animate({'height':0},800,cl);
        });
    }
    cl(); 
    function cr(){
        liner.css({'top' : 0,'bottom':'auto'}).animate({'height':"100%"},800,function(){
            liner.css({'bottom' : 0,'top':'auto'}).animate({'height':0},800,cr);
        });
    }
    cr();  
    $(this).on("mouseleave",function(){

        shadow.fadeOut("slow");

        $('.line-t',p).remove();
        $('.line-b',p).remove();
        $('.line-l',p).remove();
        $('.line-r',p).remove();

    })
})

//婚纱文字部分视察滚动
$(function(){
    var ani = $("#dresses .animated");
    var flag = true;

    ani.css({'opacity' : 0})

    $(window).scroll(function(){
        if (flag)
        {
            if ($(window).scrollTop() > 200)
            {
                flag = false;
                $.each(ani,function(i,n){
                    setTimeout(function(){
                        $(n).addClass("lightSpeedIn");
                    },i*300)
                })
            }
        }   
    })

})


// showbox模块 装饰
$("#dresses ul.right li").eq(1).addClass("w-ab");
$("#face ul.b-left li:nth-child(2)").addClass("w-ab");


// -----------------------场景部分图片遮罩
$("#sence li").on("mouseenter",function(){
    var shadow = $('a.shadow',$(this));
    var p = $('p',shadow);

    shadow.fadeIn("slow");

    $.each($("path",p),function(){
        try {
            var len = this.getTotalLength();
            this.style.strokeDasharray = len + ' ' + len;
            this.style.strokeDashoffset = len;

            $(this).animate({'strokeDashoffset' : 0},800);
        }
        catch (err) 
        {};
    })

    shadow.on("mouseleave",function(){

        $(this).fadeOut("slow");

    })
})

// ---------------------banner部分初始模糊淡入
$(document).ready(function(){
    var t1,t2,t3,t4;
    $("#banner > a > img").css({"filter":"blur(0px)","-webkit-fliter":"blur(0px)"});
    t1 = setTimeout(function(){
        $("#banner p.txt1 img").css({"filter":"blur(0px)","-webkit-fliter":"blur(0px)"});
    },600)
    t2 = setTimeout(function(){
        $("#banner p.txt2 img").css({"filter":"blur(0px)","-webkit-fliter":"blur(0px)"});
    },1600)
    t3 = setTimeout(function(){
        $("#banner p.txt3 img").css({"filter":"blur(0px)","-webkit-fliter":"blur(0px)"});
    },2600)
    t4 = setTimeout(function(){
        $("#banner p.txt4 img").css({"filter":"blur(0px)","-webkit-fliter":"blur(0px)"});
    },3600)
})

// -----------------侧边栏 hover状态
$("#fixsider li").on("mouseenter",function(){
    var sp = $(this).find("span");
    sp.stop().css({"display":"block"}).animate({"width":"120px"},600);

    $(this).on("mouseleave",function(){
        sp.stop().animate({'width':0},600,function(){
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


// -------------------------场景模块动态飞入
function slideIn(obj)
{
    $.each(obj,function(){
        var h = $(this).offset().top;
        var f = $(this).offset().left;
        var self = $(this);
        $(window).scroll(function(){
            if (h < ($(window).height() + $(window).scrollTop() - 100))
            {
                f > 0 ? self.animate({"right" : 0,"opacity":1},800,"swing") : self.animate({"left" : 0,"opacity":1},800);   
            }
        })
    })      
}
slideIn($("#sence .introbox,#sence .showbox"));


// ----------------婚纱模块初始淡出
$("#dresses").animate({'opacity':1},1800);
 

// ----------------判断是否为IE浏览器
function isIE() { //ie?  
    if (!!window.ActiveXObject || "ActiveXObject" in window)  
        return true;  
    else  
        return false;  
}  
// ----------------若是，取消立方体旋转
if(isIE()) {
    $("#face .container").css({"animation-play-state":"paused"});
    $("#face .front").siblings().css({"display":"none"});
    $("#face .li-r").hide();
} 
else {
    // --------------立方体旋转，鼠标经过时动画暂停
    $("#face .container .showbox").on("mouseenter",function(){
        $(this).parent().css({"animation-play-state":"paused"});
        $(this).on("mouseleave",function(){
            $(this).parent().css({"animation-play-state":"running"})
        })
    })    

    // --------------双层立方体
    
    $.each($("#face li"),function(){
        var w = $(this).width();

        $(".contain",$(this)).css({"transform-origin":"center center "+ (-w/2) + "px"});

        $(".li-f",$(this)).css({"transform":"translateZ(0)"});
        $(".li-r",$(this)).css({"left":w+"px","transform":"rotateY(90deg)","transform-origin":"left"});

        $(this).on("mouseenter",function(){
            $(".contain",$(this)).css({"transform":"rotateY(-90deg)"});
            $(this).on("mouseleave",function(){
                $(".contain",$(this)).css({"transform":"rotateY(0deg)"});
            })
        })

    })


}

// -------------------流程部分弹出框
$("#process .p-item").on("mouseenter",function(){
    var innb = $(this).find(".innerBox"),
        inn = $(this).find(".inner"),
        sv = $("svg rect",$(this)),
        t;
    var ind = $(this).index();
    if (ind == 0 ) 
    {
        innb.css({"top" : "92px","left" : "114px"});
    };
    if (ind == 6 ) 
    {
        innb.css({"top" : "92px","left" : "-125px"});
    };
    clearTimeout(t);
    inn.stop().css({'opacity':0});
    innb.css({"display":"block"});
    sv.css({'stroke-dasharray':572,"stroke-dashoffset":572});
    sv.stop().animate({'strokeDashoffset' : 0},600);
    t = setTimeout(function(){
        inn.animate({"opacity":"1"},750);
    },250)

    $(this).on("mouseleave",function(){
        innb.fadeOut();
    })

})



