//boton cifrado
const botonCifrar = document.getElementById("codificar");
//llamando a la función encode: cifrando
botonCifrar.addEventListener("click", function(){
    let takingCode = document.getElementById("texto").value;
    let asciiNum = document.getElementById("offset").value;
    document.getElementById("resultado").textContent=window.cipher.encode(takingCode, asciiNum);
});
    
//boton descifrado
const botonDescifrar = document.getElementById("decodificar");
//llamando a la función decode: decifrando
botonDescifrar.addEventListener("click", function(){
    let takingDecode = document.getElementById("texto").value;
    let numAscii = document.getElementById("offset").value;
    document.getElementById("resultado").textContent=window.cipher.decode(takingDecode, numAscii);
});

