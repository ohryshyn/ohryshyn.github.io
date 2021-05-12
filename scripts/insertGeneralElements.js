$(function () {
  $("body").prepend("<header id='header'>");
  $("body").append("<footer id='footer'>");
  $("#header").load("/header.html");
  $("#footer").load("/footer.html");
});
