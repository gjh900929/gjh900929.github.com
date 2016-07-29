$(document).ready(function(){
    $(".tab-hd a").click(function(){
        $(".tab-bd li").eq($('.tab-hd a').index(this)).show().siblings().hide();
    });

    $(".tab-hd1 a").click(function(){
        $(".tab-bd1 li").eq($('.tab-hd1 a').index(this)).show().siblings().hide();
    });

    $(".tab-hd2 a").click(function(){
        $(".tab-bd2 li").eq($('.tab-hd2 a').index(this)).show().siblings().hide();
    });

    $(".tab-hd3 a").click(function(){
        $(".tab-bd3 li").eq($('.tab-hd3 a').index(this)).show().siblings().hide();
    });
})

