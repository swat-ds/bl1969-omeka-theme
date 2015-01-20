// about page carousel

jQuery(function(){

    jQuery('.jcarousel').jcarousel({
        center: true,
    });

    jQuery('.jcarousel')
        .append("<li>" + "one")
        .append("<li>" + "two")
        .append("<li>" + "three");

    console.log('fire');

});