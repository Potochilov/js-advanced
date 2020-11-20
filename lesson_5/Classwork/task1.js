/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

const Train = {
	name: 'HONDA',
	speed: 300,
	passengers: 10,
	go: function () {
		console.log(`Поезд ${this.name} везет ${this.passengers} со скоростью ${this.speed}`);
	},
	stop: function () {
		this.speed = 0;
		console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
	},
	takePassenger: function (x) {
		this.passengers += x;
	}
};

Train.go();
Train.stop();
Train.takePassenger(100);
Train.go();
Train.stop();
Train.takePassenger(150);
Train.go();
Train.stop();
