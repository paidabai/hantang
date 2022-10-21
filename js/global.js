$(function(){
	$('.nav-bd>ul>li').mouseenter(function(){
		if(!$(this).hasClass('home')){
			$(this).find('a').css('color','#fff');
			$(this).find('i').stop().animate({'top':0},100);
		}
		
		/*var index = $(this).index();
		$('.subnav div').eq(index-1).show().siblings().hide();*/
		$(this).find('ul').stop().slideDown(100);
	}).mouseleave(function(){
		if(!$(this).hasClass('home')){
			$(this).find('a').css('color','#666');
			$(this).find('i').stop().animate({'top':'100%'},100);	
		}
		
		/*$('.subnav div').hide();*/
		$(this).find('ul').stop().slideUp(100);
	});
	
	$('.search a').hover(function(){
		$(this).children('img').show();
	},function(){
		$(this).children('img').hide();
		
	});
	
	$('.nav-bd>ul>li').eq(2).children('ul').width(820);
	$('.nav-bd>ul>li').eq(3).children('ul').width(730);
	$('.nav-bd>ul>li').eq(4).children('ul').width(640);
	$('.nav-bd>ul>li').eq(5).children('ul').width(550);
	$('.nav-bd>ul>li').eq(6).children('ul').width(460);
	$('.nav-bd>ul>li').eq(7).children('ul').width(370);
	$('.nav-bd>ul>li').eq(8).children('ul').width(280);
	
	$('.article-hd a:eq(1)').attr('href','javascript:;');
});

//内页左侧
$(function(){
	var timer = null;
	var num = 0;
	var h = $('.subnav-ft-bd').height();
	function autoPlay(){
		num++;
		if(num > h){
			num = 0;
		}
		$('.subnav-ft-bd ul').css({top:-num});
	}
	timer = setInterval(autoPlay,30);
	$('.subnav-ft-bd').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(autoPlay,30);
	})
});
