/*
 * Author: Alvin Tang
 * Requires jQuery.
*/

// For background images, setting data-image
$(document).ready(function() {
    $('.hero-bg-img').each(function(pos, obj) {
        var image = obj.getAttribute("data-image");
        $(obj).css("background-image", "url('" + image + "')");
    });

    // Enable tooltip for all those with data-toggle="tooltip" attribute
    $('[data-toggle="tooltip"]').tooltip()

});
