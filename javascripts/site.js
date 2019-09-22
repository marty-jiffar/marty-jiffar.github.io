$(document).ready(function() {
    
    $.when($("#namebox").fadeIn(1000))
    .done(function() {
        $(".fixed-nav-bar").fadeIn(300);
        $("#name").fadeIn(800);
        $("#resume").fadeIn(900);
        $("#projects").fadeIn(1500);
        $("#about").fadeIn(3000);
        $("#contact").fadeIn(3500);
    });
    
    $("#projects").click(function() {
        $.when($(".homepage").fadeOut(700))
        .done(function() {
            $(".projects").fadeIn(700)
        });
    });
    
    $("#about").click(function() {
        $.when($(".homepage").fadeOut(700))
        .done(function() {
            $(".about").fadeIn(700)
        });
    });
    
    $("#contact").click(function() {
        $.when($(".homepage").fadeOut(700))
        .done(function() {
            $(".contact").fadeIn(700)
        });
    });

});