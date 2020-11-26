/*
  Задание:

  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.

    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }

    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.

    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые

    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/

class SuperDude {
	constructor(name, powers) {
		Object.defineProperty(this, 'name', {
			value: name,
			writable: false,
			configurable: false,
		});

		powers.forEach(power => {
			Object.defineProperty(this, power.name, {
				value: () => console.log(power.spell.apply(this))
			});
		});
	}
}

function Spell(name, message) {
	this.name = name;
	this.spell = function () {
		return `${this.name} ${message}`;
	}
}

const superPowers = [
	new Spell('invisibility', 'hide from you'),
	new Spell('superSpeed', 'running from you'),
	new Spell('superSight', 'see you'),
	new Spell('superFroze', 'will froze you'),
	new Spell('superSkin', 'skin is unbreakable'),
];

const Luther = new SuperDude('Luther', superPowers);
// Тестирование: Методы должны работать и выводить сообщение.
Luther.superSight();
Luther.superSpeed();
Luther.superFroze();
Luther.invisibility();
Luther.superSkin();

