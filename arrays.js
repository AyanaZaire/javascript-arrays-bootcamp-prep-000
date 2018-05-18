var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElemenToEndOfArray(array, element){
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  element.unshift(array)
  return element
}