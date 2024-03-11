$(document).ready(function () {
    // Smooth scrolling for all links starting with #
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Add click event listener to About button
    $('#aboutBtn').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var aboutSection = $('#aboutSection');
        if (aboutSection.length) {
            $('html, body').stop().animate({
                scrollTop: aboutSection.offset().top
            }, 1000);
        }
    });

    // Nav toggler
    $('.nav-toggler').on('click', function () {
        $('.aside').toggleClass('open');
    });

    // Typing animation
    var typingIndex = 0;
    var typingTexts = ['Student', 'Developer', 'Designer'];
    setInterval(function () {
        $('.typing').fadeOut(function () {
            $(this).text(typingTexts[typingIndex]).fadeIn();
        });
        typingIndex = (typingIndex + 1) % typingTexts.length;
    }, 2000);
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        msg: document.getElementById("msg").value,
        subject: document.getElementById("subject").value
    };

    const serviceID = "service_qxwq52j";
    const templateID = "template_g1g0l18";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("msg").value = "";
            document.getElementById("subject").value = "";
            console.log(res);
            alert("Your message has been sent successfully");
        })
        .catch((err) => console.error("Error sending email:", err));
}


function openEmail() {
    var email = 'harshasri910@gmail.com';
    window.location.href = 'mailto:' + email;
}

function openLocation() {
    var location = 'MNNIT, Prayagraj';
    var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(location);
    window.open(mapsUrl, '_blank');
}