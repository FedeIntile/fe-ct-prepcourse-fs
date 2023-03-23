/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
      
   return nombre[0].toUpperCase() + nombre.slice(1); 
   // en la primera parte solo retorna la primera letra en mayuscula aplicando el metodo toUpperCase
   // luego se concatena usando el metodo slice(metodo array) que se usa pasando como paramentro la primera
   // primera posicion de la cadena(como si fuera un array) y devuelve de la misma hasta el final
   //tambien se puede usar slice con 2 parametros ej.nombre.slice(2,3) y devuelve las posiciones
   // de la 2 hasta una antes de las 3
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2); 

   //lo que hace este callback ej con una suma

   // function suma (num1,num2){
   //    return num1 + num2; 
   // }
   
   // let resultado = operacionMatematica(3,2,suma);
   // console.log(resultado);   

}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   //opcion 1
   // let suma = 0
   // for(var i=0;i<arrayOfNumbers.length;i++){
   //    suma = suma + arrayOfNumbers[i]; 
   // }
   // cb(suma);
   //opcion 2: metodo reduce(metodo utilizado con array, puede juntar string o sumar numeros)
   let suma = arrayOfNumbers.reduce((numero,aculudaror)=>{
      return aculudaror + numero}
   )
   cb(suma); 
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   // for(var i=0;i<array.length;i++){
   //    cb(array[i])
   // }
   //opcion 2:metodo forEach(este metodo no devuelve nada)
   array.forEach((numero) =>{
      cb(numero); 
   })
   //opcion 3: metodo for in(devuelve el indice) y for of (devuelve el elemento)
   // for (var i in array){
   //    cb(array[i]); 
   // }

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   //metodo map: este metodo de arreglos q devuelve un nuevo metodo modificado, pero no afecta al original
   
   // let nuevoArray=[]; 
   // nuevoArray = array.map(elemento => cb(elemento));
   // return nuevoArray; 

   //opcion 2 : con forEach que no devuelve nada
   let nuevoArray2=[];
   array.forEach((e)=>nuevoArray2.push(cb(e))); /// el map los pushea a todos automaticamente
   return nuevoArray2; 
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // el metodo filter devuelve un nuevo array que cumpla con alguna condicion que le indiquemos
   let nuevoArray=[];
   nuevoArray = arrayOfStrings.filter((e)=>e[0]==="a")
   return nuevoArray; 
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
