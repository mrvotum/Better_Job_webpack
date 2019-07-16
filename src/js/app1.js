$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.links').toggleClass('links_active');
	$('.menu-btn').toggleClass('menu-btn_active');
})

$('.links_btn').on('click', function(e) {
	$('.links_active').toggleClass('links_active');
	$('.menu-btn_active').toggleClass('menu-btn_active');
})



// function slide_left(){
//     if (slide_1.checked) {
//         document.getElementById('slide_5').checked=true;
//     } else if (slide_2.checked) {
//         document.getElementById('slide_1').checked=true;
//     } else if (slide_3.checked) {
//         document.getElementById('slide_2').checked=true;
//     } else if (slide_4.checked) {
//         document.getElementById('slide_3').checked=true;
//     } else if (slide_5.checked) {
//         document.getElementById('slide_4').checked=true;
//     }
// }

// function slide_right(){
//     if (slide_1.checked) {
//         document.getElementById('slide_2').checked=true;
//     } else if (slide_2.checked) {
//         document.getElementById('slide_3').checked=true;
//     } else if (slide_3.checked) {
//         document.getElementById('slide_4').checked=true;
//     } else if (slide_4.checked) {
//         document.getElementById('slide_5').checked=true;
//     } else if (slide_5.checked) {
//         document.getElementById('slide_1').checked=true;
//     }
// }









// var startPoint={};
// var nowPoint;
// var ldelay;
// document.addEventListener('touchstart', function(event) {
// 	event.preventDefault();
// 	event.stopPropagation();
// 	startPoint.x=event.changedTouches[0].pageX;
// 	startPoint.y=event.changedTouches[0].pageY;
// 	ldelay=new Date();
// }, false);

// /*Ловим движение пальцем*/
// document.addEventListener('touchmove', function(event) {
// 	event.preventDefault();
// 	event.stopPropagation();
// 	var otk={};
// 	nowPoint=event.changedTouches[0];
// 	otk.x=nowPoint.pageX-startPoint.x;
// 	/*Обработайте данные*/
// 	/*Для примера*/
// 	if(Math.abs(otk.x)>200){
// 		if(otk.x<0){/*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/}
// 		if(otk.x>0){/*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/}
// 		startPoint={x:nowPoint.pageX,y:nowPoint.pageY};
// 	}
// }, false);

// /*Ловим отпускание пальца*/
// document.addEventListener('touchend', function(event) {
// 	var pdelay=new Date();
// 	nowPoint=event.changedTouches[0];
// 	var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
// 	var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
// 	if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime()-ldelay.getTime())<200) {
// 		if (xAbs > yAbs) {
// 			if (nowPoint.pageX < startPoint.x){/*СВАЙП ВЛЕВО*/}
// 			else{/*СВАЙП ВПРАВО*/}
// 		} else {
// 		if (nowPoint.pageY < startPoint.y){/*СВАЙП ВВЕРХ*/}
// 		else{/*СВАЙП ВНИЗ*/}
// 		}
// 	}
// }, false);






// handleTouchStart =function(e) {
//     xDown = e.touches[0].clientX;
//     yDown = e.touches[0].clientY;
// };

// handleTouchMove = function(e) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = e.touches[0].clientX;
//     var yUp = e.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;

//     if(Math.abs( xDiff )+Math.abs( yDiff )>150)
//       if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
//         if ( xDiff > 0 )
//             alert('лево');
//          else
//             alert('право');
//       } else {
//         if ( yDiff > 0 )
//             alert('вверх');
//          else
//             alert('вниз');
//       }
//     xDown = null;
//     yDown = null;
// };

// var xDown = null;
// var yDown = null;

// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);
