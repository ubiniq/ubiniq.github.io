$(document).ready(function(){
    var win_w = $(window).width();
    var maxL = win_w*5*-1;
    var sc=0;
    /*
    $(".page").each(function(index){
       $(this).attr("data-page", win_w*index); 
    });
    $(".page").on("mousewheel", function(e){
   //마우스 휠로 한 번 스크롤 할 때 한 페이지씩 스크롤링
    var curPage = parseInt($(this).attr("data-page"));
    if(e.originalEvent.wheelDelta >= 0){
        $(".container").stop().animate({scrollLeft:curPage - win_w});
        return false;
    } else {
        $(".container").stop().animate({scrollLeft:curPage + win_w});
        return false;
    }
    */
    $(window).on("mousewheel", function(e){
        var lt = parseInt($(".wrap").css("left"));
        if(e.originalEvent.wheelDelta >= 0 && lt>maxL){
            sc=sc-win_w;
            $(".wrap").stop().animate({"left":sc+"px"}, 200);
        } else if(lt<0) {
            sc=sc+win_w;
            $(".wrap").stop().animate({"left":sc+"px"}, 200);
        }    
    });    
});