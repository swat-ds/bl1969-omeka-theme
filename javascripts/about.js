// about page carousel

 
jQuery(function(){

    item = "<li><a href='/'><img src='http://54.210.13.122/files/square_thumbnails/a008acc6a3c11b1fefe5d93ab888e59a.jpg' alt='Greene001.jpg' title='Greene001.jpg'>Hello Now<p>Hello Now</p><h2>Hello Now</h2></a></li>";

    carousel = jQuery('#jcarousel-about ul');

    for(i in exhibitsJSON){

        exhibit = "<li><a href='" + exhibitsJSON[i].url + "'>";
        exhibit += "<img src='http://54.210.13.122/files/square_thumbnails/";
        exhibit += exhibitsJSON[i].thumb + "' title='" + exhibitsJSON[i].title + "/>";
        exhibit += "<h2>" + exhibitsJSON[i].title + "</h2></a>";
        exhibit += "<p>" + exhibitsJSON[i].description + "</p></li>"

        carousel.append(exhibit);
    }

    jQuery('#jcarousel-about').jcarousel({
        animation: 'slow'
        
    });
});

