import _ from 'lodash';

/**
 * checkRepeat
 * @param {any} handCards
 */
async function checkRepeat(handCards) {
  const list = {};
  await _.map(handCards, (card, id) => {
    const key = card.digit;
    if (!list.hasOwnProperty(key)) {
      list[key] = [];
      list[key].push(card);
    } else {
      list[key].push(card);
    }

    // if (id === handCards.length - 1) {
    //   console.log('------- is end ------');
    //   // return list;
    // }
  });
  console.log('------- is end ------');
  return list;
}


async function pullWeiAndTi(handCards, digit) {
  console.log('-- digit -- ' + digit);
  await _.map(handCards, (card, id) => {
    if (card.digit === digit) {
      handCards.splice(id, 1);
    }
  });
}

/**
 * collectWeiAndTi
 * @param {any} handCards
 * @param {any} ppwtArr
 * @param {any} entryCard
 * @param {any} list
 */
async function collectWeiAndTi(handCards, ppwtArr, entryCard, list) {
  if (!list) {
    list = checkRepeat(handCards);
  }
  console.log('list1 = ' + JSON.stringify(list));
  await _.map(list, (arr, id) => {
    console.log(arr);
    const len = arr.length;
    console.log('-- len = ' + len);
    if (len > 1) {
      ppwtArr.push(arr);
    }
  });
  return ppwtArr;
}

/**
 * checkHu
 * @param {Array} handCards
 * @param {Object} entryCard
 * @return {}
 */
async function checkHandCards(handCards, ppwtArr, entryCard) {
  console.log('-- checkHandCards --');
  const list = await checkRepeat(handCards);
  const newArr = await collectWeiAndTi(handCards, ppwtArr, entryCard, list);
  console.log('-- newArr = ' + JSON.stringify(newArr));
  _.map(newArr, (arr, idx) => {
    // console.log('--------');
    const aa = _.xor(handCards, arr);
    console.log('-- aa = ' + JSON.stringify(aa));
    console.log('--handCards = ' + JSON.stringify(handCards));
  });
}



export default checkHandCards;
