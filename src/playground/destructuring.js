//////////////////////////////////////////////
/////////ARRAY DESTRUCTURING//////////////////
//////////////////////////////////////////////

const address = [
  "1299 s Juniper Stree",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

// ordered list of variable names, you dont have to create x local variables.
//theres nothing to rename for variables
// you can set defaults
const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}`);

const item = ["coffee(hot)", "$2.00", "$2.50", "$2.75"];

const [drink, , mSize] = item;

console.log(`A medium ${drink} costs ${mSize}`);

//////////////////////////////////////////////
//////////OBJECT DESTRUCTURING////////////////
//////////////////////////////////////////////
const person = {
  //   name: "khadija",
  age: 31,
  location: {
    city: "London",
    temp: 10,
  },
};
//providing default value if name does not exist
const { name = "Kate", age } = person;
console.log(`${name} is ${age}`);

// assigning new variable name to destructured property
// const { city, temp: temprature } = person.location;

// if (city && temprature) {
//   console.log(`it's ${temprature} in ${city}`);
// }

// if (person.location.city && person.location.temp) {
//   console.log(`it's ${person.location.temp} in ${person.location.city}`);
// }

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "self-published" } = book.publisher;

if (publisherName) {
  console.log(publisherName);
}
