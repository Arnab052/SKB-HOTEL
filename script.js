$(document).ready(function(){
    $(".menu").click(function(){
        $(".ul-link").toggleClass("ul-link-tggle");
        // $(".nav-book-hotel").slideToggle();
    })
  $(".angle").click(function(){

    $(".chose").slideToggle();
  })
})
AOS.init();