//1

/* Implement readN(text,n) which 
return an array of chunks 
of N characters each (maximum) 

For example, given an string with the content "Hello world", 
readN("Hello world",7) returns ["Hello w", "orld"] Example 2: "I want to eat pizza", readN("I want to eat pizza",5) returns ["I wan","t to ","eat p","izza"] */

//Mi solución errónea: método string leva 2 números

/* let str= "Hello world"

const chunk = (str,n) => {
   
    let arrChunks = [];
    
    for (let i = 0; i < str.length; i+=n) {
        
        str= str.slice(str,7);
        arrChunks.push(str);
                
    }
    let rest = str.length%7;
    let lastItem = str.slice ((str.length)-rest, rest );
    arrChunks.push(lastItem);
    
console.log()

} */

//Solución de Adri

//Kata martes 5 marzo

function readN(text, n) {

    const longitud = text.length;
    let array = [];

    for (i = 0; i < Math.ceil(longitud/n); i++) {
        array.push(text.slice(0, n));
        text = text.slice(n, text.length);
    }
    return array;
} 


//Solución de Vero

function readN(text, N) {
    let textNew = "";
    let textNewLast = "";
    for (let i = 0; i < N; i++)
  
      textNew += text.charAt(i);
      textNewLast = text.slice(N,text.length);
  
    return [textNew, textNewLast]
  
  }

  //Solución de Alberto

  readN("Hello world", 7);

  //Solución de Alberto

  function readN(string, n) {
    let arrayVacio = [];
    for (let i = 0; i < string.length; i+=n) {
        arrayVacio.push(string.slice(i, i + n));
    };
    return arrayVacio
}

//Solución de Alejandro

function readN(text, n) {
    // n = 5
    let resultado = [];
    let chunk = "";
    let contador = 1;
    for (let i = 0; i < text.length; i++) {
      chunk += text[i]; // añadir letra al trozo de texto
  
      // saltos de N en N
      if (contador == n) { // comprueba si contador alcanza N maximo 
        resultado.push(chunk);
        chunk = ""; // Vaciar trozo de texto
        contador = 0; // Reiniciar contador
      }
      contador++;
    }
    return resultado;
  }
  
  readN("Hola que tal",3)