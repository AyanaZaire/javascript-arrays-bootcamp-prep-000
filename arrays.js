var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(dog, cat){
  return[cat,...dog]
}

function destructivelyAddElementToBeginningOfArray (){
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  
  chocolateBars["reeses"]
  
  return chocolateBars
}
