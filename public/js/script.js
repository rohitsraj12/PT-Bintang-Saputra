$(document).ready(function () {
  $("#hamberger").click(function () {
    // $(".header__nav").slideToggle();
    $(this).toggleClass("is__active");
    $("#header-nav").slideToggle(400);
    // $("#header-social").slideToggle(400);
  });
});
