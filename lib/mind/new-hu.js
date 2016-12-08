import _ from 'lodash';
import checkChi from './check-chi.js';

async function find1Fangzi(handCards, checkId) {
  const checkArr = _.clone(handCards);
  const checkCard = checkArr[checkId];
  // console.log('-- checkArr -- ' + checkArr.length);
  // _.pullAt(checkArr, checkId);
  // console.log('-- checkArr -- ' + checkArr.length);
  // console.log(JSON.stringify(checkArr));
  // const ret = await checkChi(checkArr, checkCard);
  // const ret = await checkChi(checkArr, checkCard);
  // console.log('==================== ret --')
  // console.log(ret);
  // return ret;
  return await checkChi(checkArr, checkCard);
}

async function checkHu(handCards) {
  const arr = _.clone(handCards);
  const list = {};
  for (let i = 0; i < arr.length; i++) {
    console.log('i = ' + i);
    const isHave = _.has(list, i + '');
    if (!isHave) {
      const checkArr = _.clone(arr);
      const checkCard = checkArr[i];
      _.pullAt(checkArr, i);
      const ret = await checkChi(checkArr, checkCard);
      // const result = find1Fangzi(arr, i);
      console.log('-- ret --');
      console.log(ret);
      list[i + ''] = ret;
    }

    if (i === arr.length - 1) {
      // console.log('list = ' + JSON.stringify(list));
      console.log(list);
    }
  }
}

export default checkHu;
