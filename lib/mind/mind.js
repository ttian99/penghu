var _ = require('lodash');

var arr = [7, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 14];
var arr1 = [11, 3, 2, 4, 2, 5, 6, 9, 12, 12, 13, 14, 15, 1, 1];
// var ret = find2710(arr);
// var ret1 = findDazi(arr1);
// console.log(ret)
  // console.log(ret1)

/**
 * 吃牌的类型:
 * 1.dazi
 * 2.2710
 * 3.shunzi_start
 * 4.shunzi_mid
 * 5.shunzi_end
 */

/**
 * 检测逻辑大致思路
 * 1.要胡牌，必须满足任意一张牌可以同其他牌组成‘放子’
 * 2.以数组的第一张牌为开始牌，在数组内找可与之构成‘放子’的2张牌。
 * 3.若可找到则从数组中移除该放子，生成新数组，再将新数组进行第2步骤操作，依次递归，直至数组长度为0或者找不到构成‘放子’的2张牌。
 * ****/
function checkHu(arr) {
  // var resultArr = [];
  // var newArr = _.clone(arr);
  // if (arr.length === 0) {
  //   return {
  //     isHu: true,
  //     arr: []
  //   }
  // } else {
  //   findFangzi(arr);
  // }
  findFangzi(arr);

}
// var arr =  new Array(3876);
// for (var i = 0; i< arr.length; i++){
//   console.log(i);
// }

function findFangzi(arr, retObj) {
  count++;
  console.log('---------- findFangzi new ----------- ' + count);
  var ret = {hu: false, result: []};
  if (retObj) {
    ret.hu = retObj.hu;
    ret.result = retObj.hu;
  }
  if (arr.length === 0) {
    console.log('------ hu -----');
    return {hu: true, result: [] }
  } else {
    var newArr = _.clone(arr);
    getNew(newArr, ret);
  }
  // // var newArr = _.clone(arr);
  // // console.log(newArr.length);
  // // var len = newArr.length / 3;
  // // console.log('len = ' + len);

  // var result = [];
  // getNew(newArr);
}

var count = 0;

// var ret = {hu: false, result: [] }; 
function getNew(arr, retObj) {
  var ret = retObj || {hu: false, result: []};
  console.log('---------- get New ----------- ' + count);
  console.log(JSON.stringify(retObj));
  console.log('retObj.result.length = ' +ret.result.length);
  var idxArr = [];
  // var fangLen =  arr.length / 3;
  var arr1 = findDazi(arr);
  var arr2 = find2710(arr);
  var arr3 = findShunziStart(arr);
  var arr4 = findShunziMid(arr);
  var arr5 = findShunziEnd(arr);
  arr1.length > 0 && idxArr.push(arr1);
  arr2.length > 0 && idxArr.push(arr2);
  arr3.length > 0 && idxArr.push(arr3);
  arr4.length > 0 && idxArr.push(arr4);
  arr5.length > 0 && idxArr.push(arr5);

  console.log(idxArr.length);
  console.log(idxArr);

  if (count > 1) {
    return;
  }
  if (idxArr.length > 0) {
    console.log('--- length > 0 ---')
    _.map(idxArr, function(rmArr, id) {
      var tArr = _.clone(arr);
      if (rmArr.length < 1) {
        return;
      }
      var fang = _.pullAt(tArr, rmArr[0], rmArr[1], rmArr[2]);
      // console.log('-- tArr2 -- ' + JSON.stringify(tArr));
      // console.log('-- evens -- ' + JSON.stringify(fang));
      ret.hu = false;
      ret.result.push(fang);
      // getNew(arr, ret);
      findFangzi(tArr, ret);
    }); 
  } else {
    console.log('--- else ---')
    ret.hu = false;
    ret.result = [];
    return ret;
  }
}

function findDazi(arr) {
  var num = arr[0] % 10;
  var idx1 = _.findIndex(arr, function(card, id) {
    return (card % 10) === num && id !== 0;
  });
  var idx2 = _.findLastIndex(arr, function(card, id) {
    return (card % 10) === num && id !== 0;
  });
  if (idx1 >= 0 && idx2 >= 0 && idx1 !== idx2) {
    return [0, idx1, idx2];
  } else {
    return [];
  }
}

function find2710(arr) {
  var defaultArr = arr[0] > 10 ? [12, 17, 20] : [2, 7, 10];
  var idx = _.indexOf(defaultArr, arr[0]);
  if (idx === -1) {
    return [];
  } else {
    // var newArr = _.clone(arr);
    defaultArr.splice(idx, 1);
    var idx1 = _.indexOf(arr, defaultArr[0]);
    var idx2 = _.indexOf(arr, defaultArr[1]);
    // console.log(arr);
    // var idx1 = _.findIndex(arr, function(card) {
    //   return card === defaultArr[0];
    // });
    // var idx2 = _.findIndex(arr, function(card) {
    //   return card === defaultArr[1];
    // });

    if (idx1 >= 0 && idx2 >= 0) {
      return [0, idx1, idx2];
    } else {
      return [];
    }
  }
}

