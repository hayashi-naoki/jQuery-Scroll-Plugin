/*
 * jquery.scroll.js
 * Copyright (c) 2011 KEYTON.CO,Ltd.
 * Dual licensed under MIT and GPL.
 * Date: 2011-10-17
 * @author Hayashi Naoki
 * @version 1.1.2
 * http://www.keyton-co.jp/
 */
jQuery(function($){
	$.fn.scroll=function(option){
		var el = $(window.opera ? document.compatMode=='BackCompat'?'body':'html':'html,body');
		var option = option || {};
		option.duration = option.duration || 800;
		option.easing   = option.easing   || 'swing';
		option.replace  = option.replace  || true;
		var here = document.URL.split("#")[0];
		return this.each(function(){
			var thisId = '#'.$(this).attr('href').split("#")[1];
			$(this).bind('click',function(e){
				var obj = $(thisId);
				var o_set = obj.offset() != null ? obj.offset() : {left:0,top:0};
				el.animate(
					{scrollTop:o_set.top,scrollLeft:o_set.left},
					{
						duration:option.duration,
						easing:option.easing,
						complete:function(){
							el.scrollTop(o_set.top).scrollLeft(o_set.left).queue([]).stop();
							if(option.replace){window.location.href=here+thisId};
					 	}
					}
				);
				return false;
			});
		});
	}
	$("a[href^='#']").scroll();
});