var assert = require('./utils/assert')
var data = require('./data/data')
var expectedArrayOfArrays = require('./data/array-of-arrays')
var expectedFormattedDates = require('./data/formatted-dates')
var findFuncs=require('./utils/index')

console.log( findFuncs.name )

console.log('here is mine',findFuncs)

function each (func, arr) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}











// TESTS

var meaningOfLife = '42'



var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // why are there 4 expected number data-types?  What are they?
var expectedStringCount = 2
var numberCount = findFuncs.countIf(isNumber, mixedArray)
var stringCount = findFuncs.countIf(function (x) { return typeof x === 'string' }, mixedArray)




assert( numberCount, expectedNumberCount, 'countIf can count the numbers in an array' )
assert( stringCount, expectedStringCount, 'countIf can count the strings in an array' )


var emails = findFuncs.filter(isEmail, data)
assert( emails.length, 44, 'filter and isEmail returns the correct number of emails' )


function filterStringsWithCommas (str) {
    return str.indexOf(',') > -1;
}

var stringsWithCommas = findFuncs.filter(filterStringsWithCommas, data)
assert( stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas' )




function splitStringByCommas (str) {
  return str.split(',');

}

var arrayOfArrays = findFuncs.map(splitStringByCommas, stringsWithCommas)
var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
  return arr.every(function (str, j) {
    return str === expectedArrayOfArrays[i][j]
  })
})

assert( matchesArrayOfArrays, true, 'the generated array of array of strings matches the expected array' )


