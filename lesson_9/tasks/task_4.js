/*
	Задание:
	Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
	Написать регулярное выражение которое найдет:
		1. Все слова.
		2. Все совпадения букв от a до e,
		3. Года, например 2004
		4. Слова обернутые в [квадратныеКавычки]
		5. Все форматы файлов .jpg / .png / .gif
		6. Все email com.ua
		7. Все слова написанные с большой буквы
		8. Найти телефон написаный по паттерну +00 (000) 000-00-00,
			 где вместо 0 может быть любое число
*/

const text = `RegExr was created by gskinner.com, and is proudly hosted by Media Temple.
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.`;

console.log('all words');
console.table(text.match(/([A-Za-z])\w+/g));

console.log('all words with "a" and "b"');
console.table(text.match(/([a-e])\w+/g));

console.log('years');
console.table(text.match(/\b([0-9]{4})\b/g));

console.log('with square quotes');
console.table(text.match(/\[\w+]/g));

console.log('files formats with three symbols');
console.table(text.match(/\B\.\w{3}\b/g));

console.log('all emails com.ua');
console.table(text.match(/(\w+)@(\w+)\.(com.ua)/g));

console.log('all words with upper-case letter');
console.table(text.match(/[A-Z]\w+/g));

console.log('phone numbers +00 (000) 000-00-00');
console.table(text.match(/(\+\d{2})\s(\(\d{3}\))\s(\d{3})-(\d{2})-(\d{2})/g));
