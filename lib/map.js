module.exports=function(func, arr) {
  var _arr=[];
  for(var i=0;i<arr.length;i++){
    _arr.push(func(arr[i]));
  }
  return _arr;
}
