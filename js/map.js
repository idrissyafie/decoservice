var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 3.553285, lng:103.4311212},
          zoom: 11
        });

        // Add a marker to the map
        var marker = new google.maps.Marker({
          position: {lat: 3.5455, lng:103.435},
          title: 'Our Location',
          map: map
        });

        var infowindow = new google.maps.InfoWindow({
          content: 'Our Location: Evonyee'
        });
        infowindow.open(map, marker);
      }