function findShunziStart() {
  var startCard = arr[0];
  var checkNum = (startCard > 10) ? (startCard - 10) : startCard;
  if (checkNum > 8) {
    return [];
  } else {
    var idx1 = _.indexOf(arr, (startCard + 1));
    var idx2 = _.indexOf(arr, (startCard + 2));
    if (idx1 >= 0 && idx2 >= 0) {
      return [0, idx1, idx2];
    } else {
      return [];
    }
  }
}

function findShunziMid() {
  var startCard = arr[0];
  var checkNum = (startCard > 10) ? (startCard - 10) : startCard;
  if (checkNum > 9 || checkNum < 2) {
    return [];
  } else {
    var idx1 = _.indexOf(arr, (startCard - 1));
    var idx2 = _.indexOf(arr, (startCard + 1));
    if (idx1 >= 0 && idx2 >= 0) {
      return [0, idx1, idx2];
    } else {
      return [];
    }
  }
}

function findShunziEnd() {
  var startCard = arr[0];
  var checkNum = (startCard > 10) ? (startCard - 10) : startCard;
  if (checkNum < 3) {
    return [];
  } else {
    var idx1 = _.indexOf(arr, (startCard - 1));
    var idx2 = _.indexOf(arr, (startCard - 2));
    if (idx1 >= 0 && idx2 >= 0) {
      return [0, idx1, idx2];
    } else {
      return [];
    }
  }
}

// function findShunzi(arr) {
//   var startCard = arr[0];
//   var checkNum = (startCard > 10) ? (startCard - 10) : startCard;

//   function inStart(arr, startCard) {
//     if (checkNum > 8) {
//       return [];
//     } else {
//       var idx1 = _.indexOf(arr, (startCard + 1));
//       var idx2 = _.indexOf(arr, (startCard + 2));
//       if (idx1 >= 0 && idx2 >= 0) {
//         return [0, idx1, idx2];
//       } else {
//         return [];
//       }
//     }
//   }

//   function inMid(arr, startCard) {
//     if (checkNum > 9 || checkNum < 2) {
//       return [];
//     } else {
//       var idx1 = _.indexOf(arr, (startCard - 1));
//       var idx2 = _.indexOf(arr, (startCard + 1));
//       if (idx1 >= 0 && idx2 >= 0) {
//         return [0, idx1, idx2];
//       } else {
//         return [];
//       }
//     }
//   }

//   function inEnd(arr, startCard) {
//     if (checkNum < 3) {
//       return [];
//     } else {
//       var idx1 = _.indexOf(arr, (startCard - 1));
//       var idx2 = _.indexOf(arr, (startCard - 2));
//       if (idx1 >= 0 && idx2 >= 0) {
//         return [0, idx1, idx2];
//       } else {
//         return [];
//       }
//     }
//   }
// }

findFangzi(arr);
return;

function main() {

  var arr = [{
    digit: 7,
    owner: 1
  }, {
    digit: 2,
    owner: 1
  }, {
    digit: 10,
    owner: 1
  }, ];
  var arr2 = [{
    digit: 19,
    owner: 1
  }, {
    digit: 18,
    owner: 1
  }, {
    digit: 17,
    owner: 1
  }, ];
  // checkRepeat(gameArr);

  // isDazi(arr);
  // isWei(arr);
  // is2710(arr);

  // countToCard(45, 2);
  // createArr();
  var arr11 = [1, 2, 3]
  var arr22 = [1, 2, 3]
  var ass = _.isEqual(arr11, arr22);
  console.log('ass = ' + ass);
}
main();

// test group
function group(arr, groupl, result) {

  var result = result ? result : [];
  var arrLen = arr.length;
  var outloopl = arrLen - groupl;

  var nuc = arr.slice(0);

  var item = nuc.shift();
  item = item.constructor === Array ? item : [item];


  (function func(item, nuc) {
    var itemc;
    var nucc = nuc.slice(0);
    var margin = groupl - item.length


    if (margin == 0) {
      result.push(item);
      return;
    }
    if (margin == 1) {
      for (var j in nuc) {
        itemc = item.slice(0);
        itemc.push(nuc[j]);
        result.push(itemc);
      }
    }
    if (margin > 1) {
      itemc = item.slice(0);
      itemc.push(nucc.shift());
      func(itemc, nucc);

      if (item.length + nucc.length >= groupl) {
        func(item, nucc);
      }

    }

  })(item, nuc);


  if (nuc.length >= groupl) {
    return group(nuc, groupl, result);
  } else {
    return result;
  }

}

var arr = group([
  [1, 2], 3, 4, 5, 5, 5
], 3);
// var arr2 = group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3);
console.log(arr.length);
console.log(arr);
arr = _.uniq(arr);
console.log(arr);
return;
/******************************************************************************/

