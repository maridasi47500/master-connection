if (navigator.geolocation) {
if (window.location.pathname === "/location" && latuser.innerHTML === "" && lonuser.innerHTML === "" && myuserid.innerHTML !== "") {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
var map = L.map('map').setView([latitude, longitude], 13);
btnlocation.dataset.latitude=latitude;
btnlocation.dataset.longitude=longitude;
$("#overlay").attr("style",'display:block;');
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
setTimeout(function () {
    map.invalidateSize();
}, 0);
	  map.on('mouseup', function(e) {
    const latitude = e.latlng.lat;
    const longitude = e.latlng.lng;
btnlocation.dataset.latitude=latitude;
btnlocation.dataset.longitude=longitude;
var popup = L.popup()
    .setLatLng([parseFloat(latitude), parseFloat(longitude)])
    .setContent("vous êtes ici")
    .openOn(map);
	  });

  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
if (document.getElementById("btnlocation")){
btnlocation.onclick=function(){
var fd=new FormData();
fd.set("latitude",btnlocation.dataset.latitude);
fd.set("longitude",btnlocation.dataset.longitude);
fd.set("userid",btnlocation.dataset.userid);
  $.ajax({
    // Your server script to process the upload
    url: "/updatelocation",
    type: "post",

    // Form data
    data: fd,

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log("HEY")
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.redirect){
	    window.location=data.redirect;
	    }else{
	    window.location="/";
	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
}

}
$(document).ready(function () {
$("#pays_telephone, [name=sex]").change(function(){

	var url="/chercherimage/"+$("[name=sex]:checked").val()+"/"+$("#pays_telephone").val();
	console.log(url);
	$.ajax({url:url,
		success:function(data){
			var pic=data.images;
	$(someurl).html("<p>"+data.q+"</p>");
			for (var i=0;i<pic.length;i++){
	$(someurl).append(`
	<div class="champ">
	<input id="image${i+1}" ${i == 0 ? "checked" : ""} value="${pic[i].src}" name="someurl" type="radio"/>
	<label for="image${i+1}"><img src="${pic[i].src}" width=200 height=200 />image ${i+1}</label>
	</div>
		`
	);
			}
		}});
})
      $('.someselect').selectize({
          sortField: 'text'
      });
  });

