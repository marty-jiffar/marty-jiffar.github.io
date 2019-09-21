$(document).ready(function() {
    
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