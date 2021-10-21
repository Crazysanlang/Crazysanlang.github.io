$(".details .smallimg li").eq(4).css({
    marginRight: 0
})
$(".details .smallimg .right").hover(function() {
    $(this).find("img").attr({
        src: "images/last-arrowhover.png"
    }).css({
        transform: "rotate(0deg)"
    })
}, function() {
    $(this).find("img").attr({
        src: "images/last-arrow.png"
    }).css({
        transform: "rotate(180deg)"
    })
})
$(".details .smallimg .left").hover(function() {
    $(this).find("img").attr({
        src: "images/last-arrowhover.png"
    }).css({
        transform: "rotate(180deg)"
    })
}, function() {
    $(this).find("img").attr({
        src: "images/last-arrow.png"
    }).css({
        transform: "rotate(0deg)"
    })
})
$(".mc .ele li").eq(0).css({
    background: "#a98251"
})
$(".mc .ele li").eq(1).css({
    background: "#bf9156"
})
$(".mc .ele li").eq(2).css({
    background: "#cc9e65"
})
$(".mc .ele li").eq(3).css({
    background: "#313131",
    width: "360px"
})
$(".mc .aside .up img").hover(function() {
    $(this).attr({
        src: "images/last-asidearrowhover.png"
    }).css({
        transform: "rotate(0deg)"
    })
}, function() {
    $(this).attr({
        src: "images/last-asidearrow.png"
    }).css({
        transform: "rotate(180deg)"
    })
})
$(".mc .aside .down img").hover(function() {
    $(this).attr({
        src: "images/last-asidearrowhover.png"
    }).css({
        transform: "rotate(180deg)"
    })
}, function() {
    $(this).attr({
        src: "images/last-asidearrow.png"
    }).css({
        transform: "rotate(0deg)"
    })
})
$(".mc .tit li").click(function() {
    $(this).find(".triangle").addClass("current").parent().siblings().find(".triangle").removeClass("current")
})

//放大镜效果
var src = $(".details .zoom .smallimg .current").find("img").attr("src");
console.log(src)
$(".details .zoom .smallimg .img").mouseenter(function() {
    $(this).addClass("current").siblings().removeClass("current");
    var src = $(".details .zoom .smallimg .current").find("img").attr("src");
    $(".details .zoom .bigimg img").attr({
        src: src
    }).css({
        width: 574
    })
})
$(".details .zoom .smallimg .left").click(function() {
    var cur = $(".details .zoom .smallimg .current").index();
    console.log(cur);
    cur--;
    $(".details .zoom .smallimg .img").eq(cur - 1).addClass("current").siblings().removeClass("current");
    var src = $(".details .zoom .smallimg .current").find("img").attr("src");
    $(".details .zoom .bigimg img").attr({
        src: src
    }).css({
        width: 574
    })
})
$(".details .zoom .smallimg .right").click(function() {
    var cur = $(".details .zoom .smallimg .current").index();
    console.log(cur);
    if (cur == 4) {
        cur = 0;
    }
    $(".details .zoom .smallimg .img").eq(cur).addClass("current").siblings().removeClass("current");
    var src = $(".details .zoom .smallimg .current").find("img").attr("src");
    $(".details .zoom .bigimg img").attr({
        src: src
    }).css({
        width: 574
    })
})

$(".details .zoom .bigimg").mousemove(function(e) {
    $(this).find("b").show();
    $(".zoomimg").show() //zoomimg位置
        //镜片宽高
    var bW = $("b").width();
    var bH = $("b").height();
    var W = $(this).width();
    var H = $(this).height();
    //bigimg宽高
    var bigW = $(".details .zoom .bigimg").width();
    var bigH = $(".details .zoom .bigimg").height();
    var L = e.pageX; //鼠标距离页面左边的距离
    var l = $(this).offset().left;
    var left = L - l - bW / 2;
    var T = e.pageY;
    var t = $(this).offset().top;
    var top = T - t - bH / 2;
    left = left < 0 ? 0 : left;
    left = left > (W - bW) ? (W - bW) : left;
    top = top < 0 ? 0 : top;
    top = top > (H - bH) ? (H - bH) : top;
    $('b').css({
        left: left,
        top: top
    });
    var imgLeft = (-(left / W) * $('.zoomimg img').width());
    var imgTop = (-(top / H) * $('.zoomimg img').height());
    imgLeft = imgLeft < -W ? -W : imgLeft;
    imgTop = imgTop < -H ? -H : imgTop;
    $('.zoomimg img').css({
        left: imgLeft,
        top: imgTop
    });
})
$('.details .zoom .bigimg').mouseout(function() {
    $(this).find("b").hide();
    $(".zoomimg").hide()
});
//无缝滚动
var $ul = $(".aside .contain ul");
$ul.find('li').clone().appendTo($ul)
var speed = -1;
var start = 0;
var h = $ul.height();

function wf() {
    if ($ul.css('top').replace(/px/g, "") > 0) {
        start = -h / 2
    } else if ($ul.css('top').replace(/px/g, "") < -h / 2) {
        start = 0
    }
    $ul.stop().animate({
        top: start += speed,
    }, 0)
}
var t = setInterval(wf, 20);
$ul.hover(function() {
    clearInterval(t);
}, function() {
    t = setInterval(wf, 20);
})
$(".aside .arrow .up").mouseenter(function() {
    speed = -1;
})
$(".aside .arrow .down").mouseenter(function() {
        speed = 1;
    })
    //mc效果
var titTop = $(".mc .tit").offset().top;
$(window).scroll(function() {
    var t = $(window).scrollTop();
    if (t >= titTop + 45) {
        $(".titfix").slideDown()
    } else {
        $(".titfix").hide()
    }
    if (t >= 570) {
        $(".back").css({
            display: "block"
        })
    } else {
        $(".back").css({
            display: "none"
        })
    }
})
$(".titfix li").eq(1).click(function() {
    $("html body").animate({
        scrollTop: 4319
    })
})
$(".titfix li").eq(0).click(function() {
    $("html body").animate({
        scrollTop: titTop
    })
})
$(".mc .tit li").eq(1).click(function() {
    $("html body").animate({
        scrollTop: 4319
    })
})
$(".mc .tit li").eq(0).click(function() {
        $("html body").animate({
            scrollTop: titTop
        })
    })
    // 返回顶部开始
timer = setInterval(function() {
    $(".back").animate({
        bottom: 90
    })
    $(".back").animate({
        bottom: 100
    })
}, 10)
$(".back").click(function() {
    $("html,body").animate({
        scrollTop: 0
    })
})