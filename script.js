const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowercased = str.toLowerCase();
	const fruitLowercase = fruit.map(word => word.toLowerCase());
	fruitLowercase.filter((fruits) => {
		if (fruits.includes(lowercased)) {
			return results.push(fruits.charAt(0).toUpperCase() + fruits.slice(1));
		};
	});
	// TODO
	console.log(results);
	return results;
}

let string = '';
function searchHandler(e) {
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
		for (let letter in eLowercase) {
			string += eLowercase[letter];
		}
		// console.log(string);
		showSuggestions(search(string), input.value);
		// search(eLowercase);
	}
};

function showSuggestions(results, inputVal) {
	let inputTimes = 0;
	if (inputVal.length > inputTimes) { suggestions.replaceChildren() }
	for (let i = 0; i < results.length; i++) {
		// if (inputVal.length > 1) { suggestions.removeChild(newSuggest) }
		const newSuggest = document.createElement('li');
		// if (inputVal.length > 0) { suggestions.removeChild(newSuggest) }
		newSuggest.innerText = results[i];
		suggestions.appendChild(newSuggest);
		inputTimes++;
		// if (inputVal.length > inputTimes) { suggestions.removeChild(newSuggest) }
		// if (inputVal.length > inputTimes) { suggestions.replaceChildren() }
	};
	// if (inputVal.length > inputTimes) { suggestions.removeChild(newSuggest) }
	// if (inputVal.length > inputTimes) { newSuggest.remove() }
	// TODO
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);