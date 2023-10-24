'use strict';

const Cart = function ([goods = [], totalPrice = 0, count = 0]) {
    this.goods = goods;
    this.totalPrice = totalPrice;
    this.count = count;
};

Cart.prototype.addGoods = function (item) {
    this.goods.push(item);
    this.increaseCount(item.amount);
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
    console.log(`Cart total: ${this.totalPrice} $`);
    console.log(`Items total: ${this.count}`);
};

const cart1 = new Cart([]);
cart1.clear();
cart1.addGoods({name: 'apple watch', price: 500.5, amount: 2});
cart1.addGoods({name: 'apple 15', price: 1500, amount: 3});
cart1.getTotalPrice();
cart1.print();

const Goods = function (name = '', price = 1, discount = 0) {
    this.name = name;
    this.price = price;
    this.discount = discount;
};

const FoodGoods = function (
    name = '',
    price = 1,
    discount = 0,
    calories = 1) {
    Goods.call(this, name, price, discount);
    this.calories = calories;
    this.amount = 1;
};

const ClothingGoods = function (
    name = '',
    price = 1,
    discount = 0,
    material = '') {
    Goods.call(this, name, price, discount);
    this.material = material;
    this.amount = 1;
};
const TechnicsGoods = function (
    name = '',
    price = 1,
    discount = 0,
    type = '') {
    Goods.call(this, name, price, discount);
    this.type = type;
    this.amount = 1;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);
Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

const food = new FoodGoods('grape', 18, 0, 100);
const clothes = new ClothingGoods('coat', 3000, 3, 'cashmere');
const technics = new TechnicsGoods('phone', 1000, 2, 'connection');
console.log(' food: ', food);
console.log(' food: ', food instanceof Goods);
cart1.addGoods(food);
cart1.addGoods(clothes);
cart1.addGoods(technics);
cart1.print();