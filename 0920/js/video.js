function m20120829101(flv,pre){var mgpwidth=226;var mgpheight=187;bcl="http://net.zoosnet.net/LR/chatpre.aspx?id=NET19440676&r="+document.referrer+"?twb&p="+window.location.href+"?twb";var divid="mpg"+parseInt(Math.random()*1024);document.write("<div style=\"margin-left:auto; margin-right:auto; width:" + mgpwidth + "px; height:" + mgpheight + "px; border-left:solid; border-left-color:#d6d6d6; border-right:solid; border-right-color:#d6d6d6; border-width:1px;\"><div style=\"width:" + mgpwidth + "px; height:" + (mgpheight-24) + "px;\"><div id=\""+divid+"\">loading ...</div></div></div>");jwplayer(divid).setup({'flashplayer':'/templets/news/video/mgplayer.swf','image':pre,'file':flv,'controlbar':'bottom','width':mgpwidth,'height':(mgpheight),'stretching':'exactfit','smoothing':'true'});}m20120829101("/templets/news/video/video.flv","/templets/news/video/pre.jpg");
