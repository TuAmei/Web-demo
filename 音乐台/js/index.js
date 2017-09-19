window.addEventListener('DOMContentLoaded',function(ev){
	//获取类名节点
	function getClassName(className){
		return document.getElementsByClassName(className);
	}
	//获取ID名节点
	function getIdName(idName){
		return document.getElementById(idName);
	}
	//将内置对象转为数组
	function getArray(arr){
		return Array.prototype.slice.call(arr);
	}

	//登录隐藏部分
		var logindivDom = getClassName('login-div')[0];
		var login1Dom = getClassName('login1')[0];
		var closeDom = getClassName('close')[0];

		login1Dom.addEventListener('click',function(ev){
			logindivDom.style.display = 'block';
		},false);

		closeDom.addEventListener('click',function(ev){
			logindivDom.style.display = 'none';
		},false);

	//搜索栏节点获取
		var searchitemDom = getClassName('search-item')[0];
		var searchinputDom = getClassName('search-input')[0];
	
	//首播里面的轮播节点获取
		var arrnext1Dom = getClassName('arrow1-next')[0];
		var arrpre1Dom = getClassName('arrow1-pre')[0];
		var boxitemDom = getClassName('box-item')[0];
		var f10liDom = getClassName('f10li');
		var f10liDoms = getArray(f10liDom);

	//头部部分节点获取
		// var h5Dom = getClassName('h5');
		// var pDom = getClassName('p');
		// var hdItemDom = getClassName('header-item')[0];
		// var wraListDom = getClassName('wrapper-list')[2];

	//首播部分的各个节点获取
		var f4Dom = getClassName('f4');
		var arrpre2Dom = getClassName('f4a-pre');
		var arrnext2Dom = getClassName('f4a-next');
		var f1ulDom = getClassName('f1ul')[0];
		var f1aDom = getClassName('f1a');
		var f1aDoms = getArray(f1aDom);
		var f1nextDom = getClassName('f1next')[0];
		var f1preDom = getClassName('f1pre')[0];
		var num11 = 0;

		f1aDoms.forEach(function(e,i){
			e.addEventListener('click',function(ev){
				f1aDoms.forEach(function(e,i){
					e.className = e.className.replace(' active1','');
					// f1ulDom.style['transition'] = 'all .6s ease';
				});
				e.className += ' active1';
				f1ulDom.style['margin-left'] = -1*i*1250 + 'px';
				num22 = i;
			},false);
		});

		f1nextDom.addEventListener('click',function(ev){
			num11++;
			if (num11 !== 0) {
				f1preDom.style.display = 'block';

			}
			if (num11 >= 2) {
				num11 = 2;
				f1nextDom.style.display = 'none';
			}
			f1ulDom.style['margin-left'] = -1*num11*1250 + 'px';
			// f1ulDom.style['transition'] = 'all .6s ease';
		},false);

		f1preDom.addEventListener('click',function(ev){
			num11--;
			if (num11 !== 0) {
				f1nextDom.style.display = 'block';

			}
			if (num11 <= 0) {
				num11 = 0;
				f1preDom.style.display = 'none';
			}
			f1ulDom.style['margin-left'] = -1*num11*1250 + 'px';
			f1ulDom.style['transition'] = 'all .6s ease';
		},false);

	// 音悦V榜    自制节目部分节点获取
		var f6div5Dom = getClassName('f6div5');
		var f6div5Doms = getArray(f6div5Dom);
		var f6div4Dom = getClassName('f6div4');
		var f6div4Doms = getArray(f6div4Dom);
		var f6div3Dom = getClassName('f6div3');
		var f6div3Doms = getArray(f6div3Dom);
		var f6div2Dom = getClassName('f6div2');
		var f6div2Doms = getArray(f6div2Dom);
		var f6div11Dom = getClassName('f6div11');
		var f6div11Doms = getArray(f6div11Dom);
		var f6div12Dom = getClassName('f6div12');
		var f6div12Doms = getArray(f6div12Dom);
		var f6div13Dom = getClassName('f6div13');
		var f6div13Doms = getArray(f6div13Dom);
		var f6div14Dom = getClassName('f6div14');
		var f6div14Doms = getArray(f6div14Dom);
		var f6img5Dom = getClassName('f6img5');
		var f6img5Doms = getArray(f6img5Dom);
		var f6img4Dom = getClassName('f6img4');
		var f6img4Doms = getArray(f6img4Dom);
		var f6img3Dom = getClassName('f6img3');
		var f6img3Doms = getArray(f6img3Dom);
		var f6img2Dom = getClassName('f6img2');
		var f6img2Doms = getArray(f6img2Dom);
		var f6img11Dom = getClassName('f6img11');
		var f6img11Doms = getArray(f6img11Dom);
		var f6img12Dom = getClassName('f6img12');
		var f6img12Doms = getArray(f6img12Dom);
		var f6img13Dom = getClassName('f6img13');
		var f6img13Doms = getArray(f6img13Dom);
		var f6img14Dom = getClassName('f6img14');
		var f6img14Doms = getArray(f6img14Dom);
		var f6h5Dom = getClassName('f6h5');
		var f6h5Doms = getArray(f6h5Dom);
		var f6h4Dom = getClassName('f6h4');
		var f6h4Doms = getArray(f6h4Dom);
		var f6h3Dom = getClassName('f6h3');
		var f6h3Doms = getArray(f6h3Dom);
		var f6h2Dom = getClassName('f6h2');
		var f6h2Doms = getArray(f6h2Dom);
		var f6h11Dom = getClassName('f6h11');
		var f6h11Doms = getArray(f6h11Dom);
		var f6h12Dom = getClassName('f6h12');
		var f6h12Doms = getArray(f6h12Dom);
		var f6h13Dom = getClassName('f6h13');
		var f6h13Doms = getArray(f6h13Dom);
		var f6h14Dom = getClassName('f6h14');
		var f6h14Doms = getArray(f6h14Dom);

	// 鼠标移入时，下一页按钮显示的节点获取
		var f4aNextDoms = getArray(arrnext2Dom);
		var f4aPreDoms = getArray(arrpre2Dom);
		var f4Doms = getArray(f4Dom);

	// banner轮播图部分节点获取
		var bannerDom = getClassName('section-banner')[0];
		var txtasDom = getClassName('txt-a');
		var txtaDoms = getArray(txtasDom);
		var bnListsDom = getClassName('ban-list');
		var bnListDoms = getArray(bnListsDom);
		var hdListsDom = getClassName('header-list');
		var hdListDoms = getArray(hdListsDom);
		var boxaDom = getClassName('box-a');
		var boxaDoms = getArray(boxaDom);

	//热播推荐部分节点获取
		var f3changeDom = getClassName('f3change')[0];
		var f3liDom = getClassName('f3li');
		var f3liDoms = getArray(f3liDom);
		var f3ulDom = getClassName('f3ul')[0];
		var num2 = 0;
		f3changeDom.addEventListener('click',function(ev){
			// f3liDoms[num2].style['margin-left'] = 0;
			// alert(num2);
			num2++;
			if (num2 > 2) {
				num2 = 0;
			}
			f3ulDom.style['margin-left'] = -1*num2*1250+'px';
			// f3ulDom.style['transition'] = 'all .6s ease';
		},false);

	//猜你喜欢部分节点获取
		var num3 = 0;
		var f11changeDom = getClassName('f11change')[0];
		var f11ulDom = getClassName('f11ul')[0];
		f11changeDom.addEventListener('click',function(ev){
			num3++;
			if (num3 > 2) {
				num3 = 0;
			}
			f11ulDom.style['margin-left'] = -1*num3*1250+'px';
			// f11ulDom.style['transition'] = 'all .6s ease';
		},false);

	//返回顶部节点获取
		var returntopDom = getClassName('returntop')[0];
		document.body.addEventListener('mousewheel',function(ev){
			var y = window.pageYOffset;
			var _y = ev.clientY;
			if(_y >= y){
				returntopDom.style.bottom = -100+'px';
				// returntopDom.style.transition = 'all .4s ease';
			}else{
				returntopDom.style.bottom = 100+'px';
				// returntopDom.style.opacity = 1;
				returntopDom.style.transition = 'all .6s ease';
			}
		},false);

		// var topobj = {
		// 	v_y: 5,
		// 	a: 5
		// }
		// function(obj){
		// 	var v_y = obj.v_y;
		// 	var a = obj.a;

		// };

		returntopDom.addEventListener('click',function(ev){
			// window.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			// document.documentElement.pageYOffset = 0;
			// document.documentElement.clientY = 0;
			
			returntopDom.style.transition = 'all 1s ease';
			// var top = window.pageYOffset;
			// var _top = ev.clientY;
			// if(_top > top){
			// 	returntopDom.style.bottom = -100+'px';
			// 	// returntopDom.style.transition = 'all .4s ease';
			// }else{
			// 	top = 0;
			// }
		},false);

	//现场部分节点获取
		var f4nextDom = getClassName('f4next')[0];
		var f4preDom = getClassName('f4pre')[0];
		var f4ulDom = getClassName('f4ul')[0];
		var num4 = 0;
		f4nextDom.addEventListener('click',function(ev){
			num4++;
			if (num4 !== 0) {
				f4preDom.style.display = 'block';

			}
			if (num4 >= 2) {
				num4 = 2;
				f4nextDom.style.display = 'none';
			}
			f4ulDom.style['margin-left'] = -1*num4*1250 + 'px';
			f4ulDom.style['transition'] = 'all .6s ease';
		},false);

		f4preDom.addEventListener('click',function(ev){
			num4--;
			if (num4 !== 0) {
				f4preDom.style.display = 'block';

			}
			if (num4 <= 0) {
				num4 = 0;
				f4preDom.style.display = 'none';
			}
			f4ulDom.style['margin-left'] = -1*num4*1250 + 'px';
			f4ulDom.style['transition'] = 'all .6s ease';
		},false);

	//官方合作专区部分节点获取
		var f9nextDom = getClassName('f9next')[0];
		var f9preDom = getClassName('f9pre')[0];
		var f9ulDom = getClassName('f9ul')[0];
		var num9 = 0;
		f9nextDom.addEventListener('click',function(ev){
			num9++;
			if (num9 !== 0) {
				f9preDom.style.display = 'block';

			}
			if (num9 >= 2) {
				num9 = 2;
				f9nextDom.style.display = 'none';
			}
			f9ulDom.style['margin-left'] = -1*num9*1250 + 'px';
			f9ulDom.style['transition'] = 'all .6s ease';
		},false);

		f9preDom.addEventListener('click',function(ev){
			f9ulDom.style['margin-right'] = -1*num9*1250 + 'px';
			f9ulDom.style['transition'] = 'all .6s ease';
		},false);

//首页菜单栏点击效果
	// f1aDoms.forEach(function(e,i){
	// 	e.addEventListener('click',function(ev){
	// 		f1aDoms.forEach(function(e,i){
	// 			e.className = e.className.replace(' active1','');
	// 			f1ulDom.style['margin-left'] = -1*1470 + 'px';
	// 			f1ulDom.style['transition'] = 'all .6s ease';
	// 		});
	// 		e.className += ' active1';
	// 	},false);
	// });

// 娱乐菜单栏点击效果
	//娱乐部分的各个节点获取
		var f2ulDom = getClassName('f2ul')[0];
		var f2aDom = getClassName('f2a');
		var f2aDoms = getArray(f2aDom); 
		var f2nextDom = getClassName('f2next')[0];
		var f2preDom = getClassName('f2pre')[0];
		var num22 = 0;
		f2aDoms.forEach(function(e,i){
			e.addEventListener('click',function(ev){
				f2aDoms.forEach(function(e,i){
					e.className = e.className.replace(' active1','');
					
					f2ulDom.style['transition'] = 'all .6s ease';
				});
				e.className += ' active1';
				f2ulDom.style['margin-left'] = -1*i*1250 + 'px';
				num22 = i;
			},false);
		});

		f2nextDom.addEventListener('click',function(ev){
				num22++;
				if (num22 !== 0) {
					f2preDom.style.display = 'block';

				}
				if (num22 >= 2) {
					num22 = 2;
					f2nextDom.style.display = 'none';
				}
				f2ulDom.style['margin-left'] = -1*num22*1250 + 'px';
				f2ulDom.style['transition'] = 'all .6s ease';
			},false);

		f2preDom.addEventListener('click',function(ev){
				num22--;
				if (num22 !== 0) {
					f2nextDom.style.display = 'block';

				}
				if (num22 <= 0) {
					num22 = 0;
					f2preDom.style.display = 'none';
				}
				f2ulDom.style['margin-left'] = -1*num22*1250 + 'px';
				f2ulDom.style['transition'] = 'all .6s ease';
			},false);

// 鼠标移入时，下一页按钮显示
	f4Doms.forEach(function(e,i){
		e.addEventListener('mouseenter',function(ev){
			f4aNextDoms[i].style.display = 'block';
		},false);
		e.addEventListener('mouseleave',function(ev){
			f4aNextDoms[i].style.display = 'none';
			f4aPreDoms[i].style.display = 'none';
		},false);
	});

//头部部分
	//header头部部分
	// wraListDom.addEventListener('mouseover',function(ev){
	// 	wraListDom.style['background-color'] = '#222';
	// 	// hdItemDom.style.height = 'auto';
	// 	// hdItemDom.style.transition = 'height .6s ease';
	// },false);
	// wraListDom.addEventListener('mouseout',function(ev){
	// 	wraListDom.style['background-color'] = 'transparent';
	// },false);

//搜索栏js
	searchinputDom.addEventListener('focus',function(){
		searchitemDom.style.display = 'block';
	},false);
	searchinputDom.addEventListener('blur',function(){
		searchitemDom.style.display = 'none';
	},false);

//banner轮播图
	var num1 = 0;
	txtaDoms.forEach(function(e,i){
		e.addEventListener('mouseover',function(ev){
			txtaDoms.forEach(function(e,i){
				e.className = e.className.replace(' action','');
				bnListDoms[i].className = bnListDoms[i].className.replace(' active','');
			});
			e.className += ' action';
			bnListDoms[i].className += ' active';
			num1 = i;
			},false);
		});
	//banner轮播图--定时器
	var timer = function(){
		num1++;
		if(num1 > txtaDoms.length-1){
			num1 = 0;
		}
		txtaDoms.forEach(function(e,i){
				e.className = e.className.replace(' action','');
				bnListDoms[i].className = bnListDoms[i].className.replace(' active','');
			});
		txtaDoms[num1].className += ' action';
		bnListDoms[num1].className += ' active';
	}
	var timehandle = setInterval(timer,2000);
	//当鼠标移入时，停止定时器（清楚定时器）
	bannerDom.addEventListener('mouseenter',function(ev){
		clearInterval(timehandle);
	},false);
	// 当鼠标移走时，定时器正常工作
	bannerDom.addEventListener('mouseleave',function(ev){
		timehandle = setInterval(timer,2000);
	},false);

//首播里面的轮播
	var ulf1Dom = getClassName('ulf1')[0];
	var _index = 0;
	// f10liDoms.forEach(function(e,i){
	// 	arrnext1Dom.addEventListener('click',function(ev){
	// 		e.style['margin-left'] = -1*i*470 + 'px';
	// 		e.style['transition'] = 'all .6s ease';
	// 	},false);
	// 	arrpre1Dom.addEventListener('click',function(ev){
	// 		e.style['margin-left'] = 1*i*470 + 'px';
	// 		e.style['transition'] = 'all .6s ease';
	// 	},false);
	// });
	arrnext1Dom.addEventListener('click',function(ev){

		// ulf1Dom.style['margin-left'] = -1*470 + 'px';
		// ulf1Dom.style['transition'] = 'all .6s ease';
		f10liDoms.forEach(function(e,i){
			_index++;
			if (_index > 1) {
				_index = 0;
			}
			e.style['margin-left'] = -1*i*470 + 'px';
			e.style['transition'] = 'all .6s ease';
		});
	},false);

	arrpre1Dom.addEventListener('click',function(ev){
		f10liDoms.forEach(function(e,i){
			_index--;
			if (_index <= 0) {
				_index = 1;
			}
			e.style['margin-left'] = -1*i*470 + 'px';
			e.style['transition'] = 'all .6s ease';
		});
	},false);

	setInterval(function(){
		_index++;
		if (_index > 1) {
			_index = 0;
		}
		f10liDoms.forEach(function(e,i){
			e.style['display'] = 'none';
			e.style['transition'] = 'all .6s ease';
		});
		f10liDoms[_index].style['display'] = 'block';
		f10liDoms[_index].style['transition'] = 'all .6s ease';
	},1500);

// 音悦V榜    自制节目部分
	f6div5Doms.forEach(function(e,i){
		f6div5Doms[0].style.height = '192px';
		f6img5Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div5Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h5Doms[i].style.color = "#333";
				f6img5Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h5Doms[i].style.color = "#52e2c0";
			f6img5Doms[i].style.display = 'block';
		},false);
	});

	f6div4Doms.forEach(function(e,i){
		f6div4Doms[0].style.height = '192px';
		f6img4Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div4Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h4Doms[i].style.color = "#333";
				f6img4Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h4Doms[i].style.color = "#52e2c0";
			f6img4Doms[i].style.display = 'block';
		},false);
	});

	f6div3Doms.forEach(function(e,i){
		f6div3Doms[0].style.height = '192px';
		f6img3Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div3Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h3Doms[i].style.color = "#333";
				f6img3Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h3Doms[i].style.color = "#52e2c0";
			f6img3Doms[i].style.display = 'block';
		},false);
	});

	f6div2Doms.forEach(function(e,i){
		f6div2Doms[0].style.height = '192px';
		f6img2Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div2Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h2Doms[i].style.color = "#333";
				f6img2Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h2Doms[i].style.color = "#52e2c0";
			f6img2Doms[i].style.display = 'block';
		},false);
	});

	f6div11Doms.forEach(function(e,i){
		f6div11Doms[0].style.height = '192px';
		f6img11Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div11Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h11Doms[i].style.color = "#333";
				f6img11Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h11Doms[i].style.color = "#52e2c0";
			f6img11Doms[i].style.display = 'block';
		},false);
	});

	f6div12Doms.forEach(function(e,i){
		f6div12Doms[0].style.height = '192px';
		f6img12Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div12Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h12Doms[i].style.color = "#333";
				f6img12Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h12Doms[i].style.color = "#52e2c0";
			f6img12Doms[i].style.display = 'block';
		},false);
	});

	f6div13Doms.forEach(function(e,i){
		f6div13Doms[0].style.height = '192px';
		f6img13Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div13Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h13Doms[i].style.color = "#333";
				f6img13Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h13Doms[i].style.color = "#52e2c0";
			f6img13Doms[i].style.display = 'block';
		},false);
	});

	f6div14Doms.forEach(function(e,i){
		f6div14Doms[0].style.height = '192px';
		f6img14Doms[0].style.display = 'block';
		e.addEventListener('mouseover',function(ev){
			f6div14Doms.forEach(function(e,i){
				e.style.height = '73px';
				e.style['border-top'] = '1px solid #f4f4f4';
				f6h14Doms[i].style.color = "#333";
				f6img14Doms[i].style.display = 'none';
			});
			e.style.height = '192px';
			e.style['border-top'] = 'none';
			f6h14Doms[i].style.color = "#52e2c0";
			f6img14Doms[i].style.display = 'block';
		},false);
	});

//
	// f3liDoms.forEach(function(e,i){
	// 		f3liDoms[0].style.display = 'block';
	// 		f3liDoms[1].style.display = 'block';
	// 		f3liDoms[2].style.display = 'block';
	// 		f3liDoms[3].style.display = 'block';
	// 		f3liDoms[4].style.display = 'block';
	// 	});
	// f3changeDom.addEventListener('click',function(){
	// 	f3liDoms.forEach(function(e,i){
	// 		e.style.display = 'block';
	// 	});
	// },false);











},false);