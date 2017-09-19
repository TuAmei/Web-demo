window.addEventListener('DOMContentLoaded',function(ev){
	
	var pageDom = document.getElementsByClassName('page');
	var pageDoms = Array.prototype.slice.call(pageDom);
	pageDoms.forEach(function(e,i){
		e.addEventListener('click',function(ev){
			pageDoms.forEach(function(e,i){
				e.className = e.className.replace(' active','');
			});
			this.className += ' active';
		},false);
	});


	// var leftTxtDom = document.getElementsByClassName('section2-left')[0];
	// var leftTxtDomParent = leftTxtDom.parentElement;
	// var leftTxtDomtotop = leftTxtDom.offsetTop,
	// 	leftTxtDomtoleft;
	// var flag = true;
	// window.addEventListener('scroll',function a(){
	// 	leftTxtDomtoleft = getleftTxtDomPosition();
	// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	// 	if(scrollTop >= leftTxtDomtotop){
	// 		flag = false;
	// 		Fiex('fixed');
	// 	} else {
	// 		flag = true;
	// 		leftTxtDom.style.position = 'static';
	// 	}
	// },false);

	// window.addEventListener('resize',function(){
	// 	leftTxtDomtoleft = getleftTxtDomPosition();
	// 	leftTxtDom.style.left = leftTxtDomtoleft + 'px';
	// },false);

	// function Fiex(type) {
	// 	flag =false;
	// 	leftTxtDom.style.position = type;
	// 	leftTxtDom.style.top = 0;
	// 	leftTxtDom.style.left = leftTxtDomtoleft + 'px';
	// 	leftTxtDom.style['z-index'] = 10;
	// };

	// function getleftTxtDomPosition(){
	// 	return leftTxtDomParent.offsetLeft + leftTxtDomParent.offsetWidth - leftTxtDom.offsetWidth;
	// };


				
				// document.body.addEventListener('mousewheel',function(ev){
				// 	var top = leftTxtDom.offsetTop;
				// 	var _top = document.body.scrollTop;
				// 	if(top < _top){
				// 		leftTxtDom.style.position = 'fixed';
				// 		leftTxtDom.style.top = 0;
				// 		leftTxtDom.style.right = '200px';
				// 	}else{
				// 		leftTxtDom.style.position = 'relative';
				// 		// leftTxtDom.style.top = 0;
				// 		// leftTxtDom.style.right = '200px';
				// 	}
					
				// },false);

	var backTopDom = document.getElementsByClassName('backTop')[0];
	// document.body.addEventListener('mousewheel',function(ev){
	// 	// var top = backTopDom.offsetTop-document.documentElement.scrollTop;
	// 	// console.log(backTopDom.offsetTop);
	// 	// console.log(document.documentElement.scrollTop);
	// 	if(backTopDom.offsetTop > document.documentElement.scrollTop){
	// 		backTopDom.style.display = 'none';
	// 	}else{
	// 		backTopDom.style.display = 'block';
	// 	}

	// },false);

	backTopDom.addEventListener('click',function(ev){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
			backTopDom.style.transition = 'all 4s ease';
		},false);
},false);