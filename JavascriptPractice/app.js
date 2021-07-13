// ####################################################################
// REVERSE A STRING
// ####################################################################

const reverseString1 = string => string.split('').reduce((returnString, letter) => letter + returnString, '');

const reverseString2 = string => string.split('').reverse().join('');

const reverseString3 = string => {
	let returnString = '';
	for (let letter of string) returnString = letter + returnString;
	return returnString;
};

const reverseString4 = string => {
	let returnString = '';
	let strArr       = string.split('');
	strArr.reverse();
	strArr.forEach(letter => {
		returnString += letter;
	});
	returnString = strArr.join('');
	return returnString;
};

const reverseString5 = string => {
	let returnString = '';
	for (let i = string.length; i > 0; i--) {
		returnString += string[i - 1];
	}
	return returnString;
};

// console.log(reverseString1('hello'));
// console.log(reverseString2('hello'));
// console.log(reverseString3('hello'));
// console.log(reverseString4('hello'));
// console.log(reverseString5('hello'));

// ####################################################################
// REVERSE A STRING
// ####################################################################

// ####################################################################
// REVERSE AN INTEGER
// ####################################################################

const reverseInt = integer => {
	return parseInt(integer.toString().split('').reduce((returnString, letter) => letter + returnString)) * Math.sign(integer);
};

// console.log(reverseInt(123456));
// console.log(reverseInt(-123456));
// console.log(typeof reverseInt(123456));
// console.log(typeof reverseInt(-123456));

// ####################################################################
// REVERSE AN INTEGER
// ####################################################################

// ####################################################################
// IS A STRING A PALINDROME
// ####################################################################

const isPalindrome = string => {
	return string === string.split('').reduce((returnString, letter) => letter + returnString, '');
};

// console.log(isPalindrome('kuulilennuteetunneliluuk'));

// ####################################################################
// IS A STRING A PALINDROME
// ####################################################################

// ####################################################################
// CAPITALIZE FIRST LETTERS OF EACH WORD
// ####################################################################

const capitalizeFirstLetters1 = string => string.toLowerCase().split(' ').map(word => `${ word[0].toUpperCase() }${ word.substr(1) }`).join(' ');

const capitalizeFirstLetters2 = string => {
	const strArr = string.toLowerCase().split(' ');
	for (let i = 0; i < strArr.length; i++) {
		strArr[i] = `${ strArr[i].substring(0, 1).toUpperCase() }${ strArr[i].substring(1) }`;
	}
	return strArr.reduce((returnString, word) => `${ returnString } ${ word }`);
};

// console.log(capitalizeFirstLetters1('thiS iS javascript, i don\'t loVe it, but i underStand it'));
// console.log(capitalizeFirstLetters2('thiS iS javascript, i don\'t loVe it, but i underStand it'));

// ####################################################################
// CAPITALIZE FIRST LETTERS OF EACH WORD
// ####################################################################

// ####################################################################
// FIND THE MOST COMMON LETTER AND ITS NUMBER OF OCCURRENCE IN A STRING
// ####################################################################

const mostCommonLetters1 = string => {
	const letterMap = {};
	let mostCount   = 0;
	let mostLetter  = '';
	string.toLowerCase().match(/[a-z0-9]/g).forEach(letter => {
		letterMap[letter] ? letterMap[letter]++ : letterMap[letter] = 1;
	});
	for (const letter in letterMap) {
		if (letterMap[letter] > mostCount) {
			mostCount  = letterMap[letter];
			mostLetter = letter;
		}
	}
	return `The most common letter is ${ mostLetter } with count ${ mostCount }`;
};

const mostCommonLetters2 = string => {
	const letterMap = {};
	let mostCount   = 0;
	let mostLetter  = '';
	string.split('').forEach(letter => {
		if (letter !== ' ') {
			letterMap[letter] ? letterMap[letter]++ : letterMap[letter] = 1;
		}
	});
	for (const letter in letterMap) {
		if (letterMap[letter] > mostCount) {
			mostCount  = letterMap[letter];
			mostLetter = letter;
		}
	}
	return `The most common letter is ${ mostLetter } with count ${ mostCount }`;
};

// console.log(mostCommonLetters1('thiS iS javascript, i don\'t loVe it, but i underStand it'));
// console.log(mostCommonLetters2('thiS iS javascript, i don\'t loVe it, but i underStand it'));

// ####################################################################
// FIND THE MOST COMMON LETTER AND ITS NUMBER OF OCCURRENCE IN A STRING
// ####################################################################

// ####################################################################
// FIZZBUZZ
// ####################################################################

const fizzBuzz = () => {
	for (let i = 1; i <= 100; i++) {
		let log = '';
		if (i % 15 === 0) {
			log = 'FizzBuzz';
		} else if (i % 3 === 0) {
			log = 'Fizz';
		} else if (i % 5 === 0) {
			log += 'Buzz';
		} else {
			log = i;
		}
		console.log(log);
	}
};

