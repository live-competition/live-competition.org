function initMap() {

    // Toronto Marriott City Centre Hotel Coordinates
    var hotel = {lat: 43.641972, lng: -79.389503};

    // Init the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: hotel,
        zoom: 17,
        disableDefaultUI: true
    });

    // Marker of Hotel Building
    var marker = new google.maps.Marker({
        position: hotel,
        map: map,
        icon: "https://live-competition.org/assets/branding/favicons/favicon-32x32.png"
    });

}
