var map = function(arr, fn) {
    NewArray=[]
    for(i=0; i<arr.length; i++){
       NewArray.push(fn(arr[i],i))
    }
  return NewArray
 };