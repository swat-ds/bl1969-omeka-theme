// interview gallery interaction scripts

jQuery(function(){
   
    var i = 0; 
    jQuery('#interviews-gallery .item')
        .each(function(){
            var $title = jQuery(this).find("h3 > a").text(); 
            var $baseURL = 'http://s3.amazonaws.com/sc-lib-ds-bl1969%2Fsquare_thumbnails%2F';
            jQuery(this).children('a')
                .append(function(){

                    $img = (typeof thumbsJSON[i].file !== 'undefined')
                        ? thumbsJSON[i].file
                        : "logo_small.jpg"; 
                    
                    return ["<img src='" + $baseURL + $img  + "'/>",
                        "<h3>" + $title + "</h3>"];
                }); 
            i++;
        })
        .hover(function(e){
           jQuery(e.currentTarget).find('img:nth-child(2)')
            .toggle();
        });
});