// create the total card arr
function createArr() {
  // create arr
  var res = _.range(1, 81, 1);
  // shuffle
  var arr = _.shuffle(res);

  var arr0 = _.slice(arr, 0, 23);
  var arr1 = _.slice(arr, 23, 38);
  var arr2 = _.slice(arr, 38, 52);
  var arr3 = _.slice(arr, 52, 66);
  var arr4 = _.slice(arr, 66, 80);

  // console.log(JSON.stringify(arr0));
  // console.log(JSON.stringify(arr1));
  // console.log(JSON.stringify(arr2));
  // console.log(JSON.stringify(arr3));
  // console.log(JSON.stringify(arr4));

  // console.log(arr0.length);
  // console.log(arr1.length);
  // console.log(arr2.length);
  // console.log(arr3.length);
  // console.log(arr4.length);

  var data = {
    '0': arr0,
    '1': arr1,
    '2': arr2,
    '3': arr3,
    '4': arr4
  }
  return data;
}

// create card by count
function countToCard(count, owner) {
  var digit = (count % 20) === 0 ? 20 : (count % 20);
  var card = {
    digit: digit,
    owner: owner
  };
  return card;
}

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
const testArr = [13, 19, 19, 18, 1, 16, 19, 7, 10, 18, 20, 1, 8, 3, 19];
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
  '1': [{
    digit: 1,
    owner: 1
  }, {
    digit: 1,
    owner: 1
  }],
  '3': [{
    digit: 3,
    owner: 1
  }],
  '7': [{
    digit: 7,
    owner: 1
  }],
  '8': [{
    digit: 8,
    owner: 1
  }],
  '10': [{
    digit: 10,
    owner: 1
  }],
  '13': [{
    digit: 13,
    owner: 1
  }],
  '16': [{
    digit: 16,
    owner: 1
  }],
  '18': [{
    digit: 18,
    owner: 1
  }, {
    digit: 18,
    owner: 1
  }],
  '19': [{
    digit: 19,
    owner: 1
  }, {
    digit: 19,
    owner: 1
  }, {
    digit: 19,
    owner: 1
  }, {
    digit: 19,
    owner: 1
  }],
  '20': [{
    digit: 20,
    owner: 1
  }]
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

// ！！！---aAa类型的吃有问题---！！！
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
    var rst = arr;
    return arr;
  } else {
    // null
    return null;
  }
}

function checkChi2710(enterCard, list) {
  var arr = enterCard.digit > 10 ? [12, 17, 20] : [2, 7, 10];
  var idx = _.indexOf(arr, enterCard.digit);
  if (idx === -1) {
    // null
    return null;
  } else {
    // var newArr = _.clone(arr);
    // _.pull(arr, enterCard.digit);
    arr.splice(idx, 1);
    console.log(arr);
    if (_.has(arr[0]) && _.has(arr[1])) {
      // 2710
      var arr = [{
        digit: arr[0]
      }, {
        digit: arr[1]
      }];
      return arr;
    } else {
      // null
      return null;
    }
  }
}

function checkChiABC(eneryCard, list) {
  var num = eneryCard.digit;
  var base = num > 10 ? 10 : 0;
  var checkNum = num - base;

  var inStart = function(num, list) {
    if (checkNum <= 8 && _.has(list, num + 1) && _.has(list, num + 2)) {
      // 123 --> 1
      var arr = [{
        digit: num + 1
      }, {
        digit: num + 2
      }];
      return arr;
    } else {
      // null
      return null;
    }
  }

  var inMid = function(num, list) {
    if (checkNum <= 9 && checkNum >= 2 && _.has(list, num - 1) && _.has(list, num + 1)) {
      // 123 --> 2
      var arr = [{
        digit: num - 1
      }, {
        digit: num + 1
      }];
      return arr;
    } else {
      // null
      return null;
    }
  }

  var inEnd = function(num, list) {
    if (checkNum >= 3 && _.has(list, num - 2) && _.has(list, num - 1)) {
      // 123 --> 3
      var arr = [{
        digit: num - 2
      }, {
        digit: num - 1
      }];
      return arr;
    } else {
      // null
      return null;
    }
  }

  var startArr = inStart(num, list);
  var midArr = inMid(num, list);
  var endArr = inEnd(num, list);
  var rstArr = [];
  startArr && rstArr.push(startArr);
  midArr && rstArr.push(midArr);
  endArr && rstArr.push(endArr);
  var type = rstArr.length > 0 ? 'chi' : 'nothing';
  return {
    type: type,
    list: rstArr
  };
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
  if (del1 === 0 && del1 === del2) {
    console.log('is Wei !!!');
  }
}


var handCard = {
  isBanker: true,
  id: 1,
  handCard: [],
  tableCard: []
};

outCards = [];