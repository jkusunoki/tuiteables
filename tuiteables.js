var url = window.location;
tuiteable = /: "([a-zA-Z0-9 ÑñÁÉÍÓÚáéíóú;.,]+)"/g;
caracteres = tuiteable.text().lenght();

function linkTuiteable(text) {
    return text.replace(
       tuiteable,
        ': <a class="tuiteable" href="https://twitter.com/share?url='+url+'&amp;text=$1">$1</a>'
    );
} 

$('#contenido').ready(function(){
    window.alert(caracteres);
    $('p').each(function() {
        if (caracteres < 100) {
            $(this).html(linkTuiteable($(this).html()));
        }
    });
});