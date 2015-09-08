	var Mammal = function (name) {
		this.name = name;
		this.offspring = [];
	};

	Mammal.prototype.sayHello = function () {
		return "My name is " + this.name + ", I'm a Mammal";
	};

	Mammal.prototype.haveBaby = function () {
	    var child = new Mammal();
	    child.name = "Baby " + this.name;
	    this.offspring.push(child);
	    return child;
	};


	Cat = function (name, color){
		Mammal.call(this, name);
		this.color = color;
	}

	Cat.prototype = Object.create(Mammal.prototype);
	Cat.prototype.constructor = Cat



	Cat.prototype.haveBaby = function (color) {
		var kitten = new Cat();
		kitten.color = color;
		kitten.name = "Baby " + this.name;
		this.offspring.push(kitten);
		return kitten;
	}