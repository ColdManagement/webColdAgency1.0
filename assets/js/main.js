// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.hero-content', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.hero-img', { origin: 'right', distance: '0px', delay: 400 });
ScrollReveal().reveal('.about .card-left', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.about .card-right', { origin: 'right', distance: '0px', delay: 400 });
ScrollReveal().reveal('.services-title', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.services-content', { origin: 'right', distance: '0px', delay: 400 });
ScrollReveal().reveal('.feedbacks .feedbacks-title', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.feedbacks .slider', { origin: 'right', distance: '0px', delay: 400 });
ScrollReveal().reveal('.faq .faq-title', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.faq-container', { origin: 'right', distance: '0px', delay: 400 });
ScrollReveal().reveal('.contact', { origin: 'right', distance: '0px', delay: 300 });



// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});



// FAQ section
const faqQuestions = document.querySelectorAll(".faq-container .question");

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== faqQuestion && otherQuestion.classList.contains("active")) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove("active");
        otherQuestion.classList.remove("active");
      }
    });

    const answer = faqQuestion.nextElementSibling;
    answer.classList.toggle("active");
    faqQuestion.classList.toggle("active");
  });
});