window.addEventListener('DOMContentLoaded',function(ev){
	function getClass(ClassName){
		return document.getElementsByClassName(ClassName);
	};
	var liDoms = getClass('list');
	var divDoms = getClass('div');

	function getArray(arr){
		return Array.prototype.slice.call(arr);
	};
	var lis = getArray(liDoms);
	var divs = getArray(divDoms);

	lis.forEach(function(e,i,res){
		e.addEventListener('mouseenter',function(ev){
		divs[i].style.width = 100+'%';
		divs[i].style['background-color'] = bgc();
		divs[i].style.transition = 'all 0.5s ease';
		},false);
		e.addEventListener('mouseleave',function(ev){
		setTimeout(function(){
			
			divs[i].style.width = 0;
			divs[i].style['background-color'] = bgc();
			divs[i].style.transition = 'all 0.5s ease';
			},400);
		},false);
		
	});
	function bgc(){
		var r = Math.round(Math.random()*255),
		g = Math.round(Math.random()*255),
		b = Math.round(Math.random()*255);
		return 'rgb('+r+','+g+','+b+')';
	};
	// setTimeout(function(){
	// 	lis.forEach(function(e,i,res){
	// 	e.addEventListener('mouseleave',function(ev){
	// 		divs[i].style.width = 0;
	// 		divs[i].style['background-color'] = bgc();
	// 		divs[i].style.transition = 'all 0.5s ease';
	// 	},false);
	// 	});
	// 	console.log(1233);
	// },3000);
},false);