$('#carouselPartners').slick({
    centerMode: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    draggable: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            draggable: true,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplaySpeed: 1000
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            draggable: true,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
        }
        },
        {
        breakpoint: 480,
        settings: "unslick"
        }
    ]
});
