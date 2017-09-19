window.addEventListener('DOMContentLoaded',function(e){
	var boxDom = document.getElementById('box');//获取最外面的盒子节点
	var preDom = document.getElementById('pre');//获取右边上一下翻页节点
	var nextDom = document.getElementById('next');//获取左边下一页翻页节点
	var content_imgsDom = document.getElementsByClassName('content_img');//获取装载显示的内容盒子节点
	var btnsDom = document.getElementsByClassName('btn');//获取按钮节点
	var _index = 0;//设置全局变量，用于同步显示

	var btnDoms = Array.prototype.slice.call(btnsDom);//将获取的内置数组转换为数组类型
	var imgDoms = Array.prototype.slice.call(content_imgsDom);//同上
	var length = imgDoms.length;//定义一个全局变量，用于记录显示内容的数量

	btnDoms.forEach(function(e,i){//按钮数组内置的循环，遍历按钮数组
		imgDoms[0].style.display = 'block';
		e.addEventListener('click',function(e){//给按钮添加点击事件
			btnDoms.forEach(function(e,i){
				e.className = e.className.replace(' active','');
				imgDoms[i].style.display = 'none';
				imgDoms[i].style.transition = "none";
			});
			this.className += ' active';
			imgDoms[i].style.transition = "all 0.6s ease-in-out";
			imgDoms[i].style.display = 'block';
			_index = i;
		},false);
	});

	preDom.addEventListener('click',function(e){//给上一页点击事件
		_index--;
		if(_index < 0){
			_index = length-1;
		};
		btnDoms.forEach(function(e,i){
			e.className = e.className.replace(' active','');
			imgDoms[i].style.display = 'none';
			imgDoms[i].style.transition = "none";
		});
		btnDoms[_index].className += ' active';
		imgDoms[_index].style.display = 'block';
		imgDoms[_index].style.transition = "all 0.6s ease-in-out";
	},false);


	nextDom.addEventListener('click',function(e){//给下一页添加点击事件
		_index++;
		if(_index > length-1){
			_index = 0;
		}
		btnDoms.forEach(function(e,i){
			e.className = e.className.replace(' active','');
			imgDoms[i].style.display = 'none';
			imgDoms[i].style.transition = "none";
		});
		btnDoms[_index].className += ' active';
		imgDoms[_index].style.display = 'block';
		imgDoms[_index].style.transition = "all 0.6s ease-in-out";
	},false);


	function setTimer() {
		_index++;
		if(_index > length-1){
			_index = 0;
		};
		btnDoms.forEach(function(e,i){
			e.className = e.className.replace(' active','');
			imgDoms[i].style.display = 'none';
			imgDoms[i].style.transition = "none";
		});
		btnDoms[_index].className += ' active';
		imgDoms[_index].style.display = 'block';
		imgDoms[_index].style.transition = "all 0.6s ease-in-out";
	};
	//定时器，让他自己动
	var setTime = setInterval(setTimer,1000);

	boxDom.addEventListener('mouseenter',function(e){
		clearInterval(setTime);//当鼠标移入时  清除定时器
	},false);

	boxDom.addEventListener('mouseleave',function(e){
		setTime = setInterval(setTimer,1000);//当鼠标移出是，定时器又开始工作
	},false);
},false);