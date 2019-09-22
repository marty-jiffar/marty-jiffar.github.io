$(document).ready(function() {
    
    $.when($("#name").fadeIn(1000))
    .done(function() {
        $("#resume").fadeIn(500);
        $("#projects").fadeIn(1500);
        $("#about").fadeIn(3000);
        $("#contact").fadeIn(4500);
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