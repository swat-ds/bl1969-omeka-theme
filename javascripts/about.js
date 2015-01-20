// about page carousel

jQuery(function(){

    jQuery('.jcarousel').jcarousel({
        center: true,
    });

    jQuery('.jcarousel ul')
        .append("<li>" + "one")
        .append("<li>" + "two")
        .append("<li>" + "three");

    console.log('fire');

});