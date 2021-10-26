$('document').ready(function(){
    $("#buy-click").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".go-sec3").offset().top - 80
        }, 2000);
    })
})

$('document').ready(function(){
    $("#call-click").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("footer").offset().top - 80
        }, 2000);
    })
})