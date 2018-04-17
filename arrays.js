var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray(array,element){
  newArray = [element,...array];
  return newArray
  
}

/*
var destructivelyAddElementToBeginningOfArray = function(array,element){
  return array.unshift(element);

}


var addElementToEndofArray = function(array,element){
  return [...array,element];

}

var destructivelyAddElementToEndOfArray = function(array,element){
  return array.push(element);

}

var accessElementInArray = function(array,index) {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  return array.shift();
}

var removeElementFromBeginningofArray = function(array) {
  return array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  return array.pop();
}

var removeElementFromEndOfArray = function(array) {
  return array.slice(0,array.length-1);
}

*/