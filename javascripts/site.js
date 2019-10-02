$(document).ready(function() {
    function load_homepage(){
        $.when($("#homepage").css("display", "flex").hide().fadeIn(1000))
        .done(function() {
            $("#namebox").css("display", "flex").hide().fadeIn(1000)
            $("#fixed-nav-bar").css("display", "flex").hide().fadeIn(300);
            $("#resume").fadeIn(900);
            $("#projects").fadeIn(1500);
            $("#about").fadeIn(2500);
            $("#contact").fadeIn(2800);
            $("#name").css("display", "flex").hide().fadeIn(3000);
        });
    };
    
    load_homepage();
    
    var current_page;
    
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
    
    function page_unload(page_name){
        $(page_name).fadeOut(1000);
    }
    
    $("#projects").click(function() {
        page_load('#projects_cont');
        current_page = '#projects_cont';
    });
    
    $("#about").click(function() {
        page_load('#aboutsection');
        current_page = '#aboutsection';
    });
    
    $("#contact").click(function() {
        page_load('.contact');
        current_page = '.contact';
    });
    
    $("#down.scroll").on('click', function(event) {
        var w = window.innerHeight;
        if (window.pageYOffset >= w && window.pageYOffset < 2 * w) {
            w = w * 2;
        } else if (window.pageYOffset >= 2 * w && window.pageYOffset < 3 * w) {
            w = w * 3;
        } else if (window.pageYOffset >= 3 * w && window.pageYOffset < 4 * w) {
            w = w * 4;
        } else if (window.pageYOffset >= 4 * w && window.pageYOffset < 5 * w) {
            w = w * 5;
        }
        window.scrollTo({ 
            top: w,
            left: 0, 
            behavior: 'smooth' 
        });
    });
    
    $("#home.scroll").on('click', function(event) {
        page_unload(current_page);
        load_homepage();
    });

});