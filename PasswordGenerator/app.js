const result          = document.getElementById('result');
const copyToClipboard = document.getElementById('clipboard');
const passwordLength  = document.getElementById('passwordLength');
const useUppercase    = document.getElementById('useUppercase');
const useLowercase    = document.getElementById('useLowercase');
const useNumber       = document.getElementById('useNumber');
const useSymbol       = document.getElementById('useSymbol');
const generate        = document.getElementById('generate');
const randomFunction  = {
	lower : getRandomLower,
	upper : getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

copyToClipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = result.innerText;
	if ( ! password) return;
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length     = +passwordLength.value;
	const hasLower   = useLowercase.checked;
	const hasUpper   = useUppercase.checked;
	const hasNumber  = useNumber.checked;
	const hasSymbol  = useSymbol.checked;
	result.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

function generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol) {
	let generatedPassword = '';
	const typesArray      = [
		{ lower: hasLower },
		{ upper: hasUpper },
		{ number: hasNumber },
		{ symbol: hasSymbol }]
		.filter(item => Object.values(item)[0]);
	if (typesArray.length === 0) {
		return '';
	}
	for (let i = 0; i < length; i++) {
		const functionName = Object.keys(typesArray[Math.floor(Math.random() * typesArray.length)])[0];
		generatedPassword += randomFunction[functionName]();
	}
	return generatedPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}