/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

const Dog = function (name, breed) {
	this.name = name;
	this.breed = breed;
	this.status = 'born';
	this.eating = function () {
		this.status = 'Собака есть'
	};
	this.running = function () {
		this.status = 'Собака бежит'
	};
	this.allValues = function () {
		for (const key in this) {
			console.log(key, this[key]);
		}
	}
};

// create new Dog
const pitBull = new Dog('Andrey', 'pit bull');
pitBull.eating(); // eat first
pitBull.running(); // run next
console.log(pitBull);
console.log(pitBull.allValues());
