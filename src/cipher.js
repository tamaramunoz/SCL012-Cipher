window.cipher = {
  //funcion para codificar
  encode: (txt, desplazamiento) => {
      let resulta = "";

      //recorriendo el texto que ingreso para codificar
      for (let a = 0; a < txt.length; a++) {
        //aplicando las mayusculas al texto
        let mayusc = txt.toUpperCase();
        //aplicando la formula de cifrado
        let formula = (mayusc.charCodeAt(a)- 65 + parseInt(desplazamiento))%26 + 65;
        let cifrando = String.fromCharCode(formula);
        //devolviendo texto cifrado
        resulta += cifrando;
      }
      return resulta;
    },

  //funcion para decodificar
  decode: (message, desplaz) => {
      let resulta2 = "";

      for (let b = 0; b < message.length; b++) {
        let capitalizing = message.toUpperCase();
        let formu = (capitalizing.charCodeAt(b)- 90 - parseInt(desplaz))%26 + 90;
        let descifrando = String.fromCharCode(formu);
        resulta2 += descifrando;
      }
      return resulta2;
    }
  // fin :)
};
