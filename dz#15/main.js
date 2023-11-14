function Car(make, model, year, speed) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = speed;

  let currentYear = new Date().getFullYear();

  Object.defineProperty(this, "age", {
    get: function () {
      return this.year;
    },
    set: function (value) {
      if (value <= currentYear) {
        this.year = value;
      }
    },
  });

  Object.defineProperty(this, "currentSpeed", {
    get: function () {
      return this.speed;
    },
    set: function (value) {
      if (value >= 0) {
        this.speed = value;
      }
    },
  });

  this.accelerate = function (value) {
    this.speed += value;
  };

  this.brake = function (value) {
    this.speed -= value;
  };
}

const myCar = new Car("Toyota", "Camry", 2018, 120);
console.log(`Car is ${myCar.age} years old.`); // Car is 2018 years old.

myCar.age = 2024;
console.log(`Car is ${myCar.age} years old.`); // Car is 2018 years old.

myCar.accelerate(20);
console.log(`${myCar.currentSpeed} km/h.`); // 140 km/h.
myCar.brake(10);
console.log(`${myCar.currentSpeed} km/h.`); // 130 km/h.
