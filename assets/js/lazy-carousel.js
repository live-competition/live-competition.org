// Helps with lazy loading for Bootstrap carousels
// Credits: https://coderwall.com/p/6qaeya/lazy-carousel-in-bootstrap

$(function() {
    return $(".carousel.lazy").on("slide.bs.carousel", function(ev) {
        var lazy;
        lazy = $(ev.relatedTarget).find("img[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
    });
});
