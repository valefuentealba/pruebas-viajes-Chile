$(document).ready(function() {
    $("a").click(function() {
        var gato = this.hash;
        $("html, body").animate({
                scrollTop: $(gato).offset().top - 50
            },
            800
        );
    });
    $(nav).scrollTop(function() {
        var color = this.bash;
        $(color).body("#ffffff").color("#000000");
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})