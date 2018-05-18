var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(){
  var animals = ["cat", "dog", "bird", "lizard"];
  
  animals.unshift("foo", 1)
  
  return animals
}

function destructivelyAddElementToBeginningOfArray (){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  
  chocolateBars["reeses"]
  
  return chocolateBars
}
