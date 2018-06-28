    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBt0ybhT7-Ft1QM2BKmSpm1ixLYcSCwxOA",
        authDomain: "firstproject-62f58.firebaseapp.com",
        databaseURL: "https://firstproject-62f58.firebaseio.com",
        projectId: "firstproject-62f58",
        storageBucket: "firstproject-62f58.appspot.com",
        messagingSenderId: "614682014505"

    };
    firebase.initializeApp(config);
    var database = firebase.database();

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: 44.9375,
                lng: -93.2010
            }
        });

        var geocoder = new google.maps.Geocoder();
        
        //call to firebase (reading to database)
        database.ref().on("value", function (snapshot) {
            let temp = [];
            snapshot.forEach(function (each) {
                temp.push(each.val());
            });

            console.log(temp);
            for (var i = 0; i < temp.length; i++) {
                geocodeAddress(geocoder, map, temp[i].EventLocation, temp[i].EventTitle, temp[i].EventDescription)
            }
        })

        function geocodeAddress(geocoder, resultsMap, EventLocation, EventTitle, EventDescription) {
            geocoder.geocode({
                'address': EventLocation,
            }, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
                var infoWindow = new google.maps.InfoWindow({
                    content: '<p>' + EventLocation + '<p>' + '<p>' + EventTitle + '<p>' + '<p>' + EventDescription + '<p>',             
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
        }
    }
