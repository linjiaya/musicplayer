var audio=document.getElementById('audio');
$('#close_menu').on('click',function(){
	if (document.getElementById('menu').style.display!='none') {
		$("#menu").animate({left:"-20%"},function(){
			$("#menu").hide();
		});
		$('#close_menu').animate({left:"10px"});
	document.getElementById('close_menu').style.transform='rotate(180deg)';
	return;
	}
	else{
		$("#menu").show();
		$("#menu").animate({left:"0"});
		$('#close_menu').animate({left:"17%"});
	document.getElementById('close_menu').style.transform='rotate(0deg)';
	return;
	}
});

var musicName=["暧 昧","矜 持","葡萄成熟时","悟 空","新娘阿花"];
var author=["王菲","王菲","陈奕迅","戴荃","金玟岐"];
var music=["music/aimei.mp3","music/jinchi.mp3","music/putaochengshushi.mp3","music/wukong.mp3","music/xinniangahua.mp3"]
var index=0;
var url=['lyric1.txt','lyric2.txt','lyric3.txt','lyric4.txt','lyric5.txt'];

var bgimg=document.getElementById('bgimg');
bg1=setInterval(function(){
				bgimg.src="img/girl.jpg";
			},1000);
function li1(){
	clearInterval(bg1);
	index=0;
	$("#player").slideUp(1000,function(){
		$('#playerName').text(musicName[0]);
		$('#playerauthor').text(author[0]);
		$("#icon").css('background',"url(img/wangfeiicon.png)")
		$("#bgimg").prop('src','img/wangfei2.jpg');
		$("#lyric").css('color','black');
		$('#playerheader').css('color','black');
		$('#play').css('backgroundPosition','-29px bottom');
		getLyric(url[0]);
		time();
		audio.src="music/aimei.mp3";
		$("#player").slideDown(1000,function(){
			audio.load();
			audio.play();
			lrcShow();
			var i=1;
			if (i<3) {
			bg1=setInterval(function(){
				$('#bgimg').fadeOut(500,function(){
					$("#lyric").css('color','black');
				$('#playerheader').css('color','black');
				bgimg.src="img/wangfei"+i+".jpg";
				i++;
				$('#bgimg').fadeIn(1000);
				if (i==4) {
				$("#lyric").css('color','white');
				$('#playerheader').css('color','white');
					i=1;
				}
				});
				
			},5000);
		}
		});
	});
}
function li2(){
	clearInterval(bg1);
	index=1;
	$("#player").slideUp(1000,function(){
		$('#playerName').text(musicName[1]);
		$('#playerauthor').text(author[1]);
		$("#icon").css('background',"url(img/wangfeiicon.png)")
		$("#bgimg").prop('src','img/wangfei2.jpg');
		$("#lyric").css('color','black');
		$('#playerheader').css('color','black');
		$('#play').css('backgroundPosition','-29px bottom');
		getLyric(url[1]);
		audio.src="music/jinchi.mp3";
		time();
		$("#player").slideDown(1000,function(){
			audio.load();
			audio.play();
			lrcShow();
			var i=1;
			if (i<3) {
			bg1=setInterval(function(){
				$('#bgimg').fadeOut(500,function(){
					$("#lyric").css('color','black');
					$('#playerheader').css('color','black');
					bgimg.src="img/wangfei"+i+".jpg";
				$('#bgimg').fadeIn(1000);
					i++;
					if (i==4) {
					$("#lyric").css('color','white');
					$('#playerheader').css('color','white');
						i=1;
					}
				});
			},5000);
		}
		});
	});
}
function li3(){
	clearInterval(bg1);
	index=2;
	$("#player").slideUp(1000,function(){
		$('#playerName').text(musicName[2]);
		$('#playerauthor').text(author[2]);
		$("#icon").css('background',"url(img/CYXicon.jpg)")
		$("#bgimg").prop('src','img/CYX3.jpg');
		$('#playerheader').css('color','#BFC0C0');
		$("#lyric").css('color','#BFC0C0');
		$('#play').css('backgroundPosition','-29px bottom');
		getLyric(url[2]);
		audio.src="music/putaochengshushi.mp3";
		time();
		$("#player").slideDown(1000,function(){
			audio.load();
			audio.play();
			lrcShow();
			var i=1;
			if (i<3) {
			bg1=setInterval(function(){
				$('#bgimg').fadeOut(500,function(){
					bgimg.src="img/CYX"+i+".jpg";
				$('#bgimg').fadeIn(1000);
					i++;
					if (i==4) {
						
						i=1;
					}
				});
			},5000);
		}
		});
	});
}
function li4(){
	clearInterval(bg1);
	index=3;
	$("#player").slideUp(1000,function(){
		$('#playerName').text(musicName[3]);
		$('#playerauthor').text(author[3]);
		$("#icon").css('background',"url(img/DQicon.png)")
		$("#bgimg").prop('src','img/DQ3.jpg');
		$("#lyric").css('color','black');
		$('#playerheader').css('color','black');
		$('#play').css('backgroundPosition','-29px bottom');
		getLyric(url[3]);
		audio.src="music/wukong.mp3";
		time();
		$("#player").slideDown(1000,function(){
			audio.load();
			audio.play();
			lrcShow();
			var i=1;
			if (i<3) {
			bg1=setInterval(function(){
				$('#bgimg').fadeOut(500,function(){
					$("#lyric").css('color','black');
					$('#playerheader').css('color','black');
					if (i==2) {
					$("#lyric").css('color','white');
					$('#playerheader').css('color','white');
					}
					bgimg.src="img/DQ"+i+".jpg";
				$('#bgimg').fadeIn(1000);
					i++;
					if (i==4) {
						i=1;
					}
				});
			},5000);
		}
		});
	});

}
function li5(){
	clearInterval(bg1);
	index=4;
	$("#player").slideUp(1000,function(){
		$('#playerName').text(musicName[4]);
		$('#playerauthor').text(author[4]);
		$("#icon").css('background',"url(img/JWQicon.jpg)");
		$('#play').css('backgroundPosition','-29px bottom');
		$("#lyric").css('color','black');
		$('#playerheader').css('color','black');
		$("#bgimg").prop('src','img/JWQ3.jpg');
		getLyric(url[4]);
		time();
		audio.src="music/xinniangahua.mp3";
		$("#player").slideDown(1000,function(){
			audio.load();
			audio.play();
			lrcShow();
			var i=1;
			if (i<3) {
			bg1=setInterval(function(){
				$('#bgimg').fadeOut(500,function(){
				$("#lyric").css('color','black');
				$('#playerheader').css('color','black');
				if (i==2) {
				$("#lyric").css('color','white');
				$('#playerheader').css('color','white');
				}
				bgimg.src="img/JWQ"+i+".jpg";
				$('#bgimg').fadeIn(1000);
				i++;
				if (i==4) {
					i=1;
				}
			  });
			},5000);
		}
		});
	});

}
//播放 暂停
$("#play").click(function(){
	if (document.getElementById('player').style.display=="none") {
		li1();
	}
	else{
		if (audio.paused==true) {
		$('#play').css('backgroundPosition','-29px bottom');
		audio.play();
		}
		else{
		$('#play').css('backgroundPosition','left bottom');
		audio.pause();
		}
	}
});

