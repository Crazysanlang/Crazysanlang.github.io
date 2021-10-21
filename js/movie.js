/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-16 17:49:31
 * @version $Id$
 */
(function(){


    // swiper
    // 
    function swi1(){

        var mySwiper = new Swiper('.tid-cont',{
        // pagination: '.pagination',
        loop:false,
        grabCursor: true,
        speed:500,
        paginationClickable: true
      })
      $('.tid-btn1').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
      })
      $('.tid-btn2').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
      })
    }
    swi1();


function swi2(){

    var mySwiper = new Swiper('.item',{
        // pagination: '.pagination',
        loop:false,
        grabCursor: true,
        speed:500,
        paginationClickable: true
      })
      $('.item-i1').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
      })
      $('.item-i3').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
      })
}
swi2();


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


// function sid(){
//     $(".sidebar_img4").click(function(){
//         $("html body").animate({scrollTop:0});
//         console.log(1);
//     })

//     $(".sidebar_img3").hover(function(){
//         $(".tell").fadeToggle()
//     });

//     $(window).scroll(function(){

//         if($(window).scrollTop()>=300){
//             $(".sidebar").animate({opacity:"1"})
//         }else{
//             $(".sidebar").animate({opacity:"0"})  
//         }
//     }
// }
// sid();
})();












