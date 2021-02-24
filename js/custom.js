$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();

    if (scroll < 100) {
        $(".navbar").removeClass("sticky");
    } else {
        $(".navbar").addClass("sticky");
    } // Back to top button


    if ($(this).scrollTop() > 150) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
}); // Activate smooth scroll on page load with hash links in the url

$(document).ready(function () {
    if (window.location.hash) {
        var initial_nav = window.location.hash;

        if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
                scrollTop: scrollto
            }, 800);
        }
    }
});
"use strict";

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
    return false;
});

$(".banner-slider").slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }
    ]
});

$(".product-slider").slick({
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".client-slider").slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});