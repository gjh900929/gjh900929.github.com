$(document).ready(function(){
    $(".part1-hd li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");

        $(".part1-bd>div").eq($('.part1-hd li').index(this)).show().siblings().hide();
    })
})
