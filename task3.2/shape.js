// OOP
class Shape {
    constructor(){
        if (this.constructor === Shape) {
            throw "can not take an object"
        }
    }
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented");
  }
  calculateParameter() {
    throw new Error("Method 'calculateParameter()' must be implemented");
  }
  toString() {
    console.log(`Area = ${this.calculateArea()}`);
  }
}
export class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    return this.length * this.width;
  }
  calculateParameter() {
    return (this.length + this.width) * 2;
  }
}
export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  calculateArea() {
    return this.side ** 2;
  }
  calculateParameter() {
    return this.side * 4;
  }
}
export class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  calculateArea() {
    return Math.PI * this.r * this.r;
  }
  calculateParameter() {
    return Math.PI * this.r * 2;
  }
}

