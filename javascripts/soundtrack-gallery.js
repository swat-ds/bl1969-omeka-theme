// blacklib 1969 omeka theme -- based on Berlin
// customized soundtrack exhibit

jQuery(function(){

    jQuery('#soundtrack .jcarousel').jcarousel('items')
        .each(function(){
            var currItem = jQuery(this).find('a');
            currItem.find('img').attr('title','');
            var itemID = currItem.attr('href');
            itemID = itemID.substr(itemID.lastIndexOf('/') + 1);
            currItem.attr('data-item-id',itemID);
            currItem.attr('href','#void');
        });

    jQuery('#soundtrack .jcarousel')
        .jcarousel({
            animation: 'fast',
        })
        .on('jcarousel:create jcarousel:reload', function(){
            jQuery(this).jcarousel('items')
                .css('width', '150px');
        })
        .jcarousel('reload');

    function getPlayerFromID(id){

        jQuery.ajax({
            url: 'api/items/' + id
        }).done(function(d){
            for(i in d.element_texts){
                currElement = d.element_texts[i];
                if(currElement.element.name == 'Player'){
                    var playerHTML = currElement.text;
                }
                if(currElement.element.name == 'Description'){
                    var description = currElement.text;
                }
            }
            description += "&nbsp;&nbsp;<a href='/items/show/" + id;
            description += "'><em>More Info</em></a>";
            jQuery('div#soundtrack-exhibit-player')
                .html(playerHTML)
                .append("<p>" + description);
        });
    }

    getPlayerFromID(1253);
    
    jQuery('#soundtrack .jcarousel li')
        .on('click', function(d){
            var itemID = jQuery(d.currentTarget)
                            .find('a').attr('data-item-id');
            getPlayerFromID(itemID);

        });
});
