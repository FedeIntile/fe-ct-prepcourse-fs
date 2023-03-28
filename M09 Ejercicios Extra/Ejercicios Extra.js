/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let nuevoArray =[]; 
   for (let clave in objeto){    /// for in se utiliza para recorre arreglos 
      nuevoArray.push([clave,objeto[clave]])      
}
   return nuevoArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let nuevoObjeto ={}; 
   let arrayDeLetras = string.split(""); //pasa string a array, sin dejar espacios entre comillas se crea una sola posicion para cada letra.
   arrayDeLetras = arrayDeLetras.sort(); //ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
   arrayDeLetras.forEach(letra => {
      if(nuevoObjeto.hasOwnProperty(letra)){  // hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
         nuevoObjeto[letra] = nuevoObjeto[letra]+1 // si la propiedad existe le suma 1
      }else nuevoObjeto[letra] = 1            // si no existe la propiedad, la crea y la inicializa en 1                   
   });

   return nuevoObjeto

   }                                                    

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let mayuscula = "";
   let minuscula = "";
   for (i=0;i < string.length;i++){
      if(string[i]===string[i].toUpperCase()){
         mayuscula = mayuscula + string[i];   // tb podria poner  mayuscula.concat(string[i])                                
      } else {
         minuscula = minuscula + string[i];
      }
   }
   return mayuscula + minuscula

}
   

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   
   let array = frase.split(" "); //con el spacio indicamos que los elemento del array se formar a partir de los espacios vacios de la frase
   //["The", "Henry", "Challenge", "is", "close!"]
   array.forEach((palabra, index) =>{
   //["The", "Henry", "Challenge", "is", "close!"]
   //   ↑      ↑
   //palabra
   //index 0   1
     var palabra2 = palabra.split("");
   // ["T","h","e"]
   // ["H","e","n","r","y"]
     array[index] = palabra2.reverse().join("");  // sobrescribimos el array del principio
     // array[0] = ["e","h","T"] => ["ehT"] esto en la primera vuelta
     // array[1] = ["y","r","n","e","H"] => ["yrneH"] esto en la segunda vuelta
   }); 
   // array es igual a ["ehT","yrneH","egnellahC","si","!esolc"]
   let nuevoArray = array.join(" ");  
   // nuevoarray es "ehT yrneH egnellahC si !esolc"
   return nuevoArray;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
         //1351
   var convetString = numero.toString(); // "1351"
   var numArray = convetString.split(""); // ["1","3","5","1"]
   var arrayReverse = numArray.reverse(); // ["1","5","3","1"]
   var reverString = arrayReverse.join(""); // "1531"
   if(convetString === reverString){ /// tb funciona con if(numero.toString() === reverString)
      return "Es capicua"
   } else return "No es capicua"
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código

   //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

   // let array = string.split(""); 
   // let arrayFiltrado = array.filter((elemento) => elemento !== "a" && elemento !== "b" && elemento !== "c")
   // return arrayFiltrado.join(""); 

   // OTRA FORMA DE HACERLO CON STRING SIN PASARLO A ARRAY  

   let resultado = ""; 

   for (let i = 0;i<string.length; i++){
      if(string[i] !=="a" && string[i] !=="b" && string[i] !=="c"){
         resultado += string[i];
      }
   }
    return resultado;   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   // forma corta con el metodo sort

   // let array = arrayOfStrings.sort(function(a,b){
   //    return a.length - b.length
   // })
   // return array;
   
   // otra opcion: es como se maneja el sort ?????
   // return arrayOfStrings.sort(function(a,b){
   //    if(a.length > b.length) return 1
   //    else if (b.length > a.length) return -1
   //    else return 0
   // })

   //opcion doble for anidado 

   for(let i=0;i<arrayOfStrings.length;i++){
      for(let j= i+1;j<arrayOfStrings.length;j++){
         if(arrayOfStrings[i].length > arrayOfStrings[j].length){
            let aux = arrayOfStrings[i]
            arrayOfStrings[i] = arrayOfStrings[j]
            arrayOfStrings[j]=aux
         }
      }
   }

   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // opcion 1: con dos for anidados 
   // let nuevoArray = [];
   // for(let i=0;i<array1.length;i++){
   //    for(let j=0;j<array2.length;j++){
   //       if(array1[i]===array2[j]){
   //          nuevoArray.push(array1[i]); 
   //       } 
   //    }
   // }
   // return nuevoArray

   //opcion 2: usando método includes():determina si una matriz incluye un determinado elemento, devuelve true o false 
   let nuevoArray=[];

   for(let i=0;i<array1.length;i++){
      if(array2.includes(array1[i])){
         nuevoArray.push(array1[i]);
      }
   }
   return nuevoArray;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
