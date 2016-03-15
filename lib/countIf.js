module.exports=function (testFunc, arr) {
  var count = 0
  arr.forEach(function(item){
    if (testFunc(item)) {
      count++;
    }
  })
  return count;
}
