$(document).ready(function() {
    
    $("#Projects").click(function() {
        $(".homepage").css('display', 'none');
        $(".Projects").css('display', 'block');
    });
    
    $("#AboutMe").click(function() {
        $(".homepage").css('display', 'none');
        $("#About").css('display', 'block');
        
    });
    
    $("#Contact").click(function() {
        $(".homepage").css('display', 'none');
        $(".Contact").css('display', 'block');
    });

});