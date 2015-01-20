// about page carousel

jQuery(function(){

    jQuery('#jcarousel-about').jcarousel({
        animation: 'slow'
        
    });

    item = "<li><a href='/'><img src='http://54.210.13.122/files/square_thumbnails/a008acc6a3c11b1fefe5d93ab888e59a.jpg' alt='Greene001.jpg' title='Greene001.jpg'></a></li>";

    jQuery('#jcarousel-about ul')
        .append(item)
        .append(item)
        .append(item)
        .append(item)
        .append(item)
        .append(item)
        .append(item)
        .append(item);

    console.log('fire');

});