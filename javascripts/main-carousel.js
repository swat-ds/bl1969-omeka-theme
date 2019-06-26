// main page carousel

 
jQuery(function(){

   var s3Prefix = 'https://s3.amazonaws.com/sc-lib-ds-bl1969%2F';
   var carousel = jQuery('.jcarousel#jcarousel-main ul');

    for(i in exhibitsJSON){

        var exhibit = "<li><a href='" + exhibitsJSON[i].url + "'>";
        exhibit += "<div style='background: url(";
        exhibit += s3Prefix;
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
