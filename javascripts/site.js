$(document).ready(function() {
    function load_homepage(){
        $.when($("#homepage").css("display", "flex").hide().fadeIn(1000))
        .done(function() {
            $("#namebox").css("display", "flex").hide().fadeIn(1000)
            $("#fixed-nav-bar").fadeIn(300);
            $("#resume").fadeIn(900);
            $("#projects").fadeIn(1500);
            $("#about").fadeIn(2500);
            $("#contact").fadeIn(2800);
            $("#name").fadeIn(3000);
        });
    };
    
    load_homepage();
    
    function unload_homepage(){
        $("#name").fadeOut(800)
        $("#contact").fadeOut(800);
        $("#about").fadeOut(800);
        $("#projects").fadeOut(800);
        $("#resume").fadeOut(800);
        $("#fixed-nav-bar").fadeOut(800);
        $("#namebox.container").fadeOut(800);
        $("#homepage").fadeOut(1000);
    }
    
    function page_load(page_name){
        $.when(unload_homepage())
        .done(function() {
            $(page_name).fadeIn(1000);
            $(".scroll").fadeIn(1700);
        });
    }
    
    $("#projects").click(function() {
        page_load('.projects');
    });
    
    $("#about").click(function() {
        page_load('.about');
    });
    
    $("#contact").click(function() {
        page_load('.contact');
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
        load_homepage();
    });

});