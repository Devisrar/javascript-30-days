/*
slice():
The slice() method in JavaScript extracts a section of an array 
and returns a new array containing the selected elements, 
without modifying the original array.
*/

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let newCars = cars.slice(1, 4);
console.log("cars :", cars);
console.log("new_cars :", newCars);

/*
splice():
The splice() method in JavaScript is used to change the contents of an array by 
removing or replacing existing elements and/or adding new elements in place, 
modifying the original array.
*/
cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", cars);
/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7. Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

*/