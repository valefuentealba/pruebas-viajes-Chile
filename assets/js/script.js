//Fondo scroll a navbar
$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
        $(".navbar").css({
            "background": "#17a2b8"
        })
    } else {
        $(".navbar").css({
            "background": "transparent"
        })
    }

})

//Color navbar
$(".navbar-toggler").click(function() {
    $(".navbar").toggleClass('bg-info');
});