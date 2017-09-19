window.addEventListener('DOMContentLoaded',function(){
	var btnlist = document.getElementsByClassName('btn-list');
	var btnlistDoms = Array.prototype.slice.call(btnlist);
	var sliderDom = document.getElementsByClassName('slider')[0];
	var bigDom = document.getElementsByClassName('big')[0];
	var closeDom = document.getElementsByClassName('close')[0];
	var img = document.getElementsByClassName('img');
	var imgDoms = Array.prototype.slice.call(img);
	var changeDom = document.getElementsByClassName('change')[0];
	var contentDom = document.getElementsByClassName('content')[0];

	btnlistDoms.forEach(function(e,i){
		e.addEventListener('mouseover',function(ev){
			sliderDom.style.left = 240*i + 'px';
		},false);
	});
	
	changeDom.addEventListener('click',function(ev){
		// alert(12);
		contentDom.style.opacity = 1;
	},false);

	imgDoms.forEach(function(e,i){
		e.addEventListener('click',function(){
			// alert(i);
			var address = 'url('+e.src+')';
			// console.log(address);
			bigDom.style['background-image'] = address;
		},false);
	});

	closeDom.addEventListener('click',function(){
		contentDom.style.opacity = 0;
	},false);
},false);