//上一曲
$("#last").click(function(){
	if (document.getElementById('player').style.display=="none") {
		li1();
	}
	else{
		switch(index){
			case 0:
			li5();break;
			case 1:
			li1();break;
			case 2:
			li2();break;
			case 3:
			li3();break;
			case 4:
			li4();break;
		}
	}
});

//下一曲
$("#next").click(function(){
	if (document.getElementById('player').style.display=="none") {
		li1();
	}
	else{
		switch(index){
			case 0:
			li2();break;
			case 1:
			li3();break;
			case 2:
			li4();break;
			case 3:
			li5();break;
			case 4:
			li1();break;
		}
	}
});

//时间 进度条
function time(){
	setInterval(function(){
		var alltime=audio.duration;
		var currenttime=audio.currentTime;
		var minutes=parseInt(currenttime/60);
		if (minutes<10) {
			minutes="0"+minutes;
		}else{
			minutes=minutes;
		}
		var seconds=parseInt(currenttime%60);
		if (seconds<10) {
			seconds="0"+seconds;
		}
		else{
			seconds=seconds;
		}
		var CTime=minutes+":"+seconds;
		$("#currenttime").text(CTime);

		var m=0;
		m=parseInt(alltime/60);
		var s=0;
		s=parseInt(alltime%60);
		if (m<10) {
			m="0"+m;
		}else{
			m=m;
		}
		if (s<10) {
			s="0"+s;
		}
		else{
			s=s;
		}
		ATime=m+":"+s;
		if (ATime=="NaN:NaN") {
		$("#alltime").text("00:00");
		}
		else{
			$("#alltime").text(ATime);
		}
		var CrA=currenttime/alltime;
		var range=CrA*400+"px";
		$("#currentrange").css('width',range);

	},1000);
}

