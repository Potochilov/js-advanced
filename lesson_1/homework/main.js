// main container
const app = document.getElementById('app');
// generate the necessary blocks
const bgPlate = document.createElement('div');
const bgTitle = document.createElement('h1');
const generateColorBtn = document.createElement('button');
const generateGradientBtn = document.createElement('button');
const generateImageBtn = document.createElement('button');
const blockCode = document.createElement('div');
const blockCodeContainer = document.createElement('div');

generateColorBtn.innerText = 'color';
generateGradientBtn.innerText = 'gradient';
generateImageBtn.innerText = 'image';
blockCode.classList.add('block-code');
blockCodeContainer.classList.add('block-code-container');
blockCodeContainer.appendChild(blockCode);
bgPlate.appendChild(bgTitle);
bgPlate.appendChild(generateImageBtn);
bgPlate.appendChild(generateGradientBtn);
bgPlate.appendChild(generateColorBtn);
bgPlate.appendChild(blockCodeContainer);
bgPlate.className = 'bg_plate';
bgTitle.innerText = 'MAKE YOUR STYLE';

// generate random hex
const getRandHexColor = () => {
	return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
};

// generate random int
const getRandInteger = (min, max) => {
	const rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
};

const generateRandGradient = () => {
	const randColor1 = getRandHexColor();
	const randColor2 = getRandHexColor();
	const randBgRotation = getRandInteger(0, 360);
	const bg_str = `linear-gradient(${randBgRotation}deg, ${randColor1} 0%, ${randColor2} 100%)`;
	bgPlate.style.backgroundImage = bg_str;
	blockCode.innerText = `background-image: ${bg_str};`;
};

const generateRandColor = () => {
	const bg_str = getRandHexColor();
	bgPlate.style.background = bg_str;
	blockCode.innerText = `background: ${bg_str};`;
};

const generateRandImage = () => {
	// unsplash api (https://source.unsplash.com/)
	fetch('https://source.unsplash.com/random')
	.then(response => {
		const bg_str = `url(${response.url})`;
		bgPlate.style.backgroundImage = bg_str;
		blockCode.innerText = `background: ${bg_str};`;
	});
};


generateColorBtn.addEventListener('click', generateRandColor);
generateGradientBtn.addEventListener('click', generateRandGradient);
generateImageBtn.addEventListener('click', generateRandImage);
// append application in main container
app.appendChild(bgPlate);
// run default generator
generateRandGradient();


/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.

  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
