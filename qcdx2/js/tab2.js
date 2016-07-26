

$(document).ready(function(){

	

/*	$('.title span').hover(function(){

 

	$(this).addClass("active").siblings().removeClass();

 

	$(".cont > dl").eq($('.title span').index(this)).show().siblings().hide();

 

});*/
	

$('.hd li').click(function(){
	$(this).addClass("hd_bk").siblings().removeClass();
 
});
$(".a_hid").hide();
$(".b_a_1").hide();



$('.b_a').click(function(){
	$(".a_hid").show();
 	$(".b_a_1").show();
	$(".b_a").hide();
	$('.b_a_1').click(function(){
	$(".a_hid").hide();
 	$(".b_a").show();
	$(".b_a_1").hide();
});
});
/*$('.b_a_1').click(function(){
	$(".a_hid").hide();
 	$(this).addClass("b_a").removeClass("b_a_1");
});*/



$('.dianjit').click(function(){
	
	$(".we_pin").show();
	$(".quehb").hide();
	$(".topTotal").hide();
	$('.a_fanhui a').click(function(){
 	$(".quehb").show();
	$(".we_pin").hide();
	$(".topTotal").show();
});
$("html,body").animate({scrollTop:$(".we_pin").eq($('.sub_nav li').index(this)).offset().top-55},1000);
});
/*$('.dianjit').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});
*/
$(".le_meng").hide();
$(function(){	
	$(window).scroll(function() {		
		if($(window).scrollTop() >= 100){
			$('.le_meng').fadeIn(300); 
		}else{    
			$('.le_meng').fadeOut(300);    
		}  
	});
	$('.le_meng').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});	
	
});





$(".a_suoy ul li span").click(function(){

	$("html,body").animate({scrollTop:$(".one_a").eq($('.a_suoy ul li span').index(this)).offset().top-60},1000);
	});





});





	  

	 



