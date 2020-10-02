$(document).ready(function () {
  $(`body.html`).animate(
    {
      scrollTop: "0px",
    },
    300
  );
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".irArriba").slideDown(300);
  } else {
    $(".irArriba").slideUp(300);
  }
});
