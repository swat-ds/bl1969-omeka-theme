// interview gallery interaction scripts

jQuery(function(){
   
    var i = 0; 
    jQuery('#interviews-gallery .item')
        .each(function(){
            var $title = jQuery(this).find("h3 > a").text(); 
            var $baseURL = '../files/square_thumbnails/';
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
