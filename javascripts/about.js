// about page carousel

jQuery(function(){

    jQuery('#jcarousel-about').jcarousel({
        center: true,
    });

    jQuery('#jcarousel-about ul')
        .append("<li>" + "one")
        .append("<li>" + "two")
        .append("<li>" + "three");

    console.log('fire');

});