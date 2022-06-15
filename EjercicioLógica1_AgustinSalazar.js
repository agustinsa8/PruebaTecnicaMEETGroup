//Agustin Salazar - aspirante ingeniero de desarrollo de software

//Se inicializan los arrays
const a = [1, 2],
  b = [[1, 2],[2, 4],],
  c = [[1, 2],[2, 4],[2, 4],],
  d = [[[3, 4],[6, 5],],],
  e = [[[1, 2, 3]],[[5, 6, 7],[5, 4, 3],],[[3, 5, 6],[4, 8, 3],[2, 3],],],
  f = [[[1, 2, 3],[2, 3, 4],],[[5, 6, 7],[5, 4, 3],],[[3, 5, 6],[4, 8, 3],],];

//Definicion del objeto s
const o = {
//Retorna la dimension profunda del array
  dimension: function (array){ 
//Se valida si es array
    if (Array.isArray(array))
//Si es, retorna la suma del llamado recursivo de cada array
      return 1 + Math.max(array.map((t) => o.dimension(t)));
//Si no, retorna 0
    else return 0;
  },

//Retorna true si el array contiene la misma cantidad de elementos en cada una de sus dimensiones 
  straight: function (array){
//Se inicializa una variable auxiliar local
    let same = 0;
//Se inicializa una variable auxiliar local que tiene la primera posición del array
    let first = array[0].length;
//Se toma cada elemento del array
    array.forEach(function (el){
//Se compara el primer elemento con los demas, si la longitud del siguiente es diferente al array[0], entonces suma 1 a la variable auxiliar 
      if (first != el.length)
        same += 1;
    });
//Si la variable auxiliar es mayor que 1, es proque hay elementos del array de diferente tamaño y retorna false
    if (same > 0)
        return false;
    else return true;
  },

//Retorna un número entero, resultado de la suma de todos los números incluídos en el array
  compute: function (array){
//Realiza la concatenación del array y hace un llamado recursivo 
    array = array.reduce((acc, val) => Array.isArray(val) ? acc.concat(o.compute(val)) : acc.concat(val),[]);
//Se inicializa el indice
    const initialValue = 0;
//Se calcula la suma total de los elementos del array donde previousValue es el acumulado, currentValue es el valor que se esta precesando del elemento del array
    const sumWithInitial = array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
//Se retorna el calculo de la suma de todos los elementos del array
    return sumWithInitial;
  },
};


//Se crean los objetos arrays
const arrayA = Object.create(o);
const arrayB = Object.create(o);
const arrayC = Object.create(o);
const arrayD = Object.create(o);
const arrayE = Object.create(o);
const arrayF = Object.create(o);

//Llamado a metodo dimension
console.log("Metodo dimesion: ")
console.log(arrayA.dimension(a));
console.log(arrayB.dimension(b));
console.log(arrayC.dimension(c));
console.log(arrayD.dimension(d));
console.log(arrayE.dimension(e));
console.log(arrayF.dimension(f));

//Llamado a metodo straight
console.log("Metodo straight: ")
console.log(arrayA.straight(a));
console.log(arrayB.straight(b));
console.log(arrayC.straight(c));
console.log(arrayD.straight(d));
console.log(arrayE.straight(e));
console.log(arrayF.straight(f));

//Llamado a metodo compute
console.log("Metodo compute: ")
console.log(arrayA.compute(a));
console.log(arrayB.compute(b));
console.log(arrayC.compute(c));
console.log(arrayD.compute(d));
console.log(arrayE.compute(e));
console.log(arrayF.compute(f));