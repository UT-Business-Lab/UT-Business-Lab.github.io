$(function(){
   $(".next-button").click(function(){
       $(".main-logo").fadeOut("slow");
       $(".next-button").fadeOut("slow", function(){
           $(".main-menu").fadeIn("slow");
       });
   }
   );

});