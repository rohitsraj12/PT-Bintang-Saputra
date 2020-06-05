$(document).ready(function () {

  $("#hamberger").click(function () {
    $(this).toggleClass("is__active");
    $("#header-nav").slideToggle(400);
  });

  $(".tab__list").click(function(event){
    var attribute = $(this).find("a").attr("href");
    event.preventDefault();
    $(this).parent().find("li").removeClass("tab-active");
    $(this).addClass("tab-active");
    
    $(".course-details-content").children().hide()
    $(attribute).fadeIn();

  })
  
});
