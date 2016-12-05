// import async from 'async';
function checkTianHu() {

}

function check2ti() {

}

function check7duizi() {

}

function checkPaoShuang() {

}

function checkDandiao() {

}

function checkPaoHu
/**
 * checkHu
 * @param {Array} handCards
 * @param {Object} entryCard
 * @return {}
 */
async function checkHu(handCards, entryCard) {
  console.log('----- check hu --');

  const huType = handCards.length % 3;
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

  return arr;
};

export default checkHu;
