const carBrand = Symbol('brand');
const carMotor = Symbol('motor');
const carColor = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[carBrand] = brand;
    this[carMotor] = motor;
    this[carColor] = color;
  }

  cloneCar() {
    const { [carBrand]: brand, [carMotor]: motor, [carColor]: color } = this;
    return new this.constructor(brand, motor, color);
  }
}
