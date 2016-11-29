// import mind from './es6-mind.js';
import _ from 'lodash';
// import async from 'async';

/**
 * chi2710
 * @param {Array} handCards
 * @param {Object} entryCard
 * @returns
 */
function chi2710(handCards, entryCard) {
  const deArr = entryCard.digit > 10 ? [12, 17, 20] : [2, 7, 10];
  const idx = _.indexOf(deArr, entryCard.digit);
  if (idx === -1) {
    return null;
  } else {
    deArr.splice(idx, 1);
    const idx1 = _.findIndex(handCards, (card) => {
      return card.digit === deArr[0];
    });
    const idx2 = _.findIndex(handCards, (card) => {
      return card.digit === deArr[1];
    });
    console.log('idx1 = ' + idx1 + ' , idx2 = ' + idx2);
    if (idx1 >= 0 && idx2 >= 0) {
      const ret = [idx1, idx2];
      return ret;
    } else {
      return null;
    }
  }
}

/**
 * chiShunziStart
 * @param {any} handCards
 * @param {any} entryCard
 * @returns
 */
function chiShunziStart(handCards, entryCard) {
  console.log('------- chiShunziStart --------');
  const num = entryCard.digit;
  const base = num > 10 ? 10 : 0;
  const checkNum = num - base;

  const idx1 = _.findIndex(handCards, (card) => {
    return card.digit === num + 1;
  });
  const idx2 = _.findIndex(handCards, (card) => {
    return card.digit === num + 2;
  });

  if (checkNum <= 8 && idx1 >= 0 && idx2 >= 0) {
    const ret = [idx1, idx2];
    return ret;
  } else {
    return null;
  }
}


/**
 * chiShunziMid
 * @param {Array} handCards
 * @param {Object} entryCard
 * @returns
 */
function chiShunziMid(handCards, entryCard) {
  console.log('--------- chiShunziMid -----------');
  const num = entryCard.digit;
  const base = num > 10 ? 10 : 0;
  const checkNum = num - base;

  const idx1 = _.findIndex(handCards, (card) => {
    return card.digit === num - 1;
  });
  const idx2 = _.findIndex(handCards, (card) => {
    return card.digit === num + 1;
  });

  if (checkNum <= 9 && checkNum >= 2 && idx1 >= 0 && idx2 >= 0) {
    const ret = [idx1, idx2];
    return ret;
  } else {
    return null;
  }
}

/**
 * chiShunziEnd
 * @param {Array} handCards
 * @param {Object} entryCard
 * @returns
 */
function chiShunziEnd(handCards, entryCard) {
  console.log('------- chiShunziEnd --------');
  const num = entryCard.digit;
  const base = num > 10 ? 10 : 0;
  const checkNum = num - base;

  const idx1 = _.findIndex(handCards, (card) => {
    return card.digit === num - 1;
  });
  const idx2 = _.findIndex(handCards, (card) => {
    return card.digit === num - 2;
  });

  if (checkNum >= 3 && idx1 >= 0 && idx2 >= 0) {
    const ret = [idx1, idx2];
    return ret;
  } else {
    return null;
  }
}

/**
 * checkChiAAa
 * @param {Array} handCards
 * @param {Object} entryCard
 * @returns
 */
function chiAAa(handCards, entryCard) {
  console.log('-- checkChi --');
  const checkNum = entryCard.digit > 10 ? entryCard.digit - 10 : entryCard.digit;
  const big1 = _.findIndex(handCards, (card) => {
    return card.digit === (checkNum + 10);
  });
  const big2 = _.findLastIndex(handCards, (card) => {
    return card.digit === (checkNum + 10);
  });
  const small1 = _.findIndex(handCards, (card) => {
    return card.digit === checkNum;
  });
  const small2 = _.findLastIndex(handCards, (card) => {
    return card.digit === checkNum;
  });
  console.log('-- big1 = ' + big1 + ' , big2 = ' + big2 + ' , small1 = ' + small1 + ' , small2 = ' + small2);

  let ret = [];
  if (big1 >= 0 && small1 >= 0 ) {
    ret = [big1, small1];
  }
  if (big1 >= 0 && big2 >= 0 && entryCard.digit < 10 && big1 !== big2) {
    ret = [big1, big2];
  }
  if (small1 >= 0 && small2 >= 0 && entryCard.digit > 10 && small1 !== small2) {
    ret = [small1, small2];
  }
  if (ret.length < 1) {
    ret = null;
  }
  return ret;
}

// function chiTotal(handCards, entryCard) {
//   /*  chiShunziStart need vars */
//   const [idxBig1, idxBig2, idxSmall1, idxSmall2, idxAdd1, idxAdd2, idxRed1, idxRed2] = [-1, -1, -1, -1, -1, -1, -1, -1];

//   /*  chi2710 need vars */
//   // const arr2710 = entryCard.digit > 10 ? [12, 17, 20] : [2, 7, 10];
//   // const idx2710 = _.findIndex(arr2710, entryCard.digit);

//   /*  chiShunziStart need vars */
//   // const checkNum = (entryCard.digit > 10) ? (entryCard.digit - 10) : entryCard.digit;
//   // const [idxAdd1, idxAdd2] = [-1, -1];

//   /*  chiShunziStart need vars */
//   // const idxRed1, idxRed2;

//   /*  chiShunziStart need vars */
//   console.log(idxBig1, idxBig2, idxSmall1, idxSmall2, idxAdd1, idxAdd2, idxRed1, idxRed2);

//   _.map(handCards, (card, id) => {
//     console.log('id === ' + id);
//     const num = card.digit;
//     if (num === ) {

//     }
//   });
// }

const list = [
  {digit: 2, owner: 1},
  {digit: 1, owner: 1},
  {digit: 3, owner: 1},
  {digit: 12, owner: 1},
  {digit: 6, owner: 1},
  {digit: 4, owner: 1},
  {digit: 17, owner: 1},
  {digit: 5, owner: 1},
  {digit: 7, owner: 1},
  {digit: 2, owner: 1},
  {digit: 8, owner: 1},
  {digit: 10, owner: 1},
  {digit: 4, owner: 1},
  {digit: 9, owner: 1},
];

const eCard = {
  digit: 7,
  owner: 0,
};

async function checkChi(handCards, entryCard) {
  console.log('----- chi --');
  const a1 = await chi2710(list, eCard);
  const a2 = await chiShunziStart(list, eCard);
  const a3 = await chiShunziMid(list, eCard);
  const a4 = await chiShunziEnd(list, eCard);
  const a5 = await chiAAa(list, eCard);
  // console.log(a1, a2, a3, a4, a5);
  const arr = [];
  arr.push(a1, a2, a3, a4, a5);
  console.log(arr);
  return arr;

// readFile(fileA)
// .then(function(data){
//   console.log(data.toString());
// })
// .then(function(){
//   return readFile(fileB);
// })
// .then(function(data){
//   console.log(data.toString());
// })
// .catch(function(err) {
//   console.log(err);
// });
};

export default checkChi;
