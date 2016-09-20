// JavaScript Document
$(document).ready(function(){


	$('.l-swt .close').click(function(){
	$('.l-swt').hide();
	setTimeout("openL()",10000);//10000
});
$('.r-swt .close').click(function(){
	$('.r-swt').hide();
	setTimeout("openR()",10000);//10000
});
$('.ft-swt .close').click(function(){
	$('.ft-swt').hide();
	setTimeout("openFt()",10000);//10000
});

$('.m-swt .close').click(function(){
	$('.m-swt').hide();
	setTimeout("openM()",20000);//10000
});
setTimeout("openM()",10000);//10000
});



function openM(){
	$(".m-swt").show();
}
function openL(){
	$(".l-swt").show();
}
function openR(){
	$(".r-swt").show();
}
function openFt(){
	$(".ft-swt").show();
}
