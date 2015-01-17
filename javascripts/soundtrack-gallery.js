// blacklib 1969 omeka theme -- based on Berlin
// customized soundtrack exhibit

jQuery(function(){

    jQuery('div.item.record', jQuery('#soundtrack-exhibit-container'))
        .each(function(){
            currItem = jQuery(this).children();
            title = currItem[0].innerText;
            jQuery(currItem[1]).children().attr('title',title);
            jQuery(currItem[1]).attr('href','#void');
        });

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
            description += "&nbsp;&nbsp;<a href='/items/show/" + id;
            description += "'>More Info</a>";
            jQuery('div#soundtrack-exhibit-player')
                .html(playerHTML)
                .append("<p>" + description);
        });
    }

    getPlayerFromID(1263);

    jQuery('#soundtrack-exhibit-container .item')
        .on('click', function(d){
            itemID = jQuery(d.currentTarget)
                .find('h3 > a').attr('href');
            itemID = itemID.substr(itemID.lastIndexOf('/') + 1);

            getPlayerFromID(itemID);

        });
});
