alert('Teste')
function removeVogaisString( remove ){
    return remove.replace(/[aeiouà-ú]/gi,'');
 }
 
 var resultado = removeVogaisString( "OláÁéôãõ, mundo!" );
 
 console.log( resultado );