// import mind from './es6-mind.js';
import _ from 'lodash';
// import async from 'async';

/**
 * chi2710
 * @param {Array} handCards
 * @param {Object} entryCard
 * @return {Array} idxArr
 */
function chi2710(handCards, entryCard) {
  console.log('-- chi2710 --');
  const deArr = entryCard.digit > 10 ? [12, 17, 20] : [2, 7, 10];
  const idx = _.indexOf(deArr, entryCard.digit);
  console.log(deArr, entryCard.digit);
  console.log('idx = ' + idx);
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
 * @return {Array} idxArr
 */
function chiShunziStart(handCards, entryCard) {
  console.log('-- chiShunziStart --');
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
 * @return {Array} idxArr
 */
function chiShunziMid(handCards, entryCard) {
  console.log('-- chiShunziMid --');
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
 * @return {Array} idxArr
 */
function chiShunziEnd(handCards, entryCard) {
  console.log('-- chiShunziEnd --');
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
 * @return {Array} idxArr
 */
function chiAAa(handCards, entryCard) {
  console.log('-- chiAAa --');
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

async function checkChi(handCards, entryCard) {
  console.log('-- check-chi --');
  const a1 = await chi2710(handCards, entryCard);
  const a2 = await chiShunziStart(handCards, entryCard);
  const a3 = await chiShunziMid(handCards, entryCard);
  const a4 = await chiShunziEnd(handCards, entryCard);
  const a5 = await chiAAa(handCards, entryCard);
  const arr = [];
  a1 && arr.push(a1);
  a2 && arr.push(a2);
  a3 && arr.push(a3);
  a2 && arr.push(a4);
  a3 && arr.push(a5);
  console.log('chiArr = ' + JSON.stringify(arr));
  return arr;
}

export default checkChi;
