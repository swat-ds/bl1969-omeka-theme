// interview gallery interaction scripts

jQuery(function(){
    
    jQuery('#interviews-gallery .item')
        .each(function(){
            $title = jQuery(this).find("h3 > a").text(); 
            $src = 'http://blacklib1969.swarthmore.edu/files/square_thumbnails/1db37712ad7c32467bfefa24de41c804.jpg';
            jQuery(this).children('a')
                .append(["<img src='" + $src + "'/>",
                        "<h3>" + $title + "</h3>"]);
        })
        .hover(function(e){
           jQuery(e.currentTarget).find('img:nth-child(2)')
            .first().toggle();
        });
});