// fizzBuzz();

// ####################################################################
// FIZZBUZZ
// ####################################################################

// ####################################################################
// FIND THE LONGEST WORD IN A STRING, IF MULTIPLE, RETURN ARRAY OF WORDS
// ####################################################################

const longestWord = string => {
	const sorted       = string.toLowerCase()
	                           .match(/[a-z0-9]+/g)
	                           .sort((longest, current) => current.length - longest.length);
	const longestWords = sorted.filter(word => word.length === sorted[0].length);
	return longestWords.length > 1 ? longestWords : longestWords[0];
};

// console.log(longestWord('this this addd o th s a javascript'));
// console.log(longestWord('this this addd o th s ai see'));

// ####################################################################
// FIND THE LONGEST WORD IN A STRING, IF MULTIPLE, RETURN ARRAY OF WORDS
// ####################################################################

// ####################################################################
// DIVIDE AN ARRAY TO CHUNKS
// ####################################################################

const chunkArray = (array, chunkSize) => {
	const chunked   = [];
	const loopCount = Math.ceil(array.length / chunkSize);
	for (let i = 0; i < loopCount; i++) {
		chunked.push(array.splice(0, chunkSize));
	}
	return chunked;
};

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// ####################################################################
// DIVIDE AN ARRAY TO CHUNKS
// ####################################################################

// ####################################################################
// FLATTEN ALL MULTI LEVEL ARRAYS
// ####################################################################

/**
 * Works on multi level arrays
 * @param arrays
 * @returns {FlatArray<*[], number>[]}
 */
const flattenArrays1 = (...arrays) => arrays.flat(Infinity);

/**
 * Works on multi level arrays
 * @param arrays
 * @returns {FlatArray<*[], number>[]}
 */
const flattenArrays2 = (...arrays) => {
	let flat = [];
	for (let i = 0; i < arrays.length; i++) {
		if (Array.isArray(arrays[i])) {
			flat = [...flat, ...flattenArray(arrays[i])];
		} else {
			flat.push(arrays[i]);
		}
	}
	return flat;
};

/**
 * Flatten a single array recursively
 * @param item
 * @returns {*[]|*}
 */
const flattenArray = item => {
	if (Array.isArray(item)) {
		for (let i = 0; i < item.length; i++) {
			if (Array.isArray(item[i])) {
				const array = flattenArray(item[i]);
				item.splice(i, 1);
				return [...item, ...array];
			}
		}
	}
	return item;
};

/**
 * Works on a single depth array
 * @param arrays
 * @returns {FlatArray<*[], number>[]}
 */
const flattenArraysOfSingleDepth1 = (...arrays) => arrays.reduce((reduced, current) => reduced.concat(current));

const flattenArraysOfSingleDepth2 = (...arrays) => [].concat(...arrays);

const flattenArraysOfSingleDepth3 = (...arrays) => [].concat.apply([], arrays);

// console.log(flattenArrays1([1, 2], [3, 4, 5], [6, 7], [8], [12, [13, 19, [21, [22, [23]]]]]));
// console.log(flattenArrays2([1, 2], [3, 4, 5], [6, 7], [8], [12, [13, 19, [21, [22, [23]]]]]));

// ####################################################################
// DETERMINE IF A STRING IS AN ANAGRAM OF THE OTHER
// ####################################################################

const isAnagram = (string1, string2) => formatString(string1) === formatString(string2);

const formatString = string => string.toLowerCase().match(/[a-z]/g).sort().join();

// console.log(isAnagram('dormitory', 'dirty room##'));
// console.log(isAnagram('below', 'elbow'));
// console.log(isAnagram('belowa', 'elbow'));

// ####################################################################
// DETERMINE IF A STRING IS AN ANAGRAM OF THE OTHER
// ####################################################################

// ####################################################################
// TURN STRING INTO A CODE AND CAPITALIZE VOWELS
// ####################################################################

const letterChanger = string => {
	return string
		.toLowerCase()
		.replace(/[a-z]/gi, char => char.match(/[z]/i) ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1))
		.replace(/[aeiouõäöü]/gi, vowel => vowel.toUpperCase());
};

// console.log(letterChanger('Sigma Australis Terra'));

// ####################################################################
// TURN STRING INTO A CODE AND CAPITALIZE VOWELS
// ####################################################################

// ####################################################################
// ADD TOGETHER ALL NUMBERS
// ####################################################################

const addAll = (...numbers) => {
	return numbers.reduce((total, current) => total + current);
};

// console.log(addAll(1, 2, 3, 4.5, 4.23));

// ####################################################################
// ADD TOGETHER ALL NUMBERS
// ####################################################################

// ####################################################################
// SUM TOGETHER ALL PRIMES UP TO AND INCLUDING THE NUMBER PASSED
// ####################################################################

