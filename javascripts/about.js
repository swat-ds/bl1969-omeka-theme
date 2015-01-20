// about page carousel

 
jQuery(function(){

    carousel = jQuery('#jcarousel-about ul');

    for(i in exhibitsJSON){

        exhibit = "<li><a href='" + exhibitsJSON[i].url + "'>";
        exhibit += "<img src='http://54.210.13.122/fullsize/square_thumbnails/";
        exhibit += exhibitsJSON[i].thumb + "' title='" + exhibitsJSON[i].title + "'/>";
        exhibit += "<div><h3>" + exhibitsJSON[i].title + "</h3></a>";
        exhibit += "<p>" + exhibitsJSON[i].description + "</p></div></li>"
        
        console.log(exhibit);
        carousel.append(exhibit);
    }

    jQuery('#jcarousel-about').jcarousel({
        animation: 'slow',
        vertical: true
    });
});
