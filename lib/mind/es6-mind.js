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

mind.checkHu = () => {
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
  const num = arr[0].digit % 10;
  const num1 = arr[1].digit % 10;
  const num2 = arr[2].digit % 10;
  console.log(num, num1, num2);
  if (num === num1 && num1 === num2) {
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
}

test();
