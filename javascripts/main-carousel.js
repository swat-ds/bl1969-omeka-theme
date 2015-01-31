// main page carousel

 
jQuery(function(){

   var carousel = jQuery('.jcarousel#jcarousel-main ul');

    for(i in exhibitsJSON){

        var exhibit = "<li><a href='" + exhibitsJSON[i].url + "'>";
        exhibit += "<div style='background: url(../files/";
        exhibit += exhibitsJSON[i].thumb + ")'>";
        exhibit += "<div><h2>" + exhibitsJSON[i].title + "</h2>";
        exhibit += "<p>" + exhibitsJSON[i].description + "</p></div></div></li>"
        
        carousel.append(exhibit);
    }

    jQuery('.jcarousel#jcarousel-main')
        .on('jcarousel:create jcarousel:reload', function(){

            var el = jQuery(this),
                width = el.innerWidth();
                el.jcarousel('items').css('width',width + 'px');
        })
        .jcarousel({
            animation: 'slow'
        })
        .jcarousel('reload');
});
