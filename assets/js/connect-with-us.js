$(document).ready(function() {

    // Enable tooltip for all those with data-toggle="tooltip" attribute
    $('[data-toggle="tooltip"]').tooltip()

    // Contact form functionality
    // Note that all validation should be done client side, other error messages will prompt server error alert
    var emailForm = document.getElementById('contactForm');
    emailForm.addEventListener('submit', function(event) {
        // If the email form is valid on submission
        if(emailForm.checkValidity() === true) {
            // Prevent default action and send ajax request to application central
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "https://us-central1-live-competition-org.cloudfunctions.net/process_email_form",
                data: $("#contactForm").serialize(),
                success: function() {
                    $("#serverError").hide();
                    $("#messageSent").slideDown();
                    // Disable the contact form entirely
                    $("#submitContactForm").addClass("disabled");
                    $("#contactForm :input").prop("disabled", true);
                },
                error: function() {
                    $("#messageSent").hide();
                    $("#serverError").slideDown();
                }
            });
            // Remove .was-validated stuff
            emailForm.classList.remove('was-validated');
        } else {
            // If the form was not valid on submission, add .was-validated and let Livestrap handle the rest
            event.preventDefault();
            event.stopPropagation();
            // Hide alerts if another email was sent
            // $("#messageSent").slideUp();
            // $("#serverError").slideUp();
            emailForm.classList.add('was-validated');
        }
    });


});

function initMap() {

    // IC Building Coordinates
    var icBuilding = {lat: 43.786770, lng: -79.189580};

    // Init the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: icBuilding,
        zoom: 14,
        disableDefaultUI: true
    });

    // Marker of IC Building
    var marker = new google.maps.Marker({
        position: icBuilding,
        map: map,
        icon: "https://liveportal2019.blob.core.windows.net/static/branding/favicon-32x32.png"
    });

}
