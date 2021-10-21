/**
 * banner相关效果
 * 
 */
$(function(){
    $(".banner img").eq(0).animate({right:"-5px"},800)
    $(".banner img").eq(1).animate({left:"-44px"},800)
})
/**
 * 点击套餐中的箭头实现切换
 * 
 */
function tabs(obj){
    var i=0;
    var len=$(obj+" .right-slide ").children().size();
    var w=$(obj+" .right-slide ol").eq(0).width();
    $(obj+" .slide").width("570px");
    $(obj+" .right-slide").width(len*w);
        function move(){
            console.log(i)
            if(i==len){
                $(obj+" .right-slide").css({left:0});
                i=1;
            }
            if(i==-1){
                // $(obj+" .left-pic img").eq(0).fadeIn().siblings().fadeOut();
                $(obj+" .right-slide").css({left:"-1800px"});
                i=len-1;
            }
            $(obj+" .right-slide").stop().animate({left:-i*w});
            $(obj+" .left-pic img").eq(i-1).fadeIn().siblings().fadeOut();

        }
        $(obj+" .prev").click(function(){
            i++;
            move();
        })
        $(obj+" .next").click(function(){
            i--;
            move();
        })
}
tabs(".page1");
tabs(".page2");
tabs(".page3");

/**
 * 点击加载更多克隆更多的LI
 * 
 */
$(".more").click(function(){
    $(".cont ul").append($(".cont ul li").eq(0).clone(true));
})
/**
 * 鼠标经过套餐中相应的小图片时图片放大
 * 
 */
 $(function(){
    $("ol li").last().css({"margin-right":0});
    $("ol li").mouseenter(function(){
        $(this).find("img").css({transform:"scale(1.03)"});
    })
    $("ol li").mouseleave(function(){
        $(this).find("img").css({transform:"scale(1)"});
    })
 })