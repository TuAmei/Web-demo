window.addEventListener('DOMContentLoaded',function(ev){
	var sunDom = document.getElementsByClassName('boxSun')[0];
	var boxDom = document.getElementsByClassName('box')[0];
	boxDom.style['background-color'] = bgc();
	sunDom.style['background-color'] = bgc();
	//随机获取背景颜色
	function bgc() {
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		return 'rgb('+r+','+g+','+b+')';
	};
	 	var leftNum = 5;             //设置小球每次向左运动的像素值
        var topNum = 5;              //设置小球每次向下运动的像素值
        var  leftMax = document.documentElement.clientWidth-boxDom.clientWidth;             //浏览器窗口宽度减去小球的宽度等于小球能运动到的最大左边位置，下一行代码同理。
        var  topMax = document.documentElement.clientHeight-boxDom.clientHeight;
         //当浏览器窗口发生变化时，实时获取浏览器窗口的宽高
        leftMax = document.documentElement.clientWidth-boxDom.clientWidth;
        topMax = document.documentElement.clientHeight-boxDom.clientHeight;
     
        setInterval(function(){              //为小球的运动新建一个计时器
            var Left = boxDom.offsetLeft+leftNum,    //小球每次运动完之后，距离浏览器左边边框的距离：上一次距离边框的距离加上这次运动的距离，下一行代码同理
                Top = boxDom.offsetTop+topNum;
            //判断当小球向左移动的位置大于之前限定的最大距离或者小于0时，也就是超出浏览器窗口的左右边框时，
            //使他运动的方向取反leftNum = -leftNum，下面Top的判断同理。
            if(Left>=leftMax){               
                Left = leftMax;
                leftNum = -leftNum;
               boxDom.style.backgroundColor=bgc();     //传参数到下面的获取随机颜色的function
            }else if(Left<=0){
                Left = 0;
                leftNum = -leftNum;
               boxDom.style.backgroundColor=bgc();
            };
            if(Top>=topMax){
                Top = topMax;
                topNum = -topNum;
               boxDom.style.backgroundColor=bgc();
            }else if(Top<=0){
                Top = 0;
                topNum = -topNum;
               boxDom.style.backgroundColor=bgc();
            };
            boxDom.style.left = Left+'px';      
            boxDom.style.top = Top+'px';

        },30);                        //小球每次
},false);