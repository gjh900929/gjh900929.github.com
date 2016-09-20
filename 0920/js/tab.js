 

 $(document).ready(function(){
Tabmian(".hot_title li","active",".hot_cont .hot_list");	

$('.ad_nav li.select').hover(function(){
	$('.nav_select').slideDown("slow")
});
$(".ad_nav li.select,.nav_select").bind("mouseenter", function(){ 
$('.nav_select').show(); 
}).bind("mouseleave", function(){ 
$('.nav_select').hide();
});
	
  
});
	

function Tabmian(tabtit,tabon,tabbox)

{

	$(tabtit).hover(function(){

		$(this).addClass(tabon).siblings().removeClass(tabon);

		$(tabbox).eq($(this).index()).show().siblings(tabbox).hide();

		});

}