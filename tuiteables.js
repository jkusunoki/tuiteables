$(document).ready(function() {
	url = window.location;
	tuiteable = /: "([a-zA-Z0-9 ÑñÁÉÍÓÚáéíóú;.,]+)"/g;
	caracteres = tuiteable.toString();
	tuiteableq = $('blockquote').text();
	caracteresq = tuiteableq.toString();

	function linkTuiteable(text) { 
	    return text.replace(
	       tuiteable,
	        ': <a class="tuiteable" href="https://twitter.com/share?url='+url+'&amp;text=$1">$1</a>'
	    );
	} 

	function linkTuiteableq(text) { 
	    return text.replace(
	       tuiteableq,
	        '<a class="quotation" href="https://twitter.com/share?url='+url+'&amp;text='+tuiteableq+'">'+tuiteableq+'</a>'
	    );
	} 

	$('#contenido').ready(function(){
	    $('p').each(function() {
	        if (caracteres.length < 100) {
	            $(this).html(linkTuiteable($(this).html()));
	        }
	    });
	    $('blockquote').each(function() {
	        if (caracteresq.length < 100) {
	            $(this).html(linkTuiteableq($(this).html()));
	        }
	    });
	});
});