const capitalizar=(oracion="")=>{

    let palabras = oracion.split( ' ' );
    palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));

    return palabras.join(' ');
    
}

console.log(capitalizar("hola mundo"))