import _ from 'lodash';
import checkChi from './check-chi.js'

function checkHu(handCards) {
	let arr = _.clone(handCards);
	const list = {};
	for (const i = 0; i < arr.length; i++) {
		console.log('i = ' + i);
		const isHave = _.has(list, i + '');
		if (!isHave) {
			const result = await find1Fangzi(arr, i);
			list[i + ''] = result;
		}

		if (i === arr.length - 1) {
			console.log('list = ' + JSON.stringify(list));
		}
	}
}


async function find1Fangzi(handCards, checkId) {
    let arr = _.clone(handCards);
    const checkCard = arr[checkId];
    const checkArr = _.pullAt(ar, checkId);
    const ret = await checkChi(checkArr, checkCard);
	return ret;
}

export default checkHu