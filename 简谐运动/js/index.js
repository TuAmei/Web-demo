window.addEventListener('DOMContentLoaded',function(event){
	function getId(idName){
		return document.getElementById(idName);
	};
	var boxDom = getId('box');
	var sunDom = getId('boxSun');

	function bgc(){
		var r = Math.round(Math.random()*255),
		g = Math.round(Math.random()*255),
		b = Math.round(Math.random()*255);
		return 'rgb('+r+','+g+','+b+')';
	}
	sunDom.style['background-color'] = bgc();
	// boxDom.onclick = function fun(ev){
	// var left , top ;
	// var p_left = ev.clientX - this.offsetLeft;
	// console.log(ev.clientX);}
	var x = 5,y = (Math.PI)/18
	var keepDom,a,s;
},false);