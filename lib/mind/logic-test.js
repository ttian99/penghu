import mockData from './mock-data.js';
import checkChi from './check-chi.js';
import checkRepeat from './check-handCards.js';
import checkHu from './new-hu.js';

function testChi() {
  checkChi(mockData.otherCards, mockData.entryCard);
}

function testCheckHandCards() {
  checkRepeat(mockData.bankerCards, mockData.ppwtArr, mockData.entryCard);
}

function testCheckHu(){
	checkHu(mockData.bankerCards);
}

function main() {
  // testChi();
  // testCheckHandCards();
  testCheckHu();
}

main();
