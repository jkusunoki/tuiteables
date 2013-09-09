$(document).ready(function() {
	var url = window.location;
	tuiteable = /: "([a-zA-Z0-9 ÑñÁÉÍÓÚáéíóú;.,]+)"/g;
	var caracteres = tuiteable.toString();

	function linkTuiteable(text) { 
	    return text.replace(
	       tuiteable,
	        ': <a class="tuiteable" href="https://twitter.com/share?url='+url+'&amp;text=$1">$1</a>'
	    );
	} 

	$('#contenido').ready(function(){
	    $('p').each(function() {
	        if (caracteres.length < 100) {
	            $(this).html(linkTuiteable($(this).html()));
	        }
	    });
	});
});