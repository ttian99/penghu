var _ = require('lodash');

var arr = [];
totalNum = 80;

var arr1 = [];

var arr = [];


var str = [1, 2, 3, 4, 5];
var count = 0;

// function arrange(s) {
// 	for (var i = 0, length = str.length; i < length; i++) {
// 		if (s.length == length - 1) {
// 			if (s.indexOf(str[i]) < 0) {
// 				count++;
// 				console.log("组合" + count + "=" + s + str[i]);
// 			}
// 			continue;
// 		}
// 		if (s.indexOf(str[i]) < 0) {
// 			arrange(s + str[i]);
// 		}
// 	}
// }
// arrange("");

function main() {

	var arr = [
		{digit: 7, owner: 1},
		{digit: 2, owner: 1},
		{digit: 10, owner: 1},
	];

	var arr2 = [
		{digit: 19, owner: 1},
		{digit: 18, owner: 1},
		{digit: 17, owner: 1},
	];

	// checkRepeat(gameArr);

	// isDazi(arr);
	// isWei(arr);
	is2710(arr);
}
main();


for (var i = totalNum - 1; i >= 0; i--) {
	var id = i + 1;
	var digit = (id % 20) === 0 ? 20 : (id % 20);
	// arr1.push({digit: i + 1, owner: 0});
	arr[i] = digit;
}


function createArr(arr) {

	// var arr0 = _.range(1, 81, 1);
	// console.log(JSON.stringify(arr0));

	var arr = _.shuffle(arr);

	var arr1 = _.slice(arr, 0, 14);
	var arr2 = _.slice(arr, 14, 29);
	var arr3 = _.slice(arr, 29, 43);
	var arr4 = _.slice(arr, 43, 57);
	var arr5 = _.slice(arr, 57, 80);

	// arr1 = _.take(arr, 14);
	// arr2 = _.take(arr, 14, 28)
	// arr3 = _.take(arr, 28, 32)
	// arr4 = _.take(arr, 32, 47);
	// arr5 = _.take(arr, 47, 80);

	console.log(JSON.stringify(arr1));
	console.log(JSON.stringify(arr2));
	console.log(JSON.stringify(arr3));
	console.log(JSON.stringify(arr4));
	console.log(JSON.stringify(arr5));

	console.log(arr1.length);
	console.log(arr2.length);
	console.log(arr3.length);
	console.log(arr4.length);
	console.log(arr5.length);
}

// createArr(arr);

// 1
var selfCards = {
	id: 1,
	handCards: []
};


function arrToCards(arr, owner) {
	if (arr.length <= 0) {
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
			// return newArr;

			checkRepeat(newArr);
		}
	});
}

//  
function cardsToArr(arr) {
	var newArr = [];
	_.map(arr, function(card, id) {

	});
}


const testArr1 = [2, 9, 9, 19, 18, 6, 13, 2, 12, 6, 14, 14, 3, 12, 4, 2, 13, 8, 2, 4, 15, 17, 3];
const testArr = [13,19,19,18,1,16,19,7,10,18,20,1,8,3,19];
const gameArr = arrToCards(testArr, 1);
// console.log(gameArr);

function checkRepeat(arr) {
	var list = {};
	_.map(arr, function(card, id) {
		var key = card.digit;
		if (!list.hasOwnProperty(key)) {
			list[key] = [];
			list[key].push(card);
		} else {
			list[key].push(card);
		}

		if (id === arr.length - 1) {
			console.log(list);
		}
	});
}

function checkRepeat1(arr, cb) {
	var list = {};
	_.map(arr, function(card, id) {
		var key = card.digit;
		if (!list.hasOwnProperty(key)) {
			list[key] = [];
			list[key].push(card);
		} else {
			list[key].push(card);
		}

		if (id === arr.length - 1) {
			cb(list);
			console.log(list);
		}
	});
}

var list = {
	'1': [{digit: 1, owner: 1 }, {digit: 1, owner: 1 }], 
	'3': [{digit: 3, owner: 1 }], 
	'7': [{digit: 7, owner: 1 }], 
	'8': [{digit: 8, owner: 1 }], 
	'10': [{digit: 10, owner: 1 }], 
	'13': [{digit: 13, owner: 1 }], 
	'16': [{digit: 16, owner: 1 }], 
	'18': [{digit: 18, owner: 1 }, {digit: 18, owner: 1 }], 
	'19': [{digit: 19, owner: 1 }, {digit: 19, owner: 1 }, {digit: 19, owner: 1 }, {digit: 19, owner: 1 }], 
	'20': [{digit: 20, owner: 1 }] 
};
// console.log(_.size(list['19']))

