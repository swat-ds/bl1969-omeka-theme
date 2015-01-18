// interview gallery interaction scripts

jQuery(function(){
   
    i = 0; 
    jQuery('#interviews-gallery .item')
        .each(function(){
            $title = jQuery(this).find("h3 > a").text(); 
            $baseURL = 'http://blacklib1969.swarthmore.edu/files/square_thumbnails/';
            jQuery(this).children('a')
                .append(["<img src='" + $baseURL + thumbsJSON[i].file + "'/>",
                        "<h3>" + $title + "</h3>"]);
            i++;
        })
        .hover(function(e){
            console.log(e.currentTarget);
           jQuery(e.currentTarget).find('img:nth-child(2)')
            .toggle();
        });
});
