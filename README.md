# PruebaTecnicaMEETGroup
Se desarrollan los ejercicios propuestos en la prueba técnica en JavaScript. 

El ejericio 1 consiste en:

Construya un objeto que reciba un arreglo o una matriz de dimensión N el cual contiene números de tipo entero.

El objeto debe tener los siguientes métodos suponiendo la siguiente definición. o = MyMAtrix.new(matrix)

a.	o.dimension -> Devuelve el número entero que define la dimensión del arreglo o matriz en su mayor profundidad.

b.	o.straight -> Devuelve true o false según el siguiente criterio: -True: Si el arreglo o matriz contiene la misma cantidad de elementos en cada una de sus dimensiones (Matriz uniforme). -False: Caso contrario.

c.	o.compute -> Devuelve el número entero resultado de la suma de todos los números incluídos en la matriz sin importar el tamaño o dimensión.

------------------------------------------------------------------

El ejericio 2 consiste en:

Construya un objeto que reciba como parámetro un string y reconozca mediante expresiones regulares los siguientes criterios.

El objeto debe tener los siguientes métodos suponiendo la siguiente definición. s = MyArray.new(string)

A.	s.operation -> Devuelve un booleano según el siguiente criterio -True: Si el texto recibido corresponde a una operación aritmética (+, -, /, *) matemática. -False: Si el texto recibido no corresponde a ninguna operación aritmética matemática o se encuentra mal construída.

B.	s.compute -> Devuelve el valor computado de la operación aritmética, se deben considerar los paréntesis '(' ')' como agrupaciones de la operación. Devuelve false en el caso de que la operación no pueda ser computada por paréntesis mal agrupados o en el caso de que s.operation sea false.
