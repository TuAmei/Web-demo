window.addEventListener('DOMContentLoaded',function(e){
	var listsDom = document.getElementsByClassName('list');
	var pTitlesDom = document.getElementsByClassName('pTitlie');
	var pConsDom = document.getElementsByClassName('pCon');
	var aTxtsDom = document.getElementsByClassName('aTxt');
	var _index = 0;
	var listDoms = Array.prototype.slice.call(listsDom);
	var pTitleDoms = Array.prototype.slice.call(pTitlesDom);
	var pConDoms = Array.prototype.slice.call(pConsDom);
	var aTxtDoms = Array.prototype.slice.call(aTxtsDom);

	listDoms.forEach(function(e,i){
		pConsDom[0].style.display = 'block';
		listsDom[0].style.height = 109+'px';
		e.addEventListener('mouseover',function(e){
			listDoms.forEach(function(e,i){
				listsDom[i].style.height = 36+'px';
				pTitlesDom[i].style.display = 'block';
				pConsDom[i].style.display = 'none';
			});
		listsDom[i].style.height = 109+'px';
		pTitlesDom[i].style.display = 'none';
		pConsDom[i].style.display = 'block';
		_index = i
		},false);
	});

	aTxtDoms.forEach(function(e,i){
		e.addEventListener('mouseover',function(e){
				aTxtDoms[i].style.color = '#ff5f00';
		},false);
	});
	aTxtDoms.forEach(function(e,i){
		e.addEventListener('mouseout',function(e){
				aTxtDoms[i].style.color = '#868686';
		},false);
	});
},false);