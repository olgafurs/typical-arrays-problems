
exports.min = function min (myArray) {

  if( typeof myArray === 'undefined' || myArray.length === 0) {
    return 0;
  }

  let min = myArray[0];
  for( let i = 1; i < myArray.length; i++) {
    if(myArray[i] < min){
      min = myArray[i];
    }    
  }
  return min;  
}

exports.max = function max (myArray) {

  if(typeof myArray === 'undefined' || myArray.length === 0) {
    return 0;
  }

  let max = myArray[0];
  for( let i = 1; i < myArray.length; i++) {
    if(myArray[i] > max){
      max = myArray[i];
    }
    
  }

  return max;  
}

exports.avg = function avg (myArray) {

  if(typeof myArray === 'undefined' || myArray.length === 0) {
    return 0;
  }

  let count = 0;
  for( let i = 0; i < myArray.length; i++) {
    count += myArray[i]    
  }

  return count/myArray.length;  
}
