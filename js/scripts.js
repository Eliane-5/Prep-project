// user interface logic

$(document).ready(function(){
    $(".text").hide();
    $(".container").css({
        opacity:1
    });
    $(".container").hover(function(){
    $(this).css({opacity:.8});
    $(".text").fadeIn();
    },function(){
        $(this).stop().css({opacity:1})
        $(".text").fadeOut();
    }
    )
})

