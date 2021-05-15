$(document).ready(function () {
    $(".ham").click(function () {
      $(".menu").hasClass("active")
        ? $(".menu").removeClass("active")
        : $(".menu").addClass("active");
      $(".menu").slideToggle("slow");
    });
  });
  $(document).mouseup(function (e) {
    let container = $("header");
    let menu = $(".menu");
    let ham = $(".ham");
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      menu.hasClass("active")
    ) {
      menu.slideToggle("slow");
      menu.removeClass("active");
      ham.removeClass("active");
    }
  });