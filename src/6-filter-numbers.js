export const filterNumbers = (array, largerThan) => {

  return array.filter(item => item <= largerThan)  //The filter() method creates a new array filled with elements that pass a test provided by a function.                                      
}

// Arrow to write shorter function syntax
// The less than or equal operator ( <= ) returns true if the left operand is less than or equal to the right operand, and false otherwise.
// The item() method returns a node at the specified index in a NodeList object.

//array: [1,20,25,34,99]
//largerThan: 25
//return: [1,20,25]

// Item: Doesn't get bigger than 25