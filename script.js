const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

let inputTimes = 0;
function search(str) {
	let results = [];

	if (results.length >= 0) {
		const lowercased = str.toLowerCase();
		const fruitLowercase = fruit.map(word => word.toLowerCase());
		fruitLowercase.filter((fruits) => {
			if (fruits.includes(lowercased)) {
				return results.push(fruits.charAt(0).toUpperCase() + fruits.slice(1));
			};
		});
	};
	// TODO
	console.log('This is the results Set from search()', results);
	return results;
}

let string = '';
function searchHandler(e) {
	e.preventDefault();
	// TODO
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	const eLowercase = e.key.toLowerCase();

	if (letters.includes(eLowercase)) {
		for (let letter in eLowercase) {
			string += eLowercase[letter];
		}
		showSuggestions(search(string), input.value);
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
	console.log(inputTimes);
	suggestions.classList.add('has-suggestions');
	let inputLowercase = inputVal.toLowerCase();
	let resultLowercase = results.map((suggestion) => { return suggestion.toLowerCase() });

	if (inputVal !== '') { suggestions.replaceChildren() }
	inputTimes++;
	console.log(inputTimes);
	for (let i = 0; i < 7; i++) {
		if (results[i] === undefined) return;
		const newSuggest = document.createElement('li');

		newSuggest.innerHTML = resultLowercase[i].replace(inputLowercase, `<b>${inputLowercase}</b>`)

		suggestions.appendChild(newSuggest);
	};
	// TODO
}

function useSuggestion(e) {
	e.preventDefault();
	// TODO
	console.log(e);
	console.log(e.target);
	console.log(e.target.nodeName);
	if (e.target.nodeName === 'LI') {
		input.value = e.target.innerText;
		suggestions.replaceChildren();
		inputTimes = 0;
		string = '';
		suggestions.classList.remove('has-suggestions');
		console.log(inputTimes);
	}
}

input.addEventListener('keyup', searchHandler);
// input.addEventListener('touchstart', searchHandler);
suggestions.addEventListener('click', useSuggestion);

let fruitEmojis = {
	Apple: '&#127822',
	'Custard Apple': '&#127854; &#127822',
	'Avocado 🥑': '&#129361',
	Banana: '&#127820',
	Blueberry: '&#129744',
	Bilberry: '&#129744',
	Boysenberry: '&#129744',
	Cherry: '&#127826',
	Cranberry: '&#127826; &#129744; &#127815',
	Coconut: '&#129381',
	Cucumber: '&#129362',
	Grape: '&#127815',
	Kiwifruit: '&#129373',
	Lemon: '&#127819',
	Lime: '&#127819; &#129001',
	Mango: '&#129389',
	Melon: '&#127816',
	Cantaloupe: '&#127816',
	Honeydew: '&#127816',
	Dragonfruit: '&#128009; &#127816',
	Watermelon: '&#127817',
	Tangerine: '&#127818',
	Orange: '&#127818',
	Olive: '&#129746',
	Peach: '&#127825',
	Apricot: '&#127825',
	Pear: '&#127824',
	Pineapple: '&#127821',
	Strawberry: '&#127827',
}
let enterTimes = 0;
document.querySelector('body').addEventListener('keyup', (e) => {
	e.preventDefault();
	console.log(e);
	console.log(e.key);
	// if (e.key !== "Enter") return;
	if (e.key === 'Enter') {
		enterTimes++;
		if (enterTimes > 1) {
			document.querySelector('.selected-fruit').replaceChildren();
		}
		if (fruitEmojis[`${input.value}`] === undefined) {
			alert(`No image available for chosen fruit. Please try another🙂`)
			return;
		}
		const fruitImage = document.createElement('p');
		fruitImage.innerHTML = fruitEmojis[`${input.value}`];
		// fruitImage.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Red_Delicious.jpg/182px-Red_Delicious.jpg">';
		// fruitImage.innerHTML = '<img src="https://png.pngtree.com/png-clipart/20230414/original/pngtree-red-apple-fruit-realistic-transparent-png-image_9057112.png">';
		document.querySelector('.selected-fruit').appendChild(fruitImage)
		input.value = '';
		suggestions.replaceChildren();
	}
})