function checkPPWT(list, enterCard, distance) {
	var digit = enterCard.digit;
	var arr = list[digit];
	if (!arr) {
		// null
	} else if (arr.length <= 1) {
		// null
	} else if (arr.length === 2) {
		// peng/wei
		// rst = (distance > 0) ? 'peng' : 'wei';
	} else if (arr.length === 3) {
		// ti/pao
		// switch() {
		// 	3: (distance) ? 'ti' : 'pao';
		// 	2: if (same.owner === 0) {
		// 		'pao'
		// 	} else {
		// 		entryCard.owner == 0 ? 'pao' : 'null';
		// 	}
		// }
	}
}


function checkChi(list, enterCard, distance) {
	// 1. aaA
	// (digit % 10) === 
	checkChiAAa(list, enterCard);

	// 2. abc
	checkChiABC();

	// 3. 2710 121720
	checkChi2710(list, enterCard);
}

function checkHu() {
	// 1. 7duizi
	// 2. 2ti
	// 3. normal
	// 4. peng+hu
	// 5. wei+hu
	// 6. pao+hu
	// 7.
}


function checkChiAAa() {
	var key;
	if (enterCard.digit > 10) {
		key = enterCard.digit - 10;
	} else {
		key = enterCard.digit + 10;
	}

	var arr = list[digit];
	if (arr && arr.length === 2) {
		// chi:aaA
	} else {
		// null
	}
}

function checkChi2710(enterCard, list) {
	var arr = enterCard.digit > 10 ? [12, 17, 20] : [2, 7, 10];
	var idx = _.indexOf(arr, enterCard.digit);
	if (idx === -1) {
		// null
		return;
	} else {
		// var newArr = _.clone(arr);
		// _.pull(arr, enterCard.digit);
		arr.splice(idx, 1);
		console.log(arr);
		if (_.has(arr[0]) && _.has(arr[1])) {
			// 2710
		} else {
			// null
		}
	}
}

function checkChiABC() {
	var num = enterCard.digit;
	var base = num > 10 ? 10 : 0;
	var checkNum = num - base;

	var inStart = function(num, list) {
		if (checkNum <= 8 && _.has(list, num + 1) && _.has(list, num + 2)) {
			// 123 --> 1
		} else {
			// null
		}
	}

	var inMid = function() {
		if (checkNum <= 9 && checkNum >= 2 && _.has(list, num - 1) && _.has(list, num + 1)) {
			// 123 --> 2
		} else {
			// null
		}
	}

	var inEnd = function() {
		if (checkNum >= 3 && _.has(list, num - 2) && _.has(list, num - 1)) {
			// 123 --> 3
		} else {
			// null
		}
	}

		inStart();
		inMid();
		inEnd();
}

function checkFangzi(arr) {
	isDazi(arr);
	isShunzi(arr);
	is2710(arr);
}

function isShunzi(arr) {
	console.log('checkShunzi')
	arr = _.sortBy(arr, 'digit');
	console.log(arr);
	var del1 = arr[0].digit - arr[1].digit;
	var del2 = arr[1].digit - arr[2].digit;
	console.log(del1, del2)
	if ((del1 === 1 || del1 === -1) && del1 === del2) {
		console.log('is Shunzi');
	}
}

function isDazi(arr) {
	console.log('checkDazi');
	var num = arr[0].digit % 10;
	var num1 = arr[1].digit % 10;
	var num2 = arr[2].digit % 10;
	console.log(num, num1, num2);
	if (num === num1 && num1 === num2) {
		console.log('is Dazi !!!');
		return true;
	} else {
		return false;
	}
}

function is2710(arr) {
	console.log('check2710');
	var deArr = arr[0].digit > 10 ? [2, 7, 10] : [12, 17, 20];
	var newArr = [arr[0].digit, arr[1].digit, arr[2].digit];
	newArr = _.sortBy(newArr);
	console.log(newArr);
	var is2710 = _.isEqual(deArr, newArr);
	return is2710;
}

function isWei(arr) {
	console.log('checkWei')
	arr = _.sortBy(arr, 'digit');
	console.log(arr);
	var del1 = arr[0].digit - arr[1].digit;
	var del2 = arr[1].digit - arr[2].digit;
	console.log(del1, del2)
	if (del1 === 0 && del1 === del2 ) {
		console.log('is Wei !!!');
	} 
}


var handCard = {
	isBanker: true,
	handCard: [],
	tableCard: []
};

outCards = [];

