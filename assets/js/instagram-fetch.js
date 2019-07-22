// To be depreciated, using old Instagram API
// Read more: https://developers.facebook.com/blog/post/2018/01/30/instagram-graph-api-updates/

$(document).ready(function() {

    var requestMedia = $.ajax({
        type: "GET",
        url: "https://us-central1-live-competition-org.cloudfunctions.net/get-instagram-media",
    });

    requestMedia.done(function(response) {
        $("#instagramFetchLoading").hide();
        var counter = 0;
        response.map(function(post) {
            // We only want 6 posts displayed
            if (counter <= 6) {
                counter = counter + 1;
                var postHtml = "<a href=\"" +
                    post.link + "\" target=\"_blank\"><img src=\"" +
                    post.images.standard_resolution.url +
                    "\" class=\"img-fluid img-thumbnail\" /></a>";
                $("#instagramFeed .ig-post:nth-child(" + counter.toString() + ")").html(postHtml);
            }
        });
        $("#instagramFeed").show();
    });

    requestMedia.fail(function() {
        $("#letsGetSocial").hide();
    });

});