//进度条点击
$('#range').click(function(){
	if (document.getElementById('player').style.display!="none") {
		var music_length=audio.duration;
		var play_length=audio.currentTime; 
		var x =event.offsetX;
		// var y =event.offsetY;
		$('#currentrange').css('width',x);
		audio.currentTime=x/400*audio.duration;
	}
});
$('#currentrange').click(function(){
	$("#range").click();
})

//播放顺序
var sort=["img/round_play.png","img/random_play.png","img/loop_play.png"];
$("#playsort").click(function(){
	var playsort=document.getElementById('playsort');
	switch(playsort.name){
		case "0":
			playsort.name="1";
			playsort.src=sort[1];
			audio.loop=false;
			audio.onended=function(){
			var i=0;
			i=parseInt(Math.random()*4);
			switch(i){
				case 0:
				li1();break;
				case 1:
				li2();break;
				case 2:
				li3();break;
				case 3:
				li4();break;
				case 4:
				li5();break;
			}
		};
			break;
		case "1":
		playsort.name="2";
		playsort.src=sort[2];
		audio.loop=true;break;
		case "2":		
		playsort.name="0";
		playsort.src=sort[0];
		audio.loop=false;
		audio.onended=function(){
			if (audio.loop==false) {
			$('#play').css('backgroundPosition','left bottom');
			$("#next").click();
			}
		};
		break;
	}
});
audio.volume=0.3;
//声音
$("#sound").click(function(){
	$('#sound').css('backgroundPosition',"right top");
	audio.volume=0.0;
	$('#soundCrange').css('width','0px');
});
$('#soundrange').click(function(){
	$('#sound').css('backgroundPosition',"left top");
		var sound=audio.volume; 
		var x =event.offsetX;
		// var y =event.offsetY;
		$('#soundCrange').css('width',x);
		audio.volume=parseFloat(x/100).toFixed(1);
});
$('#soundCrange').click(function(){
	$("#soundrange").click();
})
audio.onended=function(){
	if (audio.loop==false) {
	$('#play').css('backgroundPosition','left bottom');
	$("#next").click();
	}
}
$(function(){
	document.getElementById('li1').onclick=li1;
	document.getElementById('li2').onclick=li2;
	document.getElementById('li3').onclick=li3;
	document.getElementById('li4').onclick=li4;
	document.getElementById('li5').onclick=li5;
});

var lyric;
    function getLyric(url){
    	//建立一个XMLHttpRequest请求
    	var request = new XMLHttpRequest();
    	//配置, url为歌词地址，比如：'./content/songs/foo.lrc'
    	request.open('GET', url, true);
    	//因为我们需要的歌词是纯文本形式的，所以设置返回类型为文本
    	request.responseType = 'text';
    	//一旦请求成功，但得到了想要的歌词了
    	request.onload = function() {
    	    //这里获得歌词文件
    	    lyric = request.response;
    	    parseLyric();
    	    // $('.content_musicword').text(result); 
    	};
    	//向服务器发送请求
    	request.send();

    }
    function parseLyric() {
    	text=lyric;
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            //提取歌词
            value = v.replace(pattern, '');
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    return result;
}
	function lrcShow(){
	//获取页面上的audio标签
		var audio = document.getElementById('audio'),
		//显示歌词的元素
		lyricContainer = document.getElementById('lyric');
		//监听ontimeupdate事件
		$('.content_lrc_box').html('');
		    //遍历所有歌词，看哪句歌词的时间与当然时间吻合
		    for (var i = 0, l = result.length; i < l; i++) {
		    	$('.content_lrc_box').html($('.content_lrc_box').html()+'<p>'+result[i][1]+'</p>');
		        if (this.currentTime> result[i][0]) {
		            //显示到页面
		        };
		    };
		audio.ontimeupdate = function(e) {
			$('.content_lrc_box').offset({"top":"350px"});
		    //遍历所有歌词，看哪句歌词的时间与当然时间吻合
		    for (var i = 0, l = result.length; i < l; i++) {
		        if (this.currentTime> result[i][0]) {
		            //显示到页面
		            t=Math.floor(250-18*i-7*18);
		            var contentLrcBox=document.getElementById('lyric');
		            if (i<7) {
		            $('.content_lrc_box').css({"top":0});
		            }
		            else{
		            	$('.content_lrc_box').css({"top":t});
		            }
		            $('.content_lrc_box p').css({"font-size":"16px","line-height":"18px"});
		            $('.content_lrc_box p').eq(i).css({"font-size":"22px"});
		        };
		    };
		};
	}
