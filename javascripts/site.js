$(document).ready(function() {
    
    $("#projects").click(function() {
        $.when($(".homepage").fadeOut(700))
        .done(function() {
            $(".projects").fadeIn(700)
        });
    });
    
    $("#about").click(function() {
        $(".homepage").css('display', 'none');
        $(".about").css('display', 'block');
        
    });
    
    $("#contact").click(function() {
        $(".homepage").css('display', 'none');
        $(".contact").css('display', 'block');
    });

});