/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   
   // este metodo tambien funciona 
   //let primerelemt = array.shift();
   //return primerelemt;   

   let primerelemt = array[0]; 
   return primerelemt; 
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   // este metodo tambien funciona 

   //let ultimoelent = array.pop();
  // return ultimoelent; 
      
   let ultimoelent = array[array.length-1];
   return ultimoelent; 
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length; 
}  

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   // este metodo tambien funciona                       // otra forma de escribir la funcion map
   // let arrayIncrementado = array.map((num)=>num+1);  // array.map(function(num){ return elemento +1})
   //return arrayIncrementado; 

   let nuevoarray =[]; 
   for (i=0; i<array.length; i++){
      let elemento = array[i] +1; 
      nuevoarray.push(elemento); 
   }
   return nuevoarray; 
 
}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    array.push(elemento);
    return array; 
    
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    array.unshift(elemento);
   return array; 
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   // otra forma de solucion sin el join
   let palabraunida;  
   for(i=0; i<palabras.length; i++){
      if (i==0){                         // este if es xq si no palabraunida en la primera posicion seria indefinido
         palabraunida = palabras[i]; 
      } else palabraunida = palabraunida + " " + palabras[i]; 
   }
   return palabraunida;     

//   return palabras.join(" "); 

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
  // if (array.includes(elemento)){
     // return true;                   este codigo funciona perfecto
  // }else return false; 

  //otro metodo que tambien funciona 
   let encontrado = array.find((e)=> e === elemento); //El método find() devuelve el valor del primer elemento 
    if (encontrado){                                  //del array que cumple la función de prueba proporcionada.
      return true;
   } else return false;  
  
   // este tambien funciona 
  // for (var i=0; i<array.length; i++){
     // if (array[i] === elemento){
     //    return true;
     // } else return false,    
   //}
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   let resultado = arrayOfNums.reduce((acumulador,elemento) => acumulador + elemento, 0); // "acumulador" representa la variabe que va acumular las sumas, 
   return resultado;                                                                      // "elemento" es cada numero del array en cada interacion que sumara al acumulador
                                                                                             // 0(cero), es el valor con el que comienza el acumulador 
   
   // con el metodo forEach tambien se puede hacer
//    let resultado=0;
//    arrayOfNums.forEach(elemento => {
//       resultado =+ elemento; 
//    }); 
//    return resultado; 
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   // este funciona, pero nos piden un bucle
  // let resultado = resultadosTest.reduce((a,b) => a + b, 0); 
  // return resultado/resultadosTest.length;  
   let acumulador = 0; 
  for(i=0; i<resultadosTest.length; i++){
   acumulador += resultadosTest[i]; 
  } return acumulador/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // let masgrande = 0; 
   // for (i=0; i<arrayOfNums.length; i++) {
   //    if(arrayOfNums[i]>masgrande){
   //       masgrande = arrayOfNums[i]; 
   //    }
   // } return masgrande; 

   // este tambien funciona
   let mayor = 0; 
   arrayOfNums.forEach((element) =>{
      if(element > mayor){
         mayor = element; 
      }
   });    
   return mayor; 
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
if (arguments.length === 0){
   return 0;
} else if (arguments.length === 1){
   return arguments[0]; 
}
let resultado = 1;
for(i=0;i<arguments.length;i++){
   resultado = resultado * arguments[i]; 
}
return resultado; 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   
   // funciona tambien 
   // let cantidad = 0; 
   // for (i=0;i<array.length;i++){
   //    if (array[i] > 18){
   //       cantidad = cantidad +1; 
   //    }
   // } return cantidad; 

   // aplicando el metodo forEach
   let cantidad = 0; 
   array.forEach((element) => {
      if(element > 18){
         cantidad = cantidad +1; 
      }
   });    
   return cantidad; 

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7 ){
      return "Es fin de semana"
   } else return "Es dia laboral"

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
      

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
   for (i=0; i<10; i++){
    let tabla=[].push(i*6); 
   } return tabla; 

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let nuevoarray =[]; 
   for (i=0; i<array.length; i++){
      if(array[i] >=101 || array[i] <=200 ){
         nuevoarray = nuevoarray.push; 
      }

   } return nuevoarray; 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
