const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

let inputTimes = 0;
// let results = new Set();
function search(str) {
	let results = [];
	// if (inputTimes > 0) { inputTimes = 0; results.clear() }
	// if (results.size >= 0) {
	if (results.length >= 0) {
		const lowercased = str.toLowerCase();
		const fruitLowercase = fruit.map(word => word.toLowerCase());
		fruitLowercase.filter((fruits) => {
			if (fruits.includes(lowercased)) {
				return results.push(fruits.charAt(0).toUpperCase() + fruits.slice(1));
				// return results.add(fruits.charAt(0).toUpperCase() + fruits.slice(1));
			};
		});
	};
	// TODO
	console.log('This is the results Set from search()', results);
	return results;
}

let string = '';
// let inputTimes = 0;
// console.log(inputTimes);
function searchHandler(e) {
	e.preventDefault();
	// TODO
	// console.log(e);
	// console.log(e.key);
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	// const fruitLowercase = fruit.map(word => word.toLowerCase());
	const eLowercase = e.key.toLowerCase();
	// let string = '';
	// console.log(fruitLowercase);
	// console.log(eLowercase);
	if (letters.includes(eLowercase)) {
		// inputTimes++;
		for (let letter in eLowercase) {
			string += eLowercase[letter];
			// inputTimes++;
			// console.log(inputTimes);
		}
		// console.log(string);
		showSuggestions(search(string), input.value);
		// showSuggestions(search(string), inputTimes);
		// search(eLowercase);
	}
	else if (e.key === 'Backspace') {
		if (input.value === '') {
			suggestions.replaceChildren();
			string = '';
			return;
		}
		string = input.value;
		showSuggestions(search(string), input.value);
	}
};

function showSuggestions(results, inputVal) {
	// let inputTimes = 0;
	console.log(inputTimes);
	suggestions.classList.add('has-suggestions');
	let inputLowercase = inputVal.toLowerCase();
	let resultLowercase = results.map((suggestion) => { return suggestion.toLowerCase() });
	// if (inputVal.length === 0) { inputTimes = 1; suggestions.replaceChildren() }
	// else if (inputVal.length > inputTimes) { suggestions.replaceChildren(); }
	// if (inputVal.length > inputTimes) { suggestions.replaceChildren() }
	if (inputVal !== '') { suggestions.replaceChildren() }
	inputTimes++;
	console.log(inputTimes);
	// const arrResults = Array.from(results);
	for (let i = 0; i < 7; i++) {
		// if (arrResults[i] === undefined) return;
		if (results[i] === undefined) return;
		// for (let fruits of results) {
		// if (inputVal.length > 1) { suggestions.removeChild(newSuggest) }
		const newSuggest = document.createElement('li');
		// if (inputVal.length > 0) { suggestions.removeChild(newSuggest) }
		// newSuggest.innerText = arrResults[i];
		// newSuggest.innerText = results[i];
		// if (resultLowercase.includes(inputLowercase)) {
		// newSuggest.innerHTML = results[i].replace(inputVal, `<b>${inputVal}</b>`);
		// 	return newSuggest.innerHTML;
		// }
		// newSuggest.innerHTML = resultLowercase[i].replace(inputVal, `<b>${inputLowercase}</b>`)
		newSuggest.innerHTML = resultLowercase[i].replace(inputLowercase, `<b>${inputLowercase}</b>`)
		// newSuggest.innerHTML = resultLowercase[i].replace(inputVal, `<b>${inputLowercase}</b>`).charAt(0).toUpperCase() + resultLowercase[i].slice(1);
		// newSuggest.innerText = fruits;
		suggestions.appendChild(newSuggest);
		// inputTimes++;
		// console.log(inputTimes);
		// if (inputVal.length > inputTimes) { suggestions.removeChild(newSuggest) }
		// if (inputVal.length > inputTimes) { suggestions.replaceChildren() }
		// newSuggest.addEventListener('mouseover', )
	};
	// if (inputVal.length > inputTimes) { suggestions.removeChild(newSuggest) }
	// if (inputVal.length > inputTimes) { newSuggest.remove() }
	// TODO
}

function useSuggestion(e) {
	e.preventDefault();
	// TODO
	console.log(e);
	console.log(e.target);
	console.log(e.target.nodeName);
	if (e.target.nodeName === 'LI') {
		// console.log(li.innerText)
		input.value = e.target.innerText;
		suggestions.replaceChildren();
		inputTimes = 0;
		// results.clear();
		string = '';
		suggestions.classList.remove('has-suggestions');
		console.log(inputTimes);
		// console.log('This is the results Set from useSuggestion()', results);
	}
}
// console.log('This is the results Set outside of all functions', results);
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// document.querySelector('body').addEventListener('keyup', (e) => {
// 	e.preventDefault();
// 	console.log(e.key);

// })