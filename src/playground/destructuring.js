/* Object */

// const person = {
//   // name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Krakow',
//     temp: 19
//   }
// }

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan H',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

/* Array */

// const address = ['12 Corn Street', 'Krakow', 'Poland', '12356'];

// const [, city, country] = address; //one comma = one item

// console.log(`You are in ${city}, ${country}.`);

const item = ['coffee (hot)', '$2', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);