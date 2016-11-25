import _ from 'lodash';
const mind = {};
mind.data = {};  // data for thisGame

mind.creatArr = () => {
  console.log('==mind==');
  // create arr
  const res = _.range(1, 81, 1);
  // shuffle
  const arr = _.shuffle(res);

  const arr2 = _.slice(arr, 38, 52);
  const arr0 = _.slice(arr, 0, 23);
  const arr1 = _.slice(arr, 23, 38);
  const arr3 = _.slice(arr, 52, 66);
  const arr4 = _.slice(arr, 66, 80);

  const data = {
    '0': arr0,
    '1': arr1,
    '2': arr2,
    '3': arr3,
    '4': arr4,
  };

  mind.data = data;
  return data;
};

// create Card by count
function countToCard(count, owner) {
  const digit = (count % 20) === 0 ? 20 : (count % 20);
  const card = { digit: digit, owner: owner };
  return card;
}
// 
mind.arrToCards = (arr, owner) => {
  if (arr.length <= 0) {
    return [];
  }
  const newArr = [];
  _.map(arr, (num, id) => {
    newArr[id] = {
      digit: num,
      owner: owner,
    };
    if (id === arr.length - 1) {
      // console.log(arr1);
      // return newArr;
      return newArr;
      // checkRepeat(newArr);
    }
  });
};
//
mind.checkRepeat = (arr) => {
  const list = {};
  _.map(arr, (card, id) => {
    const key = card.digit;
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
};

/**
 * check the duizi of handCards
 * @param repeatList {Object}
 * @return duiziObj {Object}
 */
mind.checkduizi = (list) => {
  const duiziArr = [];
  const duiziCount = 0;
  _.map(list, (item, key) => {
    console.log('key = ' + key);
    const len = item.length;
    if(len === 2) {
      duiziArr.push(key);
      duiziCount++;
    }
  });
}

// check peng/wei
mind.checkPPWT = (list, enterCard, distance) => {
  const digit = enterCard.digit;
  const arr = list[digit];
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
};

mind.checkChi = (list, enterCard, distance) => {
  // 1. aaA
  // (digit % 10) === 
  checkChiAAa(list, enterCard);

  // 2. abc
  checkChiABC();

  // 3. 2710 121720
  checkChi2710(list, enterCard);
};

mind.checkHu = (handCards, enterCard) => {
  var huType = handCards.length % 3;
  if (huType === 0) { // 15 handcards
    // checkTianHu();
    // check2ti();
    // check7duizi();
  } else if (huType === 1) { // hupai with pao/ti
    // 6. pao+hu(paoshuang)
    // 12. pao => dandiao
    // 13. pao => hupai
  } else { // normal hupai 
  }

  // 1. 7duizi
  // 2. 2ti
  // 3. tianhu
  // 3. normal
  // 4. peng+hu
  // 5. wei+hu
  // 6. pao+hu(paoshuang)
  // 7. ti+hu
  // 8. 3peng+hu
  // 9. 3wei+hu
  // 10. 4peng/wei + hu
  // 11. 5fu
  // 12. pao => dandiao
  // 13. pao => hupai
};

mind.checkHuDandiao = (handcards, enterCard) => {
  const arr = _.clone(handcards.arr);
  const num = enterCard.digit;
  const idx = _.findIndex(arr, function(card) {
    return card.digit === num;
  });
  if (idx < 0) {
    return false;
  } else {
    arr = arr.splice(idx, 1);
  }
}


function checkChiAAa(entryCard, list) {
  let key;
  if (entryCard.digit > 10) {
    key = entryCard.digit - 10;
  } else {
    key = entryCard.digit + 10;
  }

  const arr = list[key];
  if (arr && arr.length === 2) {
    // chi:aaA
    // const rst = arr;
    return arr;
  } else {
    // null
    return null;
  }
}


function checkChi2710(enterCard, list) {
  const arr = enterCard.digit > 10 ? [12, 17, 20] : [2, 7, 10];
  const idx = _.indexOf(arr, enterCard.digit);
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
      const rst = [{ digit: arr[0] }, { digit: arr[1] }];
      return rst;
    } else {
      // null
      return null;
    }
  }
}

function checkChiABC(eneryCard, list) {
  const num = eneryCard.digit;
  const base = num > 10 ? 10 : 0;
  const checkNum = num - base;

  const inStart = () => {
    if (checkNum <= 8 && _.has(list, num + 1) && _.has(list, num + 2)) {
      // 123 --> 1
      const arr = [{ digit: num + 1 }, { digit: num + 2 }];
      return arr;
    } else {
      // null
      return null;
    }
  };

  const inMid = () => {
    if (checkNum <= 9 && checkNum >= 2 && _.has(list, num - 1) && _.has(list, num + 1)) {
      // 123 --> 2
      const arr = [{ digit: num - 1 }, { digit: num + 1 }];
      return arr;
    } else {
      // null
      return null;
    }
  };

  const inEnd = () => {
    if (checkNum >= 3 && _.has(list, num - 2) && _.has(list, num - 1)) {
      // 123 --> 3
      const arr = [{ digit: num - 2 }, { digit: num - 1 }];
      return arr;
    } else {
      // null
      return null;
    }
  };

  const startArr = inStart(num, list);
  const midArr = inMid(num, list);
  const endArr = inEnd(num, list);
  const rstArr = [];
  startArr && rstArr.push(startArr);
  midArr && rstArr.push(midArr);
  endArr && rstArr.push(endArr);
  const type = rstArr.length > 0 ? 'chi' : 'nothing';
  return { type: type, list: rstArr };
}


mind.checkFangzi = (arr) => {
  isDazi(arr);
  isShunzi(arr);
  is2710(arr);
};

