var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(dog, cat){
  return[dog,...cat]
}

function destructivelyAddElementToBeginningOfArray (){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  
  chocolateBars["reeses"]
  
  return chocolateBars
}
