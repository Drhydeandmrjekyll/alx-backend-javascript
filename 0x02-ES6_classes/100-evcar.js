import Car from './10-car';

const evcarBrand = Symbol('brand');
const evcarMotor = Symbol('motor');
const evcarColor = Symbol('color');
const evcarRange = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[evcarRange] = range;
  }

  get range() {
    return this[evcarRange];
  }

  cloneCar() {
    const { [evcarBrand]: brand, [evcarMotor]: motor, [evcarColor]: color } = this;
    return new Car(brand, motor, color);
  }
}
