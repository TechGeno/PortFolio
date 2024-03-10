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

    // Top toggle
    document.querySelector('.name').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page when the name is clicked
    });
});