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

ScrollReveal().reveal('.application', { origin: 'right', distance: '0px', delay: 200 });



// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
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



// Form application
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const phone = form.querySelector("#phone").value;
  const twitter = form.querySelector("#twitter").value;
  const instagram = form.querySelector("#instagram").value;

  const formData = {
    username: "Cold Agency Bot",
    avatar_url: "https://i.ibb.co/QNsrCBK/logo-2.png",
    attachments: [],
    content: null,
    embeds: [{
      title: "**Model Application**",
      color: 0x0ABAFD,
      description: "A new application form has arrived!",
      image: {
        "url": "https://i.ibb.co/KjTsm4p/footer-gradient.png"
      },
      thumbnail: {
        "url": "https://i.ibb.co/QNsrCBK/logo-2.png"
      },
      fields: [
        {
          name: "Name:",
          value: name
        },
        {
          name: "Email:",
          value: email
        },
        {
          name: "Phone Number:",
          value: phone
        },
        {
          name: "Twitter Handle:",
          value: twitter
        },
        {
          name: "Instagram Handle:",
          value: instagram
        }
      ]
    }]
  };

  const webhookURL = "https://discord.com/api/webhooks/1159969711417729124/O3IrSO-OQ0wvchpWbQx7KQqp2jgbKEzjeuk6oEu6Qg9TnrUtmjlP7_hajCgPs7sQzei4";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(response => {
    if (response.status === 204) {
      alert("Application submitted successfully.");
      console.log("Application submitted successfully.");
      form.reset();
    }
  }).catch(error => {
    alert("Application could not be sent, please try again later.");
    console.log("Application could not be sent, please try again later.");
  });
});