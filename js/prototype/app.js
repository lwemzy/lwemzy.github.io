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
(function () {
	let person = {
		personName: 'Davido',
		age: '24',
		get greeting() {
			return `Greetings, my name is ${personName} and I am ${age} years old.`;
		},
		get salute() {
			return "Good morning!, and in case I don't see you, good afternoon, good evening and good night!";
		},
	};

	let student = {
		__proto__: person,
		major: 'Art',
		get greeting() {
			return `${this.personName} and I major in ${this.major}`;
		},
	};

	console.log(student.greeting);
	console.log(student.salute);

	let professor = {
		__proto__: person,
		personName: 'Rene',
		department: 'CS',
		get greeting() {
			return `Good day, my name is ${this.personName} and I am in the ${this.department} department `;
		},
	};

	console.log(professor.greeting);
	console.log(professor.salute);
})();

(function () {
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	Person.prototype.greeting = function () {
		return `Greetings, my name is ${this.name} and I am ${this.age} years old.”`;
	};

	Person.prototype.salute = function () {
		console.log(
			"Good morning!, and in case I don't see you, good afternoon, good evening and good night!"
		);
	};

	function Student(name, age, major) {
		Person.call(this, name, age);
		this.major = major;
	}

	Student.prototype = Object.create(Person.prototype, {
		constructor: {
			configurable: true,
			enumerable: true,
			value: Student,
			writable: true,
		},
	});

	Professor.prototype.greeting = function () {
		return `${this.name} and I major in ${this.major}`;
	};

	function Professor(name, age, department) {
		Person.call(this, name, age);
		this.department = department;
	}

	Person.prototype = Object.create(Person.prototype, {
		constructor: {
			configurable: true,
			enumerable: true,
			value: Person,
			writable: true,
		},
	});

	Professor.prototype.greeting = function () {
		return `Good day, my name is ${this.name} and I am in the ${this.department} department `;
	};

	let p = new Professor('Awes', 45, 'Arts');

	let s = new Student('Xandar', 19, 'Cs');

	console.log(p.greeting());
	console.log(s.greeting());
})();
