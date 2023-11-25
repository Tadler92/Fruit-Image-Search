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
	console.log(e);
	console.log(e.key);
	console.log(e.type);
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	// const fruitLowercase = fruit.map(word => word.toLowerCase());
	const eLowercase = e.key.toLowerCase();
	// let string = '';
	// console.log(fruitLowercase);
	console.log(eLowercase);
	if (letters.includes(eLowercase)) {
		for (let letter in eLowercase) {
			string += eLowercase[letter];
		}
		console.log(string);
		search(string);
		// search(eLowercase);
	}
};

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);