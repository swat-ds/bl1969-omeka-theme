// blacklib 1969 omeka theme -- based on Berlin
// customized soundtrack exhibit

jQuery(function(){

    function getPlayerFromID(id){

        jQuery.ajax({
            url: 'api/items/' + id
        }).done(function(d){
            for(i in d.element_texts){
                currElement = d.element_texts[i];                
                if(currElement.element.name == 'Player'){
                    playerHTML = currElement.text;
                }
                if(currElement.element.name == 'Description'){
                    description = currElement.text;
                }
            }
            jQuery('div#soundtrack-exhibit-player')
                .html(playerHTML)
                .append("<p>" + description);    
        });
    }

    getPlayerFromID(1263);    

    jQuery('#soundtrack-exhibit-container .item')
        .on('click', function(d){
            itemID = jQuery(d.currentTarget)
                .children('a').attr('href');
            itemID = itemID.substr(itemID.lastIndexOf('/') + 1);

            getPlayerFromID(itemID);

        });
});
