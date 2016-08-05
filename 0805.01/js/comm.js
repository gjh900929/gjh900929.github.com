


window.onload=function(){
if(document.getElementById("box6")){

TouchSlide({ 
			slideCell:"#box6",
			titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
			mainCell:".bd ul", 
			effect:"leftLoop", 
			autoPage:true,//自动分页
			autoPlay:true //自动播放
		});
}
	var a = document.getElementsByTagName("a");

	var userinfo = navigator.userAgent;

	if (userinfo.indexOf("GT") > -1 || userinfo.indexOf("MQQBrowser") > -1){

		for (var i = 0;i < a.length;i++){

			if (a.item(i).href.indexOf("tel:") > -1){

				var call = a.item(i).href.replace("tel:","wtai://wp/mc;").replace(/[ ]/g,"");

				a.item(i).href = call;

			}

		}

	}else if(userinfo.indexOf("iPhone") > -1){

		for (var i = 0;i < a.length;i++){

			if (a.item(i).href.indexOf("wtai://wp/mc;") > -1){

				var call = a.item(i).href.replace("wtai://wp/mc;","tel:").replace(/[ ]/g,"");

				a.item(i).href = call;

			}

		}

	}

}

