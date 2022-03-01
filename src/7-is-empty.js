  export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject


  if (type === 'object') {
    if (stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0) { //Returns an array of a given object's own enumerable property names
      return true
    } 
    else {
      return false
    }
  }
  return false
}

  
//if string is empty = true
//if object is empty = true
//else:
//a string with a value = false
//an array with items = false
//an object with properties = false
