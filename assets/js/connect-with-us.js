$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

var icBuilding = {lat: 43.786770, lng: -79.189580};
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: icBuilding,
    zoom: 14,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: icBuilding,
    map: map,
    icon: "https://liveportal2019.blob.core.windows.net/static/branding/favicon-32x32.png"
  });
}