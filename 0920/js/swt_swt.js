var useragent = navigator.userAgent.toLowerCase();  
var location_url = window.location.href;
if (useragent.match("iphone") != null || useragent.match('android') != null) {  
  if (location_url.match("3g") == null){
  window.location.href="http://3g.syfk99.com";
  }
} 
else
{
  if (location_url.match("3g") != null){
  window.location.href="http://www.syfk99.com";
  }
}

var quzhi =document.getElementById('quzhi').value;
switch (quzhi){


		case '135':
		case '136':
		case '137':
		case '138':
		case '139':
		case '140':
 　　		document.write('<script type="text/javascript" src="/swt/homeswt1.js"><\/script>');
            break;
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
		case '24':
		case '25':
		case '64':
		case '79':
		case '123':
		case '124':
		case '125':
		case '126':
		case '127':
		case '128':
		case '129':
		case '130':
		case '131':
		case '132':
 　　		document.write('<script type="text/javascript" src="/swt/bybyswt/swt.js"><\/script>');
			break;
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '77':
		case '92':
 　　		document.write('<script type="text/javascript" src="/swt/wtrlswt/swt.js"><\/script>');
			break;

	     case '9':
		case '11':
		case '12':
		case '13':
		case '15':
		case '74':
		document.write('<script type="text/javascript" src="/swt/fkyzswt/swt.js"><\/script>');
			break;

		case '8':
		case '76':
		case '18':
		case '61':
		case '63':
		case '66':
		case '89':
		case '90':
		case '91':
		case '16':
		case '71':
		case '10':
		case '72':
		case '73':
		case '88':
		case '87':
 　　		document.write('<script type="text/javascript" src="/swt/fkswt/swt.js"><\/script>');
			break;
		case '62':
 　　		document.write('<script type="text/javascript" src="/swt/cnmxfswt/swt.js"><\/script>');
			break;
		case '17':
 　　		document.write('<script type="text/javascript" src="/swt/zgjlswt/swt.js"><\/script>');
			break;
		case '78':
 　　		document.write('<script type="text/javascript" src="/templets/zt/dsfkjczt/swt/swt.js"><\/script>');
			break;
		case '14':
 　　		document.write('<script type="text/javascript" src="/swt/gjmlswt/swt.js"><\/script>');
			break;
		  
  		default:
        	document.write('<script type="text/javascript" src="/swt/homeswt.js"><\/script>');
			break;
}


$(window).scroll(function(){
	var _top = $(window).scrollTop();
	if(_top>400){
		$('.l-swt').show();
		$('.r-swt').show();
	}else{
		$('.l-swt').hide();
		$('.r-swt').hide();
	}
});

//炎籾獄強
var msg = document.title.split("#")[0];
msg = "´" + msg;poss = 0;
function scrollMSG() {
document.title = msg.substring(poss, msg.length) + msg.substring(0, poss);
poss++;
if (poss >  msg.length) poss = 0
window.setTimeout("scrollMSG()",400);
}
scrollMSG();

function killErrors(){ 
return true; 
} 

window.onerror = killErrors;
