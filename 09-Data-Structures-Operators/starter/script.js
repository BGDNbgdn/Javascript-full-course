'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function (
    { starterIndex = 1, mainIndex = 0, time = '20:00', address } //use curly braces in function arguments so it can destructure it
  ) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      address
    );
  },
};

//this object will be destructured by the oredrdelivery function, now 4 different arguments, but 1 argumenty separated into
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del corso',
  mainIndex: 2,
  starterIndex: 2,
});

//destructuring objects
const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

//renaming
const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, tags, hours);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating  variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); // ==> 23 7

//nested objects
const {
  fri: { open: o, close: c }, //assigning o and c variable names to open and close nested objects
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  address: 'via del holla',
  starterIndex: 1,
});
