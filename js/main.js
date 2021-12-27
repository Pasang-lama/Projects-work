$(window).scroll(function(){
    if($(this).scrollTop()> 150)
    {
        $(".nabbar").addClass("stickynavbar")
        $(".logo").addClass("newlogo")
    }
    else{
        $(".nabbar").removeClass("stickynavbar")
        $(".logo").removeClass("newlogo")
    }
})