/**
 *
 * @authors 郑来宾 (you@example.org)
 * @date    2016-12-17 13:44:24
 * @version $Id$
 */
$(function(){
/*
header
 */
(function(){
  function init(){
    if($(window).width()<=1500){
      $(".logo").css("margin-left","0");
      $(".phone").css("display","none");
      $('.special .arrow-left').addClass('hidden');
      $('.special .arrow-right').addClass('hidden');
      $('.story .img2').css({display:'none'});
    }
    else{
        $(".logo").css("margin-left","-250px");
        $(".phone").css("display","block");
        $('.story .img2').css({display:'block'});
        $('.special .arrow-left').removeClass('hidden');
        $('.special .arrow-right').removeClass('hidden');
    }
  }
  init();
  $(window).resize(function(){
    init();
  });
}());

/**
 *
 * banner
 *
 */
(function(){

    var W ;
    function init(){
        W = $('.banner').width();
        var h = W*0.39;
        var logoW = W*0.27;
        var t = W*0.14;
        var l = W*0.21;
        $('.banner .banner-slide i').css({width:logoW,top:t,left:l});
        $('.banner').css({height:h});
    }
    init();
    $(window).resize(function(){
        init();
    });
    function banner(){
      // console.log(W);
      $('.banner-turn').animate({left:'-='+W},500,function(){
        $('.banner-turn .banner-slide').first().appendTo('.banner-turn');
        $('.banner-turn').css({left:0});
      });
    }
    setInterval(banner,5000);

}());//banner end

/**
 *
 * special
 *
 */
(function(){

    $('.special .arrow-left').eq(0).click(function(){
        $('.special-turn .special-slide').last().prependTo('.special-turn');
        $('.special-turn').css({left:-300}).animate({left:'+=300'},1000);

    });
    $('.special .arrow-right').eq(0).click(function(){
        $('.special-turn').animate({left:'-=300'},1000,function(){
            $('.special-turn .special-slide').first().appendTo('.special-turn');
            $('.special-turn').css({left:0});
        });
    });
    $('.special ').mouseenter(function(){
            $('.special .arrow-left').removeClass('hidden');
            $('.special .arrow-right').removeClass('hidden');
          }).mouseleave(function(){
            $('.special .arrow-left').addClass('hidden');
            $('.special .arrow-right').addClass('hidden');
          })

}());//special end

/*
story

 */

(function(){
  $('.story .right .text').removeClass('in').eq(0).addClass('in');
  $('.story .story-pagination span').removeClass('cur').eq(0).addClass('cur');
  var active = 0;
  function story(){
    active++;
    left();
    if(active > 2){
      active = 0;
    }
    $('.story .right .text').removeClass('in').eq(active).addClass('in');
    $('.story .story-pagination span').removeClass('cur').eq(active).addClass('cur');
  }
  var t =  setInterval(function(){
    story();
    // console.log(active);
  },3000);
  $('.story .story-pagination').mouseenter(function(){
    clearInterval(t);
  }).mouseleave(function(){
    t =  setInterval(story,3000);
  });

//按钮控制
function left(){
    $('.story-turn').animate({left:'-=554'},500,'linear',function(){
      $('.story-turn .story-slide').first().appendTo('.story-turn');
      $('.story-turn').css({left:0});
    });
}

$('.story .story-pagination span').click(function(){
    var len = $(this).index();
        var pre = active;
            active = len;
        var count = Math.abs(active - pre);
    $('.story .right .text').removeClass('in').eq(active).addClass('in');
    $('.story .story-pagination span').removeClass('cur').eq(active).addClass('cur');
        if(active > pre){
            for(var i = 0 ; i < count ;i++){
                left();
            }
        }else{
            var p = 0 ;
            function toRight(){
                p++;
                // console.log('p'+p)
                if(p > count){
                    clearInterval(n);
                }else{
                $('.story-turn .story-slide').last().prependTo('.story-turn');
                $('.story-turn').css({left:-554}).animate({left:'+=554'},500,'linear')
                    // console.log(1)
                }
            }
            var n = setInterval(toRight,550)
        }
});


}());//story end

/*
photo

 */
(function(){
  $('.photo li div ').mouseenter(function(){
    $(this).children('.cover0').animate({width:395,height:514});
  }).mouseleave(function(){
    $(this).children('.cover0').animate({width:0,height:0});
  });
  $('.photo li div').mouseenter(function(){
    $(this).children('.cover').animate({width:395,height:236});
  }).mouseleave(function(){
    $(this).children('.cover').animate({width:0,height:0});
  });



}());//photo end

/*
wedding

 */
(function(){

  function wedding(){
    $('.wedding-turn .wedding-slide').animate({width:400,height:560,paddingTop:38,marginTop:0,zIndex:0}).eq(2).animate({width:440,height:616,paddingTop:0,marginTop:10,zIndex:5});
    $('.wedding-turn').animate({left:'-=400'},1000,function(){
      $('.wedding-turn .wedding-slide').first().appendTo('.wedding-turn');
      $('.wedding-turn').css({left:0});
    });
  }
  wedding();
  function wedding1(){
    $('.wedding-turn .wedding-slide').last().prependTo('.wedding-turn');
    $('.wedding-turn .wedding-slide').animate({width:400,height:560,paddingTop:38,marginTop:0,zIndex:0}).eq(1).animate({width:440,height:616,paddingTop:0,marginTop:10,zIndex:5});
    $('.wedding-turn').css({left:-400}).animate({left:'+=400'},1000);
    // console.log('wedding1');
  }
  var t = setInterval(wedding,5000);
  $('.wedding .wrapper').mouseenter(function(){
    clearInterval(t);
  }).mouseleave(function(){
    t = setInterval(wedding,5000);
  });

  $('.wedding .arrow-left').click(function(){
        wedding1();
  });
  $('.wedding .arrow-right').click(function(){
        wedding();
    });
}());//wedding end

/*
team

 */
(function(){
  //0
  //p标签初始化


  $('.team p').eq(2).css({padding:'10px 32px',height:220});
  $('.team li i.mid').css({borderBottom: '10px solid #fff',left:'50%',marginLef:'-10px'});

  $('.team li').eq(2).hover(function(){
    $('.team p').eq(2).animate({padding:'0 32px',height:240});
    $(this).find('img').css({transform:'scale(1.1)'});
  },function(){
     $('.team p').eq(2).animate({padding:'10px 32px',height:220});
     $(this).find('img').css({transform:'scale(1)'});
  });


  function r(index,target){
    $('.team p').eq(index).children('i').css({borderLeft: '10px solid #fff',right:'-18px',marginTop:'-10px',top:'50%',zIndex:10});
    $('.team p').eq(target).hover(function(){
      $('.team p').eq(target).animate({padding:'0 42px 0 20px'});
      $('.team li div').eq(index).find('img').css({transform:'scale(1.1)'});
    },function(){
      $('.team p').eq(target).animate({padding:'0 32px'});
      $('.team li div').eq(index).find('img').css({transform:'scale(1)'});
    });

    $('.team li div').eq(index).mouseenter(function(){
      $(this).find('img').css({transform:'scale(1.1)'});
      $('.team p').eq(target).animate({padding:'0 42px 0 20px'});
    }).mouseleave(function(){
      $(this).find('img').css({transform:'scale(1)'});
      $('.team p').eq(target).animate({padding:'0 32px'});
    });
  }
  r(0,1);
  r(3,4);



function l(index,target){

    $('.team p').eq(index).children('i').css({borderRight: '10px solid #fff',left:'-18px',marginTop:'-10px',top:'50%',zIndex:10});
    $('.team p').eq(target).hover(function(){
      $('.team p').eq(target).animate({padding:'0 20px 0 42px'});
      $('.team li div').eq(index).find('img').css({transform:'scale(1.1)'});
    },function(){
      $('.team p').eq(target).animate({padding:'0 32px'});
      $('.team li div').eq(index).find('img').css({transform:'scale(1)'});
    });
    $('.team li div').eq(index).mouseenter(function(){
      $(this).find('img').css({transform:'scale(1.1)'});
      $('.team p').eq(target).animate({padding:'0 20px 0 42px'});
    }).mouseleave(function(){
      $(this).find('img').css({transform:'scale(1)'});
      $('.team p').eq(target).animate({padding:'0 32px'});
    });
  }
l(1,0);
l(4,3);


}());//team end

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

    fs.hide();
    $(document).ready(function(){
        $(window).resize();
        function side(){
          // console.log($(window).scrollTop());
          // if (fw)
          //   {
          //       $(window).scrollTop() > 500 ?
          //       flag && (flag = 0,fs.fadeIn(),flagg = 1) :
          //       flagg && (flagg = 0,fs.fadeOut(),flag = 1) ;
          //   }
         // console.log($(window).scrollTop());

          if($(window).scrollTop() > 500 && $(window).width()>1400){
            fs.fadeIn();
          }else{
            fs.fadeOut();
          }
        }
        side();
        $(window).scroll(function(){
            // if (fw)
            // {
            //     $(window).scrollTop() > 500 ?
            //     flag && (flag = 0,fs.fadeIn(),flagg = 1) :
            //     flagg && (flagg = 0,fs.fadeOut(),flag = 1) ;
            // }
            side();
        });
        $(window).resize(function(){
        side();
        show();
         // $(window).width() <= 1500 ? (fw = 0,fs.hide()) : fw = 1;
         // $(window).width() <= 1500 ? fs.hide() : fs.show();
         // $(window).width() <= 1300 ? $("#process .decorate").hide() : $("#process .decorate").show()
    });
        function show(){
          // console.log('width'+$(window).width());
          $(window).width() <= 1400 ? fs.hide() : fs.show();
         $(window).width() <= 1300 ? $("#process .decorate").hide() : $("#process .decorate").show()
        }
        show();
    });



}();

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

}());//end

