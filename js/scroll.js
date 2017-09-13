// JavaScript Document
var h;
$(document).ready(function(){
	h=$("#p_he .pp img").outerHeight(true);


var oppp="margin-top";
$("img#up").click(function () {
});
$("img#d").click(function () {
});
$(function(){
	$("div#p_he").myScroll({
		speed:40,
		rowHeight:h-10
	});
});

(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:h-10 //每行的高度
	};

	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find(".pp").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css(oppp)));
				if(s >= step){
					$(this).find("img").slice(0, 1).appendTo($(this));
					$(this).css(oppp, 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find(".pp").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find(".pp").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);
});