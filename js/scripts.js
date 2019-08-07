// user interface logic

$(document).ready(function(){
    $(".text").hide();
    $("#care").css({
        opacity:1
    });
    $("#care").hover(function(){
    $(this).css({opacity:.8});
    $(".text").fadeIn();
    },function(){
        $(this).stop().css({opacity:1})
        $(".text").fadeOut();
    }
    )
})

