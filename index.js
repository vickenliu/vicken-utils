var exports=module.exports={};


exports.countIf= function (testFunc, arr) {
  var count = 0
  arr.forEach(function(item){
    if (testFunc(item)) {
      count++;
    }
  })
  return count;
}


exports.filter=function(func, arr) {
var emails = [];
arr.forEach(function(item){
  if (func(item)) {
    emails.push(item);
  }
})
return emails;
}


exports.map=function(func, arr) {
  var _arr=[];
  for(var i=0;i<arr.length;i++){
    _arr.push(func(arr[i]));
  }
  return _arr;
}
