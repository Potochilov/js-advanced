/*

		Документация:

		https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation

		form.checkValidity() > Проверка всех полей формы на валидость
		form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

		formElement.validity > Объект с параметрами валидности поля
		formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
				сообщения выведет message в браузерный попал

		Классы для стилизации состояния элемента
		input:valid{}
		input:invalid{}


		Задание:

		Используя браузерное API для валидации форм реализовать валидацию следующей формы:


		- Имя пользователя: type:text -> validation: required; minlength = 2;
				Если пустое выввести сообщение: "Как тебя зовут дружище?!"
		- Email: type: email -> validation: required; minlength = 3; validEmail;
				Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
		- Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
				Если пустой вывести сообщение: "Я никому не скажу наш секрет";
		- Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
				Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
		- Напиши спасибо за яблоки: type: text -> validation: required;
				Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

		- Согласен на обучение: type: checkbox -> validation: required;
				Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

		Внизу две кнопки:

		1) Обычный submit который отправит форму, если она валидна.
		2) Кнопка Validate(Проверить) которая запускает методы:
				- yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
				- yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

*/

const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', sendForm);

const checkErrorsBtn = document.getElementById('checkErrors');
checkErrorsBtn.addEventListener('click', checkErrors);

// check all errors in form
function checkErrors() {
	customValidate();
	if (!signUpForm.checkValidity()) {
		signUpForm.reportValidity();
	} else alert('Clean!');
}

// send form if valid
function sendForm(e) {
	customValidate();
	if (!signUpForm.checkValidity()) {
		signUpForm.reportValidity();
		e.preventDefault();
	}
}

// set custom valid messages
function customValidate() {
	if (signUpForm.login.validity.valueMissing) {
		signUpForm.login.setCustomValidity('Как тебя зовут дружище?!');
	} else signUpForm.login.setCustomValidity('');

	if (signUpForm.email.validity.typeMismatch) {
		signUpForm.email.setCustomValidity('Ну и зря, не получишь бандероль с яблоками!');
	} else signUpForm.email.setCustomValidity('');

	if (signUpForm.password.validity.valueMissing) {
		signUpForm.password.setCustomValidity('Я никому не скажу наш секрет');
	} else signUpForm.password.setCustomValidity('');

	if (signUpForm.apples.validity.valueMissing) {
		signUpForm.apples.setCustomValidity('Ну хоть покушай немного... Яблочки вкусные');
	} else signUpForm.apples.setCustomValidity('');

	if ('спасибо' !== signUpForm.thanks.value) {
		signUpForm.thanks.setCustomValidity('Фу, неблагодарный(-ая)!');
	} else signUpForm.thanks.setCustomValidity('');

	if (!signUpForm.study.checked) {
		signUpForm.study.setCustomValidity('Необразованные живут дольше! Хорошо подумай!');
	} else signUpForm.study.setCustomValidity('');
}
