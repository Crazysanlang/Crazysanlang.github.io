/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-12-20 20:30:47
 * @version $Id$
 */

// function show(obj,mar,t){
//     var t = $(obj).offset().top-400;

//     $(document).scroll(function(){
//         var d = $("body").scrollTop();

//         if(d>400){
//             $(obj + " img").animate({mar:'0'},100);
//             $(obj + " .txt").animate({t:'0'},500);
//         }
//     });
// }
// show(".in1","marginLeft","marginRight");
// show(".in2 ","marginLeft","marginRight");
// show(".in3 ");
// show(".in4 ");

function show(obj){
    var t = $(obj).offset().top-600;

    $(document).scroll(function(){
        var d = $("body").scrollTop();

        if(d>t){
            $(obj + " img").animate({margin:'0'},100);
            $(obj + " .txt").animate({margin:'0',marginTop:"46px"},500);
        }
    });
}
show(".in1");
show(".in2");
show(".in3");
show(".in4");