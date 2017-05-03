$(document).ready(function() {


    function toggleMenu() {
        if($(".navbar_menu").hasClass("menuOn")){
            $(".navbar_menu").css("display", "none").removeClass("menuOn");
        }
        else{
            $(".navbar_menu").css("display", "inline").addClass("menuOn");
        }

    }

    $("#toggle-menu").on("click", toggleMenu);

});
