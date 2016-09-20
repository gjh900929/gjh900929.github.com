
$(document).ready(function(){	


$('.cont4-rg li').hover(function(){
	$(this).addClass("active").siblings().removeClass();
	$(".cont4-lf > dl").eq($('.cont4-rg li').index(this)).show().siblings().hide();
});
	$(".cont5-tit ul li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".cont5-cont > dl").eq($(this).index()).show().siblings(".cont5-cont > dl").hide();
		});
		 $('.jyzn-c li').hover(function(){
 
	$(this).addClass("active").siblings().removeClass();
	
});
$('.zj-tit li').hover(function(){
	$(this).addClass("active").siblings().removeClass();
	$(".zj-op > div").eq($('.zj-tit li').index(this)).show().siblings().hide();
});

});
$(document).ready(function(){
	$('.line-map .titleg li').click(function(){
	$(this).addClass("on").siblings().removeClass();
	$(".line-map .content2 > li").eq($('.line-map .titleg li').index(this)).show().siblings().hide();
});
});

$(function(){

	//Ê×Ò³ÇÐ»»
	TabMain(".cont-hd ul li","on",".cont-bd","ture");

});

//ÇÐ»»
function TabMain(tabhd,on,tabbd,tabhover)
{

	if(tabhover=="ture")

	{

		$(tabhd).hover(function(){

		$(this).addClass(on).siblings().removeClass(on);

		$(tabbd).hide();

		$(tabbd).eq($(this).index()).show();

		});

	}

	if(tabhover=="false")

	{

		$(tabhd).hover(function(){

		$(this).addClass(on).siblings().removeClass(on);

		$(tabbd).hide();

		$(tabbd).eq($(this).index()).show();

		},function(){

			$(tabbd).removeClass(on);

			$(tabbd).hide();

			});

	}

}

/*Ëæ»úÊý*/
function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   
var numR = GetRandomNum(10,99);
 
$(document).ready(function() { 
	document.getElementById("divRsjs").innerHTML=numR;
});

/*ÓÒ²àjs*/
$(document).ready(function(){
$('.right-swt li').hover(function() {
  $(this).find(".tc1").animate({right:'0px'},600,'swing');
     },function() {
      $(this).find(".tc1").animate({right:'-230px'},600,'swing');
         });
$('.right-swt li').hover(function() {
    $(this).find(".tc2").animate({right:'70px'},600,'swing');
      },function() {
       $(this).find(".tc2").animate({right:'-217px'},600,'swing');
          });

});


