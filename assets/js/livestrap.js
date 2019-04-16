/*
 * Custom JS for livestrap components
 * Author: Alvin Tang
 * Requires jQuery.
*/

/*
Hero
Note that this was tested with only one hero in a page.
*/

// For background images, setting data-image
$(document).ready(function() {
    $('.hero-bg-img').each(function(pos, obj) {
        var image = obj.getAttribute("data-image");
       $(obj).css("background-image", "url('" + image + "')");
    });
});

// For background videos, setting data-video