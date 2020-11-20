/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;


    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

// limits symbols in alphabet
// we can encode characters only within this framework
// or need add more alphabets limits
// for adding mor languages - add new element in object with first and last alphabet symbols in lower and upper cases
const alphabetsLimit = {
	engLower: {start: 'a', end: 'z'}, // for English Cesar
	engUpper: {start: 'A', end: 'Z'},
	rusLower: {start: 'а', end: 'я'}, // for Russian Cesar
	rusUpper: {start: 'А', end: 'Я'},
	anySymbols: {start: ' ', end: '@'} // some symbols like #+* and all numbers
};

function encryptCesar(encrypt, offset, string) {
	let result = '';
	offset = encrypt ? offset : -offset;
	for (const symbol of string) {
		const current = symbol.charCodeAt(0);
		let nextSymbol = '';
		for (const item in alphabetsLimit) {
			const start = alphabetsLimit[item].start.charCodeAt(0);
			const end = alphabetsLimit[item].end.charCodeAt(0);
			if (current >= start && current <= end) {
				const length = end - start;
				nextSymbol = String.fromCharCode(((current - start + offset) % length + length) % length + start);
			}
		}
		result += nextSymbol || symbol;
	}

	return result;
}

const textStr = 'Some secret text';

// setting encode without text
const encode1 = encryptCesar.bind(null, true, 1);
const encode2 = encryptCesar.bind(null, true, 2);
const encode3 = encryptCesar.bind(null, true, 3);
const encode4 = encryptCesar.bind(null, true, 4);
const encode5 = encryptCesar.bind(null, true, 5);

// setting decode without text
const decode1 = encryptCesar.bind(null, false, 1);
const decode2 = encryptCesar.bind(null, false, 2);
const decode3 = encryptCesar.bind(null, false, 3);
const decode4 = encryptCesar.bind(null, false, 4);
const decode5 = encryptCesar.bind(null, false, 5);

// add text
console.log(decode1(encode1(textStr)));
console.log(decode2(encode2(textStr)));
console.log(decode3(encode3(textStr)));
console.log(decode4(encode4(textStr)));
console.log(decode5(encode5(textStr)));
