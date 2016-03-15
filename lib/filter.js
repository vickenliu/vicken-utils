module.exports=function(func, arr) {
var emails = [];
arr.forEach(function(item){
  if (func(item)) {
    emails.push(item);
  }
})
return emails;
}