const sumAllPrimes = number => {
	let total = 0;
	for (let i = 2; i <= number; i++) {
		if (isPrime(i)) {
			total += i;
		}
	}
	return total;
};

// console.log(sumAllPrimes(10));

// ####################################################################
// SUM TOGETHER ALL PRIMES UP TO AND INCLUDING THE NUMBER PASSED
// ####################################################################

// ####################################################################
// RETURN ALL PRIMES UP TO AND INCLUDING THE NUMBER PASSED
// ####################################################################

const returnPrimes = number => {
	let primes = [];
	for (let i = 2; i <= number; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	return primes;
};

const isPrime = number => {
	if (number < 2) return false;
	for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	}
	return true;
};

// console.log(returnPrimes(100));

// ####################################################################
// RETURN ALL PRIMES UP TO AND INCLUDING THE NUMBER PASSED
// ####################################################################

// ####################################################################
// REMOVE ALL THAT IS IN THE FOLLOWING ARGUMENTS. RETURN LEFTOVERS AS ARRAY
// ####################################################################

const seekAndDestroy1 = (haystack, ...needles) => haystack.filter(item => ! needles.includes(item));

const seekAndDestroy2 = (haystack, ...needles) => haystack.filter(item => needles.indexOf(item) === -1);

// console.log(seekAndDestroy1([2, 3, 4, 5, 6, 6, 'hello'], 2, 5, 6));
// console.log(seekAndDestroy2([2, 3, 4, 5, 6, 6, 'hello'], 2, 5, 6));

// ####################################################################
// REMOVE ALL THAT IS IN THE FOLLOWING ARGUMENTS. RETURN LEFTOVERS AS ARRAY
// ####################################################################

// ####################################################################
// REARRANGE PEOPLE BY HEIGHT WITHOUT MOVING THE TREES WHICH ARE -1
// ####################################################################

const peopleAndTrees = [-1, 150, 199, -1, 210, 187, -1, 146, 176, -1, 192, 191, -1];

const sortByHeight1 = array => {
	const treeLocations = [];
	const peoplesHeight = [];
	array.forEach((item, index) => item === -1 ? treeLocations.push(index) : peoplesHeight.push(item));
	peoplesHeight.sort((prev, next) => prev - next);
	const sortedArray = [];
	for (let i = 0; i < array.length; i++) {
		treeLocations.includes(i) ? sortedArray.push(-1) : sortedArray.push(peoplesHeight.shift());
	}
	return sortedArray;
};

const sortByHeight2 = array => {
	const treeLocations = [];
	const sortedArray   = [];
	array.forEach((item, index) => item === -1 ? treeLocations.push(index) : sortedArray.push(item));
	sortedArray.sort((prev, next) => prev - next);
	treeLocations.forEach(location => sortedArray.splice(location, 0, -1));
	return sortedArray;
};

// console.log(sortByHeight1(peopleAndTrees));
// console.log(sortByHeight2(peopleAndTrees));

// ####################################################################
// REARRANGE PEOPLE BY HEIGHT WITHOUT MOVING THE TREES WHICH ARE -1
// ####################################################################

// ####################################################################
// FIND MISSING LETTER IN RANGE, RETURN UNDEFINED IF NONE MISSING
// ####################################################################

const missingLetters = letters => {
	let compare      = letters.charCodeAt(0);
	const missing    = [];
	const lettersArr = letters.split('');
	lettersArr.map(() => {
		const charToTest = String.fromCharCode(compare);
		if ( ! lettersArr.includes(charToTest)) {
			// To avoid duplicates, this check must happen
			if ( ! missing.includes(charToTest)) {
				missing.push(charToTest);
			}
		}
		++compare;
	});
	return missing.length > 0 ? missing : undefined;
};

// console.log(missingLetters('acef'));
// console.log(missingLetters('abcdefghjkl'));
// console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));

// ####################################################################
// FIND MISSING LETTER IN RANGE, RETURN UNDEFINED IF NONE MISSING
// ####################################################################

// ####################################################################
// EVEN AND ODD SUMS
// ####################################################################

const evenAndOddSums1 = (...numbers) => {
	// 0 must exist for reduce to work if no items for that type are passed.
	const odds  = [0];
	const evens = [0];
	for (const number of numbers) number % 2 === 0 ? evens.push(number) : odds.push(number);
	return [odds.reduce((total, current) => total + current), evens.reduce((total, current) => total + current)];
};

const evenAndOddSums2 = (...numbers) => {
	let oddSum  = 0;
	let evenSum = 0;
	for (const number of numbers) number % 2 === 0 ? evenSum += number : oddSum += number;
	return [oddSum, evenSum];
};

// console.log(evenAndOddSums1(1, 3, 5, 7, 2, 9, 12));
// console.log(evenAndOddSums2(1, 3, 5, 7, 2, 9, 12));

// ####################################################################
// EVEN AND ODD SUMS
// ####################################################################