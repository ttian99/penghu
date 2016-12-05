import _ from 'lodash';

function isShunzi(arr) {
  console.log('-- checkShunzi --');
  arr = _.sortBy(arr, 'digit');
  console.log(arr);
  const del1 = arr[0].digit - arr[1].digit;
  const del2 = arr[1].digit - arr[2].digit;
  console.log(del1, del2);
  if ((del1 === 1 || del1 === -1) && del1 === del2) {
    console.log('-- is Shunzi --');
  }
}

function isDazi(arr) {
  console.log('-- checkDazi --');
  const num1 = arr[0].digit;
  const num2 = arr[1].digit;
  const num3 = arr[2].digit;
  const rem1 = arr[0].digit % 10;
  const rem2 = arr[1].digit % 10;
  const rem3 = arr[2].digit % 10;
  if (num1 === num2 && num2 === num3) {
    console.log('-- isWei --');
    return;
  }

  if (rem1 === rem2 && rem2 === rem3) {
    console.log('-- is Dazi !!! --');
    return true;
  } else {
    return false;
  }
}

function is2710(arr) {
  console.log('-- check2710 --');
  const deArr = arr[0].digit > 10 ? [2, 7, 10] : [12, 17, 20];
  let newArr = [arr[0].digit, arr[1].digit, arr[2].digit];
  newArr = _.sortBy(newArr);
  console.log(newArr);
  const rst = _.isEqual(deArr, newArr);
  return rst;
}

function findFangzi(arr) {
  isShunzi();
  isDazi();
  is2710();
}

export default findFangzi;
