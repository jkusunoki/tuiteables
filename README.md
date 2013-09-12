tuiteables.js
==========

Olvídate de tener que hacer instalaciones especiales y agregar complementos a tu CMS. Hacer que las frases de tus notas sean "tuiteables" tenía que ser más sencillo, y en efecto lo es. Agrega estas líneas de javascript y dale el estilo que quieras.

¿Cómo funciona?
==============

Fácil,  en $('#contenido').ready(function(){... basta con reemplazar #contenido por el nombre del 'div' que uses para colocar tus textos (o en el que quieres que detecte las frases). Dentro de él, el script buscará todas las frases que tengan esta forma - va la frase: "aquí el texto tuiteable" - y si tiene la longitud adecuada para Twitter automáticamente la convertirá en una "frase tuiteable".

Cualquier comentario, avísame: <a href="https://twitter.com/jkusunoki">@jkusunoki</a> 
