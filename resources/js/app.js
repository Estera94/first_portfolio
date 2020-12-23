$(document).ready(function () {
  $(".about-btn").click(function () {
    $("#content-about").fadeIn("slow");
    $("#content-resume").fadeOut("slow");
    $("#content-projects").fadeOut("slow");
    $("#content-contact").fadeOut("slow");
  });
  $(".resume-btn").click(function () {
    $("#content-about").fadeOut("slow");
    $("#content-resume").fadeIn("slow");
    $("#content-projects").fadeOut("slow");
    $("#content-contact").fadeOut("slow");
  });
  $(".projects-btn").click(function () {
    $("#content-about").fadeOut("slow");
    $("#content-resume").fadeOut("slow");
    $("#content-projects").fadeIn("slow");
    $("#content-contact").fadeOut("slow");
  });
  $(".contact-btn").click(function () {
    $("#content-about").fadeOut("slow");
    $("#content-resume").fadeOut("slow");
    $("#content-projects").fadeOut("slow");
    $("#content-contact").fadeIn("slow");
  });
});
