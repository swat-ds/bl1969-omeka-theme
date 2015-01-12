// blacklib 1969 omeka theme -- based on Berlin
// customized soundtrack exhibit

jQuery(function(){

    function getPlayerFromID(id){

        jQuery.ajax({
            url: 'api/items/' + id
        }).done(function(d){
            console.log(d.element_texts[6]);
        });
    }

    jQuery('#soundtrack-exhibit-container .item')
        .on('click', function(d){
            itemID = jQuery(d.currentTarget)
                .children('a').attr('href');
            itemID = itemID.substr(itemID.lastIndexOf('/') + 1);

            getPlayerFromID(itemID);

        });
});
