var ex = [{}];

jQuery.each( jQuery('.exhibit-preview'), function(k,v){
	var curr = jQuery(v);
	var srcURL = curr.find('a img').attr('src').split('/');
	var src = srcURL.pop();
	src = srcURL.pop() + '/' + src;
	ex.push({
		'title': curr.find('div a h3').text(),
		'description': curr.find('div p').text(),
		'url': curr.find('a').attr('href'),
		'thumb': src
	});
});

copy(ex);