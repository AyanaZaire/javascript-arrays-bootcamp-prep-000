var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(dog, cat){
  return[cat,...dog]
}

function destructivelyAddElementToBeginningOfArray(dog, cat){
  dog.unshift(cat)
  return dog
}
