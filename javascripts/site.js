$(document).ready(function() {
    
    function load_homepage(){
        /*
        $.when($("#namebox").fadeIn(1000))
        .done(function() {
            $(".fixed-nav-bar").fadeIn(300);
            $("#bottom").fadeIn(500);
            $("#left").fadeIn(500);
            console.log('left');
            $("#right").fadeIn(500);
            $("#resume").fadeIn(900);
            $("#top").fadeIn(1500);
            console.log("top");
            $("#projects").fadeIn(1500);
            console.log('projects');
            $("#about").fadeIn(2500);
            console.log('about');
            $("#contact").fadeIn(2800);
            $("#name").fadeIn(3000);
            console.log('name');
        });
    }
    
    load_homepage();
    */
    
    $("#projects").click(function() {
        $.when($(".homepage").fadeOut(500))
        .done(function() {
            $(".projects").fadeIn(700);
            $(".scroll").fadeIn(1700);
        });
    });
    
    $("#down.scroll").on('click', function(event) {
        var w = window.innerHeight;
        if (window.pageYOffset >= w && window.pageYOffset < 2 * w) {
            w = w * 2;
        } else if (window.pageYOffset >= 2 * w && window.pageYOffset < 3 * w) {
            w = w * 3;
        }
        window.scrollTo({ 
            top: w,
            left: 0, 
            behavior: 'smooth' 
        });
    });
    
    $("#home.scroll").on('click', function(event) {
        $("div:visible").fadeOut(500);
        load_homepage();
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
            $(".scroll").fadeIn(1700);
        });
    });

});