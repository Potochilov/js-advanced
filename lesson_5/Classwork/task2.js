/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white',
  };

  // 1.1 call
  function testColl( color ){
    document.body.style.background = this.background;
    document.body.style.color = color;
  }

  testColl.call( colors, 'red' );

  // 1.2 bind
  function testBind(){
    document.body.style.background = this.background;
    document.body.style.color = this.color;
  }

  testBind.bind( colors );
  testBind();

  // 1.3 apply
  function testApply(text) {
    const h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1);
  }

  testApply.apply(null, ['test h1']);
