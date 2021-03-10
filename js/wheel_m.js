$(document).ready(function(){
    var win_h = $(window).height();
    var maxL = win_h*5*-1;
    var sc=0;
    
    $(".page").each(function(index){
       $(this).attr("data-page", win_h*index); 
    });
    $(".page").on("mousewheel", function(e){
   //마우스 휠로 한 번 스크롤 할 때 한 페이지씩 스크롤링
    var curPage = parseInt($(this).attr("data-page"));
    if(e.originalEvent.wheelDelta >= 0){
        $(".container").stop().animate({scrolldown:curPage - win_h});
        return false;
    } else {
        $(".container").stop().animate({scrolldown:curPage + win_h});
        return false;
    }
    });
    
//    $(window).on("mousewheel", function(e){
//        var lt = parseInt($(".page").css("top"));
//        if(e.originalEvent.wheelDelta >= 0 && lt>maxL){
//            sc=sc-win_h;
//            $(".page").stop().animate({"top":sc+"px"}, 200);
//        } else if(lt<0) {
//            sc=sc+win_h;
//            $(".page").stop().animate({"top":sc+"px"}, 200);
//        }    
//    });    
});