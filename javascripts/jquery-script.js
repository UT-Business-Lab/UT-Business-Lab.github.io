$(function(){
    $(".cover-image img").fadeIn("slow");
    $(".main-logo").fadeIn("slow");
    $(".next-button").fadeIn("slow");
    $(".next-button").click(function(){
        $(".main-logo").fadeOut("slow");
        $(".next-button").fadeOut("slow", function(){
            $(".main-menu").fadeIn("slow");
        });
   }
   );

});