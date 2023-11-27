const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

let inputTimes = 0;
let results = new Set();
function search(str) {
	// let results = [];
	if (inputTimes > 0) { inputTimes = 0; results.clear() }
	if (results.size >= 0) {
		const lowercased = str.toLowerCase();
		const fruitLowercase = fruit.map(word => word.toLowerCase());
		fruitLowercase.filter((fruits) => {
			if (fruits.includes(lowercased)) {
				// return results.push(fruits.charAt(0).toUpperCase() + fruits.slice(1));
				return results.add(fruits.charAt(0).toUpperCase() + fruits.slice(1));
			};
		});
	};
	// TODO
	console.log(results);
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
};

function showSuggestions(results, inputVal) {
	// let inputTimes = 0;
	console.log(inputTimes);
	if (inputVal.length === 0) { inputTimes = 1; suggestions.replaceChildren() }
	else if (inputVal.length > inputTimes) { suggestions.replaceChildren(); }
	// if (inputVal > inputTimes) { suggestions.replaceChildren() }
	inputTimes++;
	console.log(inputTimes);
	// for (let i = 0; i < results.length; i++) {
	for (let fruits of results) {
		// if (inputVal.length > 1) { suggestions.removeChild(newSuggest) }
		const newSuggest = document.createElement('li');
		// if (inputVal.length > 0) { suggestions.removeChild(newSuggest) }
		// newSuggest.innerText = results[i];
		newSuggest.innerText = fruits;
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
		results.clear();
		console.log(inputTimes);
		console.log(results);
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);