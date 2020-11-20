/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

const Comment = function (name, text, avatar = '') {
	this.name = name;
	this.text = text;
	this.avatar = avatar || this.defaultAvatar;
	this.likes = 0;
};

Comment.prototype.defaultAvatar = "Homework/img/avatar.png";
Comment.prototype.like = function () {
	this.likes++;
};

const c1 = new Comment('John', 'Look great!');
const c2 = new Comment('David', 'Pretty good', 'Homework/img/man.png');
const c3 = new Comment('Susan', 'Super duper', 'Homework/img/traveler.png');
const c4 = new Comment('Helen', 'Your look like million bucks', 'Homework/img/woman.png');

const comments = [c1, c2, c3, c4];

const RenderComments = function (comments) {
	const commentsFeed = document.getElementById('CommentsFeed');
	comments.map(comment => {
		const avatar = document.createElement('img');
		avatar.src = comment.avatar;
		avatar.alt = comment.name;

		const name = document.createElement('h3');
		name.innerText = comment.name;

		const text = document.createElement('p');
		text.innerText =  comment.text;

		const like = document.createElement('span');
		like.innerText = '0';

		const btn = document.createElement('button');
		btn.innerText = '❤  ';
		btn.appendChild(like);
		btn.addEventListener('click', function () {
			comment.like();
			like.innerText = comment.likes;
		});

		const container = document.createElement('div');
		container.appendChild(avatar);
		container.appendChild(btn);
		container.appendChild(name);
		container.appendChild(text);
		commentsFeed.appendChild(container);
	})
};

new RenderComments(comments);