mind.isShunzi = (arr) => {
  console.log('checkShunzi');
  arr = _.sortBy(arr, 'digit');
  console.log(arr);
  const del1 = arr[0].digit - arr[1].digit;
  const del2 = arr[1].digit - arr[2].digit;
  console.log(del1, del2);
  if ((del1 === 1 || del1 === -1) && del1 === del2) {
    console.log('is Shunzi');
  }
};

mind.isDazi = (arr) => {
  console.log('checkDazi');
  const num1 = arr[0].digit;
  const num2 = arr[1].digit;
  const num3 = arr[2].digit;
  const rem1 = arr[0].digit % 10;
  const rem2 = arr[1].digit % 10;
  const rem3 = arr[2].digit % 10;
  if (num1 === num2 && num2 === num3) {
    console.log('isWei');
    return;
  }

  if (rem1 === rem2 && rem2 === rem3) {
    console.log('is Dazi !!!');
    return true;
  } else {
    return false;
  }
};

mind.is2710 = (arr) => {
  console.log('check2710');
  const deArr = arr[0].digit > 10 ? [2, 7, 10] : [12, 17, 20];
  let newArr = [arr[0].digit, arr[1].digit, arr[2].digit];
  newArr = _.sortBy(newArr);
  console.log(newArr);
  const rst = _.isEqual(deArr, newArr);
  return rst;
};

function isWei(arr) {
  console.log('checkWei');
  arr = _.sortBy(arr, 'digit');
  console.log(arr);
  const del1 = arr[0].digit - arr[1].digit;
  const del2 = arr[1].digit - arr[2].digit;
  console.log(del1, del2);
  if (del1 === 0 && del1 === del2) {
    console.log('is Wei !!!');
  }
}


const handCard = {
  isBanker: true,
  id: 1,
  handCard: [],
  chiArr: [],
  pengArr: [],
};


const arrCard = [1,3,4,5,8,9,16,19,12,2,5,3,8,2];   

// perm(arr,0,arr.length-1);

function swap(id1, id2) {  
  let temp = arrCard[id2];  
  arrCard[i2] = arrCardCard[id1];  
  arrCard[i1] = temp;
};  

/** 
* 对arr数组中的begin~end进行全排列  
* 比如：
*  arr = {1,2,3}
*  第一步：执行 perm({1,2,3},0,2),begin=0,end=2;
     *      j=0,因此执行perm({1,2,3},1,2),begin=1,end=2;
     *          j=1,swap(arr,0,0)-->arr={1,2,3},  perm({1,2,3},2,2),begin=2,end=2;
     *              因为begin==end，因此输出数组{1,2,3}
     *          swap(arr,1,1) --> arr={1,2,3};
     *          j=2,swap(arr,1,2)-->arr={1,3,2},  perm({1,3,2},2,2),begin=2,end=2;
     *              因为begin==end，因此输出数组{1,3,2}
     *          swap(arr,2,1) --> arr={1,2,3};
     *      j=1,swap(arr,0,1) --> arr={2,1,3},     perm({2,1,3},1,2),begin=1,end=2;
     *          j=1,swap(arr,1,1)-->arr={2,1,3}   perm({2,1,3},2,2),begin=2,end=2;
     *              因为begin==end，因此输出数组{2,1,3}
     *          swap(arr,1,1)--> arr={2,1,3};
     *          j=2,swap(arr,1,2)后 arr={2,3,1},并执行perm({2,3,1},2,2),begin=2,end=2;
     *              因为begin==end，因此输出数组{2,3,1}
     *          swap(arr,2,1) --> arr={2,1,3};
     *      swap(arr,1,0)  --> arr={1,2,3}
     *      j=2,swap(arr,2,0) --> arr={3,2,1},执行perm({3,2,1},1,2),begin=1,end=2;
     *          j=1,swap(arr,1,1) --> arr={3,2,1} , perm({3,2,1},2,2),begin=2,end=2;
     *              因为begin==end，因此输出数组{3,2,1}
     *          swap(arr,1,1) --> arr={3,2,1};
     *          j=2,swap(arr,2,1) --> arr={3,1,2},并执行perm({2,3,1},2,2),begin=2,end=2;
 *              因为begin==end，因此输出数组{3,1,2}
 *          swap(arr,2,1) --> arr={3,2,1};
 *      swap(arr,0,2) --> arr={1,2,3}
 *
 * @param arr
* @param begin
* @param end，因此输出数组
*/

function perm(arr, begin, end) {
  if (end === begin) {         // 一到递归的出口就输出数组，此数组为全排列
    for (let i = 0; i <= end; i++) {
      console.log(arr[i] + '');
    }
    return;
  } else {
    for (let j = begin; j <= end; j++) {
      swap(begin, j);      // for循环将begin~end中的每个数放到begin位置中去
      perm(arr, begin + 1, end);  // 假设begin位置确定，那么对begin+1~end中的数继续递归
      swap(begin, j);      // 换过去后再还原
    }
  }
};

function test() {
  const data = mind.creatArr();
  // console.log(data);
  // var data.player1 = await mind.arrToCards(data['0'], 0);
  // var data.player2 = await mind.arrToCards(data['1'], 1);
  // var data.player3 = await mind.arrToCards(data['2'], 2);
  // var data.player4 = await mind.arrToCards(data['3'], 3);
  // var data.player5 = await mind.arrToCards(data['4'], 4);
  // console.log(data.player1);
  console.log(data['0']);
  const arr = data['0'];
  const arr0 = mind.arrToCards(arr, 0);
  console.log(arr0)

  // mind.checkduizi(repeatList);
}

test();
