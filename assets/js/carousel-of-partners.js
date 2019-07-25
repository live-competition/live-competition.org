$(document).ready(function() {
    var partnerCarousel = $('.owl-carousel');
    partnerCarousel.owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSmooth: 1000,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});
