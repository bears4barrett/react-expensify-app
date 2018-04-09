// Object Descruturing

// const person = {
//   name: 'Barrett',
//   age: 31,
//   location: {
//     city: 'Austin',
//     temp: 80
//   }
// };
//
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ready Player One',
//   author: 'Anonymous',
//   publisher: {
//     name: 'Audible'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName);


// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ street, city, state, zip ] = address;
console.log(`You are in ${city} ${state}`);

const [, city2, state2 = 'New York' ] = address
console.log(`You are in ${city2} ${state2}`);

const item = ['Coffee (iced)', '$2.00', '$2.60', '$2.75'];
const [ coffee, , price ] = item;
console.log(`A medium ${coffee} costs ${price}`);
