function openNav4() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav4() {
    document.getElementById("mySidenav").style.width = "0";
}

jQuery.fn.highlight = function(pat) {
    function innerHighlight(node, pat) {
        var skip = 0;
        if (node.nodeType == 3) {
            var pos = node.data.toUpperCase().indexOf(pat);
            pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
            if (pos >= 0) {
                var spannode = document.createElement('span');
                spannode.className = 'bg-primary text-white';
                var middlebit = node.splitText(pos);
                var endbit = middlebit.splitText(pat.length);
                var middleclone = middlebit.cloneNode(true);
                spannode.appendChild(middleclone);
                middlebit.parentNode.replaceChild(spannode, middlebit);
                skip = 1;
            }
        }
        else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerHighlight(node.childNodes[i], pat);
            }
        }
        return skip;
    }
    return this.length && pat && pat.length ? this.each(function() {
        innerHighlight(this, pat.toUpperCase());
        }) : this;
};

jQuery.fn.removeHighlight = function() {
    return this.find("span.bg-primary").each(function() {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};
Dropzone.autoDiscover = false;
var settings = {
    paramName: "file____", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    parallelUploads: 1, //limits number of files processed to reduce stress on server
    addRemoveLinks: true,
    params: {
         "_token": $('meta[name="csrf-token"]').attr('content'),
         'hello_there': 'testing1111'
    },
    accept: function(file, done) {
        console.log('TODO: Image upload validation');

    },
    sending: function(file, xhr, formData) {
        // Pass token. You can use the same method to pass any other values as well such as a id to associate the image with for example.
        // formData.append("_token", $('meta[name="csrf-token"]').attr('content')); // Laravel expect the token post value to be named _token by default
    },
    init: function() {
        this.on("success", function(file, response) {
            console.log(file, response);
        });
    }
};
var profile_img_details = {};
$("#user_profile").dropzone({
    url: "upload_profile",
    params: {
         "_token": $('meta[name="csrf-token"]').attr('content')
    },
    init: function() {
        this.on("success", function(file, response) {
            if(typeof response == 'string') {
                response = $.parseJSON(response);
            }
            var profileImg = $('<img />').attr({
                id: 'profile_img',
                src: 'img/'+response.url
            });
            var crop_profile = $("#crop_profile");
            crop_profile.find("#profile_img").remove();
            crop_profile.find('.modal-body').append(profileImg);
            crop_profile.modal('show');

            $('img#profile_img').imgAreaSelect({
                handles: true,
                onSelectEnd: function(img, points) {
                    profile_img_details.coordinates = points;
                    profile_img_details.url = response.url;
                    console.log(profile_img_details);
                }
            });
        });
    }
});
// var markers = [];
// function initMap(items) {
//     var uluru = {lat: 28.619338, lng: 77.285691};
//     var bounds = new google.maps.LatLngBounds();
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 18,
//         center: uluru
//     });
//     map.addListener('dragend', function() {
//         showVisibleMarkers();
//     });
//     map.addListener('zoom_changed', function() {
//         showVisibleMarkers();
//     });
//
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
//     var infoWindow = new google.maps.InfoWindow(), marker, i;
//     for( i = 0; i < items.length; i++ ) {
//         var position = new google.maps.LatLng(items[i].latitude, items[i].longitude);
//         bounds.extend(position);
//         marker = new google.maps.Marker({
//             position: position,
//             map: map,
//             title: items[i].name,
//             id: items[i].id
//         });
//         markers.push(marker);
//         // Allow each marker to have an info window
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(items[i].address);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));
//
//         // Automatically center the map fitting all markers on the screen
//         // map.fitBounds(bounds);
//     }
// }
// function showVisibleMarkers() {
//     var bounds = map.getBounds(),
//         count = 0;
//
//     for (var i = 0; i < markers.length; i++) {
//         var marker = markers[i];
//         if(bounds.contains(marker.getPosition())===true) {
//             console.log(marker.id);
//             count++;
//         }
//     }
//
//     console.log(count);
// }
