$(document).ready(function () {
	var slide = $(".slide"); //slide객체
	var boxWidth = $(".slide .box").css("width").replace("px", "");  
	var boxLength = $(".slide .box").length; 
	var totalWidth = boxWidth * boxLength + "px"; 
	slide.css("width", totalWidth) //전체 넓이값을 설정해준다.
	var browserWidth = $(window).width(); 
	var lengthNum = $(".slide .box").length;
    var maxL = parseInt(totalWidth)-browserWidth+100; 
    //transform:matrix(scaleX, skewX, skewY, scaleY, translateX, translateY)
	function wheelMove (e) {
		var evt = window.event || e; //삼항연산자로 이벤트객체저장 
        var now = slide.css("transform"); //현재 transform 속성을 가져온다.
        now = now.split(",");  //,을 기준으로 배열로 변환
        now = parseInt(now[4]); //transform:matrix를 쉼표 4번째 다음값=x이동값
		if ( evt.wheelDelta > 0) { //휠을 아래로할때
			var move = now - 200; // -200px씩 이동
            if(move>-maxL){
            slide.css({
                transform : "matrix(1, 0, 0, 1," + move + ", 0)" //move값만큼 이동한다.
            }); 
            }
		} else if ( evt.wheelDelta < 0) { //휠을 위로할때
			var move = now + 200;   //+200씩 이동
            if(move<-100){
                slide.css({
                    transform : "matrix(1, 0, 0, 1," + move + ", 0)" 
                }); 
            }
		}
	}
	$("html").on("mousewheel DOMMouseScroll", function (e) { 
		wheelMove (e);  //파이어폭스 DOMMouseScroll이벤트, mousewheel이벤트를 적용
	});
});