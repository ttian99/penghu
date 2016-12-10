import _ from 'lodash';
import checkChi from './check-chi.js';

async function checkFangzi(list) {
  console.log('--- check --');
  const len = _.size(list);
  console.log('-- len -- ' + len);
  // _.map(list, (arr, idx) => {
  //   console.log('-- idx = ' + idx);
  //   const len = arr.length;
  //   if (len === 0) {
  //     console.log('-- len === 0 --');
  //     return;
  //   } else if (len === 1) {
  //     console.log('-- len === 1 -- ');
  //   } else {
  //     console.log('== len > 1 ==');
  //   }
  // });
}

async function findFangzi(handCards) {
  const arr = _.cloneDeep(handCards);
  const list = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log('-- i = ' + i);
    const key = _.clone(arr[i].digit);
    if (!_.has(list, key)) {
      const checkCard = _.clone(arr[i]);
      const checkArr = _.cloneDeep(arr);
      checkArr[i].digit = 0;
      const ret = await checkChi(checkArr, checkCard);
      list[key + ''] = ret;
      // arr[i].digit = checkCard.digit;
    } else {
      console.log('-- list has repeat key = ' + key);
    }
  }
  console.log('--arr--');
  console.log(JSON.stringify(arr));
  return list;
}

async function checkHu(handCards) {
  const list = await findFangzi(handCards);
  console.log('-- list --');
  console.log(list);
  checkFangzi(list);
}

export default checkHu;
