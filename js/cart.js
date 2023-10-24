'use strict';

const Cart = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};


Cart.prototype.addGoods = function (name = '', price = 1, amount = 1) {
    if (typeof (name) === 'string' && name.length >= 3
        && typeof (price) === 'number' && price >= 1
        && typeof (amount) === 'number' && amount >= 1) {
        this.goods.push({name, price, amount});
    } else {
        console.error('wrong arguments type or value!');
    }
    this.increaseCount(amount);
    this.calculateGoodsPrice();
};

Cart.prototype.increaseCount = function (amount) {
    this.count += amount;
};

Cart.prototype.getTotalPrice = function () {
    return this.totalPrice;
};

Cart.prototype.calculateGoodsPrice = function () {
    this.totalPrice =
        this.goods.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
};

Cart.prototype.clear = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};

Cart.prototype.print = function () {
    console.log(JSON.stringify(this.goods));
    console.log(`Общая стоимость корзины: ${this.totalPrice} рублей`);
};

const cart1 = new Cart();
cart1.clear();
cart1.addGoods('apple watch', 500.5, 2);
cart1.addGoods('apple 15', 1500, 3);
cart1.print();


// const Car = function (brand, model, maxTank) {
//     this.brand = brand;
//     this.model = model;
//     this.maxTank = maxTank;
//     this.nowTank = Math.floor(Math.random() * this.maxTank);
// };
//
// // статичный метод класса Car
// Car.from = function ({brand, model, maxTank}) {
//     return new Car({brand, model, maxTank});
// };
//
// Car.prototype.needPetrol = function () {
//     console.log(' this.maxTank - this.nowTank: ', this.maxTank - this.nowTank);
//     return (this.maxTank - this.nowTank);
// };
//
// Car.prototype.fillUp = function () {
//     return this.nowTank = this.maxTank;
// };
//
// Car.from = function ({brand, model, maxTank}) {
//     return new Car({brand, model, maxTank});
// };
//
// const PassangerCar = function (brand, model, maxTank, typeFuel = 'petrol') {
//     Car.call(this, brand, model, maxTank);
//     this.typeFuel = typeFuel;
//     this.typeCar = 'passenger';
// };
//
// PassangerCar.contextFrom = function () {
//     console.log(this);
// };
//
// const bmw = new PassangerCar('bmw', 'x5', 60);
//
//
// Object.setPrototypeOf(PassangerCar.prototype, Car.prototype);
// console.log(' bmw: ', bmw);
// bmw.needPetrol();
// PassangerCar.contextFrom();