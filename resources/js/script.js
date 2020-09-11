$(document).ready(function () {
    $('.js-section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    $('.js-scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.section-plans').offset().top})
    })
    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.section-features').offset().top})
    })

    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated animate__pulse');
    }, {
        offset: '50%'
    })
    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated animate__fadeInUp');
    }, {
        offset: '50%'
    })
    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'
    })
    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated animate__pulse');
    }, {
        offset: '50%'
    })
});