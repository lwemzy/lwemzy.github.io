// Exercise 1:
String.prototype.filter = function (...bannedWords) {
	let str = this;
	bannedWords.forEach((word) => {
		const index = str.indexOf(word);
		if (index >= 0) {
			const regex = new RegExp(word + '\\s?');
			str = str.replace(regex, '');
		}
	});
	return str;
};

console.log('This house is not nice!'.filter('not'));

// Exercise 2 - BubbleSort
Array.prototype.bubbleSort = function () {
	let len = this.length;
	let isSwapped = false;

	for (i = 0; i < len; i++) {
		isSwapped = false;

		for (j = 0; j < len; j++) {
			if (this[j] > this[j + 1]) {
				let temp = this[j];
				this[j] = this[j + 1];
				this[j + 1] = temp;
				isSwapped = true;
			}
		}

		if (!isSwapped) {
			break;
		}
	}

	return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3: Inheritance
const Person = function () {};

Person.prototype.initialize = function (name, age) {
	this.name = name;
	this.age = age;
};

Person.prototype.describe = function () {
	return this.name + ', ' + this.age + ' years old.';
};

const Teacher = function () {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
	console.log(`${this.name} is now teaching ${subject}`);
};

const me = new Teacher();
me.initialize('Awesome Dev', 33);
me.teach('Advanced Software Development');

// Exercise 4
// TODO: WIP i wasn't able to finish this assignment due to work and the fact that i am currently taking two DE classes hope to finish it over time and push my updates
