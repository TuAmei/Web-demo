window.addEventListener('DOMContentLoaded',function(){
	var preDom = document.getElementById('pre');
	var nextDom = document.getElementById('next');
	var btnDoms = document.getElementsByClassName('btn');
	var unitDoms = document.getElementsByClassName('unit');
	var boxDom = document.getElementById('box');

	var _index = 0;

	var btnsDom = Array.prototype.slice.call(btnDoms);
	var unitsDom = Array.prototype.slice.call(unitDoms);
	var length = unitsDom.length;//获取所有图片的数量
	// alert(length);
	//通过下面的按钮使其运动
	btnsDom.forEach(function(e,i,res){
		unitsDom[0].style.opacity = 1;//默认第一张图片显示
		e.addEventListener('click',function(e){
			// alert(i);
			btnsDom.forEach(function(e,i){
				e.className = e.className.replace(' active','');
				unitsDom[i].style.opacity = 0;
			});
			this.className += ' active';
			unitsDom[i].style.opacity = 1;
			_index = i;
		},false);
		});

	//通过左右按钮，使其运动
	//左边
	preDom.addEventListener('click',function(e){
		_index--;
		if(_index<0){
			_index = 0;
		};
		btnsDom.forEach(function(e,i){
			e.className = e.className.replace(' active','');
			unitsDom[i].style.opacity = 0;
		});
		btnsDom[_index].className += ' active';
		unitsDom[_index].style.opacity = 1;
	},false);
	//右边
	nextDom.addEventListener('click',function(e){
		// alert('下一页');
		_index++;
		if(_index > length-1){
			_index = length-1;
		};
		
		btnsDom.forEach(function(e,i){
			e.className = e.className.replace(' active','');
			unitsDom[i].style.opacity = 0;
		});
		unitsDom[_index].style.opacity = 1;
		btnsDom[_index].className += ' active';
	},false);


	//通过定时器，使其运动
	function contentTimingHandle(){
		_index++;
		if(_index>length-1){
			_index = 0;
		};
		btnsDom.forEach(function(e,i){
				e.className = e.className.replace(' active','');
				unitsDom[i].style.opacity = 0;
			});
			btnsDom[_index].className += ' active';
			unitsDom[_index].style.opacity = 1;
	};

	var settime = setInterval(contentTimingHandle,1500);

	//当鼠标画上时，清除定时器
	boxDom.addEventListener('mouseenter',function(e){
		clearInterval(settime);
	},false);

	//当鼠标离开时，定时器恢复
	boxDom.addEventListener('mouseleave',function(e){
		settime = setInterval(contentTimingHandle,1500);
	});

},false);