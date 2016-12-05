import mockData from './mock-data.js';
import checkChi from './check-chi.js';
import checkRepeat from './check-handCards.js';

function testChi() {
  checkChi(mockData.otherCards, mockData.entryCard);
}

function testCheckHandCards() {
  checkRepeat(mockData.bankerCards, mockData.ppwtArr, mockData.entryCard);
}

function main() {
  // testChi();
  testCheckHandCards();
}

main();
