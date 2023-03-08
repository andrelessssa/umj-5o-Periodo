alert('Teste')
function removeVogaisString( remove ){
    return remove.replace(/[aeiouà-ú]/gi,'');
 }
 
 var resultado = removeVogaisString( "OláÁéôãõ, mundo!" );

 document.getElementsByTagName('body')[0].innerHTML += resultado;
 console.log( resultado );