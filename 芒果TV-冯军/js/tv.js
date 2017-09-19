window.addEventListener('DOMContentLoaded',function(e){
	var wrapDom = document.getElementsByClassName('wrapper')[0];
	var wralistDoms = document.getElementsByClassName('wra_list');
	var btnsDom = document.getElementsByClassName('btn');

	var _index = 0;

	var imgDoms = Array.prototype.slice.call( wralistDoms);
	var btnDoms = Array.prototype.slice.call(btnsDom);
	var length = imgDoms.length;
	//防鼠标抖动的处理方法
	var timeOut;//首先定义一个全局变量
	btnDoms.forEach(function(e,i,res){
		btnDoms[0].style['border-top'] = '3px solid #ff6700';
		imgDoms[0].style.opacity = 1;
		e.addEventListener('mouseover',function(e){
			clearTimeout(timeOut);//清除鼠标移动过程中的部分，只要鼠标最后落下的那一次
			timeOut = setTimeout(function(){
				btnDoms.forEach(function(e,i){
				e.style['border-top'] = '3px solid transparent';
				imgDoms[i].style.opacity = 0;
			});
			btnDoms[i].style['border-top'] = '3px solid #ff6700';
			imgDoms[i].style.opacity = 1;
			_index = i;
			},100);//鼠标延迟函数
		},false);
	});

	function setTime() {
		_index++;
		if(_index > length-1){
			_index = 0;
		};
		btnDoms.forEach(function(e,i){
				e.style['border-top'] = '3px solid transparent';
				imgDoms[i].style.opacity = 0;
			});
			btnDoms[_index].style['border-top'] = '3px solid #ff6700';
			imgDoms[_index].style.opacity = 1;
	};
	var timer = setInterval(setTime,3000);

    wrapDom.addEventListener('mouseenter',function(e){
    	clearInterval(timer);
    },false);

    wrapDom.addEventListener('mouseleave',function(e){
    	 timer = setInterval(setTime,3000);
    },false);
},false);