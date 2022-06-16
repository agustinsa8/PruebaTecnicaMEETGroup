//Agustin Salazar - aspirante ingeniero de desarrollo de software

const a = "Hello world",
  b = "2+10/2-20",
  c = "(2+10)/2-20",
  d = "(2+10/2-20";

//Definicion del objeto s
const s = {
//Retorna true lo recibido corresponde a una operacion aritmetica. En caso contrario retorna false
  operation: function (array){ 
//Se define variable auxiliar y se inicializa
    same = true;
//Se valida el contenido que contenga operadores aritmeticos, retorna true en caso de que asi sea
    if (array.includes("+" | "-" | "/" | "*")){
//Se valida el contenido que contenga letras, retorna true en caso de que asi sea
      if (array.includes("[a-z]")){
//Se le asigna false a la variable auxiliar
        same = false;
      }else{
        try{
//Evalua una cadena de caracteres
          eval(array);
        }catch (error){
//En caso de estar malo el contenido, asigna false a la variable auxiliar
          same = false;
        }
      }
//Le asigna false a la variable auxiliar en caso de que no contenga operadores aritmeticos
    }else same = false;
//Retorna el valor de variable auxiliar
    return same;
  },
  
//Retorna el resultado de la operacion si la expresion es correcta y corresponde a una operacion aritmetica.En caso contrario retorna false
  compute: function (array){
//Se llama el meotdo operation para validar si esta bien el contenido y corresponde a una expresion aritmetica
    if (s.operation(array)){
      try {
//Evalua una cadena de caracteres, realiza los calculos y lo guarda en la variable auxiliar
        this.calculated = eval(array);
//Retorna el valor de la variable auxiliar que seria el resultado de la operacion aritmetica
        return this.calculated;
      } catch (err) {
//Retorna falso si la expresion aritmetica esta mal construida
        return false;
      }
//Retorna false si no es una expresion aritmetica
    }else return false;
  },
};

//Se crean los arrays
const arrayA = Object.create(s);
const arrayB = Object.create(s);
const arrayC = Object.create(s);
const arrayD = Object.create(s);

//Llamado a metodo operation
console.log("Metodo operation: ")
console.log(arrayA.operation(a));
console.log(arrayB.operation(b));
console.log(arrayC.operation(c));
console.log(arrayD.operation(d));

//Llamado a metodo compute
console.log("Meotodo compute: ")
console.log(arrayA.compute(a));
console.log(arrayB.compute(b));
console.log(arrayC.compute(c));
console.log(arrayD.compute(d));