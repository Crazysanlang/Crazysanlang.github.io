$(function(){
/**
 * 
 * @authors wyk
 * @date    2016-12-18 17:59:40
 * @version v1.0
 */ 

/**
 * recruit part
 * 
 */
    (function(){
        var W = $('.recruit .list ul').eq(0).outerWidth();
        var H = $('.recruit .list li').eq(0).outerHeight();
        var indexs = $('.recruit .list .index');
        var len = indexs.eq(0).find('ul').size();

        var prevs = $('.recruit .change-btn .prev');
        var backs = $('.recruit .change-btn .back');
        var cur = 0;   //控制div.index的移动
            $('.recruit .list').width(W);
            $('.recruit .list').height(H);
            indexs.width(W * len);
            indexs.height(H);

                prevs.click(function(){
                    cur += 1;
                    if(cur < len){
                        indexs.eq(0).animate({left: -cur * W},500);    
                    }else{
                        cur=0;
                        indexs.eq(0).animate({left: -cur * W},500);    
                    }
                });   
                backs.click(function(){
                    cur -= 1;
                    if(cur>=0){
                        indexs.eq(0).animate({left: -cur * W},500);
                    }else{
                        cur=len-1;
                        indexs.eq(0).animate({left: -cur * W},500);
                    }
                });
   
    })();
/**
 *   about part  视差滚动
 * 
 */
    $(window).on('scroll',function(){
        var wscroll = $(window).scrollTop();
        var aboutTop = $('.about').offset().top;
        var wh = $(window).height()/2;
        if( (wscroll + wh) > aboutTop ){
            $('.about .txt div').addClass('down').removeClass('up');
            $('.about .txt p').delay(500).addClass('down').removeClass('up');
        }else{
            $('.about .txt div').addClass('up').removeClass('down');
            $('.about .txt p').delay(500).addClass('up').removeClass('down');
        }
    })
/**
 *   client part  轮播
 * 
 */

    var mySwiper = new Swiper('.swiper-container',{
          pagination: '.pagination',
          loop:true,   //是否循环
          grabCursor: true,
          paginationClickable: true,
          autoplay:3000,
          speed:500,
          autoplayDisableOnInteraction : false
    })
    $('.client .case').on({
            mouseenter:function(){
                mySwiper.stopAutoplay();
            },
            mouseleave:function(){
                mySwiper.startAutoplay();
            }
    });
//  顶部和底部 余斌
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











})


