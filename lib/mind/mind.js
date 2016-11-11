var _ = require('lodash');

var arr = [];
totalNum = 80;

var arr1 = [];

var arr = [];
for (var i = totalNum - 1; i >= 0; i--) {
	var id = i+1;
	var digit = (id % 20) === 0 ? 20 : (id % 20);
	// arr1.push({digit: i + 1, owner: 0});
	arr[i] = digit;
}

// console.log(arr);
var arr = _.shuffle(arr);

var arr1 = _.slice(arr, 0, 14);
var arr2 = _.slice(arr, 14, 29);
var arr3 = _.slice(arr, 29, 43);
var arr4 = _.slice(arr, 43, 57);
var arr5 = _.slice(arr, 57, 80);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(arr4.length);
console.log(arr5.length);
// console.log(JSON.stringify(arr));
// console.log(arr);
// arr = arr1
// console.log(arr1);

// 1
var selfCards =  [];


function arrToCards(arr, owner) {
	if(arr.length  <=0 ) {
		return [];
	}
	var newArr = [];
	_.map(arr, function(num, id) {
		newArr[id] = {
			digit: num,
			owner: owner
		}
		if (id == arr.length - 1) {
			// console.log(arr1);
			return newArr;
		}
	});
}


function cardsToArr(arr) {
	var newArr = [];
	_.map(arr, function(card, id) {

	});
}

var bbb = arrToCards(arr1, 2);
var aaa = _.map(_.sortByAll(bbb, ['digit']), _.values);
console.log(aaa);




