var fruits = [];
typeof(fruits);

fruits = ["apple", "banana", "cherry", "strawberry"];
console.log(fruits);

fruits.length;
4

fruits[0];
'apple'
fruits[1];
'banana'
fruits[3];
'strawberry'
fruits[2];
'cherry'

fruits
(6) ['apple', 'banana', 'cherry', 'strawberry', 'shit', 'grapes']
var last = fruits.pop();
undefined
last
'grapes'

//añadir elementos al comienzo del arreglo
var newLength = fruits.unshift("grapes");
undefined

newLength
6

fruits
(6) ['grapes', 'apple', 'banana', 'cherry', 'strawberry', 'shit']

//añadir elementos al final del arreglo
fruits.push("more shit");
7

fruits
(7) ['grapes', 'apple', 'banana', 'cherry', 'strawberry', 'shit', 'more shit']

//borrar primer elementos
var deleteFruit = fruits.shift();
undefined

fruits
(5) ['banana', 'cherry', 'strawberry', 'shit', 'more shit']

deleteFruit
'apple' 

//localizar variables
var position = fruits.indexOf("cherry");
undefined

position
1

fruits[1];
'cherry'