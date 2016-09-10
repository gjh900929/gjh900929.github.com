$(document).ready(function(){
    $(".tab-hd li").hover(function(){
       $(this).addClass("on").siblings().removeClass("on");
       $(".tab-bd>div").eq($(".tab-hd li").index(this)).show().siblings().hide();
    });
    $(".tab-hd1 li").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab-bd1>div").eq($(".tab-hd1 li").index(this)).show().siblings().hide();
    });
})
