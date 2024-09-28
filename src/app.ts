//   == This keyword == // 



// Object literal

// const myObject = {
//     myMethod() {
//         console.log('Object', this);
//     }
// }

// myObject.myMethod(); // myObject

// // Classes
// class MyClass {
//     myMethod() {
//         console.log('Class', this);
//     }
// }
// const myInstance = new MyClass();
// myInstance.myMethod(); // myInstance


// // Function
// function myFunction() {
//     console.log('Function', this);
// }

// myFunction(); // Window object
// myFunction.call(myObject); // myObject
// myFunction.call([]); // myInstance




// const elem = document.querySelector('.click');

// function handleClick(event: Event) {
//     event.preventDefault();
//     console.log(this);
// }

// elem.addEventListener('click', handleClick, false);



// TYPE QUERIES

// const person = {
//     name: 'Todd',
//     age: 27
// };

// type Person = typeof person;
// type PersonKeys = Person;

// const anotherPerson: Person = {
//     name: 'John',
//     age: 30
// };



// KEYOF TYPE QUERY
// interface Person {
//     name: string;
//     age: number;
// }

// interface ReadonlyPerson {
//     readonly name: string;
//     readonly age: number;
// }

// const person: Person = {
//     name: 'Todd',
//     age: 27
// }

// person.name = 'ABC'; // Allowed

// // function freezePerson(person: Person): ReadonlyPerson {
// //     return Object.freeze(person);
// // }   

// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P];
// }

// function freeze<T>(obj: T): MyReadonly<T> {
//     return Object.freeze(obj);
// }

// const newPerson = freeze(person);



// interface Person {
//     name: string;
//     age: number;
// }

// interface PartialPerson {
//     name? : string;
//     age? : number;
// }

// function updatePerson(person : Person, prop: PartialPerson){
//     return {...person, ...prop};
// }

// const person: Person = {
//     name: 'Todd',
//     age: 27
// }

// updatePerson(person, {name: 'ABC'});


// REQUIRED MAP TYPE

// interface Person {
//     name: string;
//     age: number;
// }

// type MyRequired<T> = {
//     [P in keyof T]-?: T[P]; // if any property is optional, make it required (remove the question mark)
// }

// function printAge(person: MyRequired<Person>){
//     return `${person.name} is ${person.age}`;

// }


// const person: MyRequired<Person> = {
//     name: 'Todd',
//     age: 27
// }

// const age = printAge(person);




// PICK MAPPED TYPE
// interface Person { 
//     name: string;
//     age: number;
// }

// typr MyPick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }
// const person: Mypick<Person, 'name' | 'age' = {
//     name: 'Todd',
//     age: 27
// } 

// function foo(bar: string | number) {
//     if (typeof bar === 'string') {
//         // string
//     }
//     if (typeof bar === 'number') {
//         // number
//     }

// }

// class Song {
//     constructor(public title:string, public duration:string|number) {

//     }
// }

// function getSongDuration(item:Song) {
//     if (typeof item.duration === 'string') {
//         return item.duration;
//     }
//     if (typeof item.duration === 'number'){

//     }
// }

// const songDurationFromString = getSongDuration(
//     new Song('Wonderful Wonderful', '05:31')
// );




// instanceof type guards

// class Foo {
//     bar() {

//     }

// }

// const bar = new Foo();

// // console.log(bar instanceof Foo);
// // console.log(Object.getPrototypeOf(bar) === Foo.prototype); 


// class Song {
//     constructor(public title :   string,
//                 public duration: number) {}
// }

// class Playlist {
//     constructor(public name: string, 
//                 public songs: Song[]){}
// }

// function getItemName(item: Song | Playlist) {
//     if ((item as Song).title) {
//         return (item as Song).title;
//     }
//     return (item as Playlist).name;
// }

// const songName = getItemName(new Song('Wonderful Wonderful', 300000));
// console.log('Song name:', songName);

// const PlaylistName = getItemName(new Playlist('The Best Songs', [new Song('The Man', 300000)]));



// Intersection Types

// interface Order {
//     id: string;
//     amount: number;
//     currency: string;
// }

// interface Stripe {
//     card: string;
//     cvc: string;
// }

// interface PayPal {
//     email: string;
// }

// type checkoutCard = Order & Stripe;

// type checkoutPayPal = Order & PayPal;


// const order : Order = {
//     id: 'xj28s',
//     amount: 100,
//     currency: 'USD'
// }

// const orderCard: checkoutCard = {
//     ...order,
//     card: '1000 2000 3000 4000',
//     cvc: '123'
// }

// const orderPayPal: checkoutPayPal = {
//     ...order,
//     email: 'abc@def.com'
// }


// Discriminated Unions

// interface Order {
//     id: string;
//     amount: number;
//     currency: string;
// }

// interface Stripe {
//     type : 'stripe';
//     card: string;
//     cvc: string;
// }

// interface PayPal {
//     type : 'paypal';
//     email: string;
// }

// type checkoutCard = Order & Stripe;

// type checkoutPayPal = Order & PayPal;


// const order : Order = {
//     id: 'xj28s',
//     amount: 100,
//     currency: 'USD'
// }

// const orderCard: checkoutCard = {
//     type: 'stripe',
//     ...order,
//     card: '1000 2000 3000 4000',
//     cvc: '123'
// }

// const orderPayPal: checkoutPayPal = {
//     type: 'paypal',
//     ...order,
//     email: 'abc@def.com'
// }

// type Payload = checkoutCard | checkoutPayPal;

// function checkout(payload: Payload) {
//     if (payload.type === 'stripe') {
//         console.log(payload.card, payload.cvc);
//     }
//     if (payload.type === 'paypal') {
//         console.log(payload.email);
//     }
// }

// Interfaces vs Type Aliases


// Interfaces can be merged
// Interfaces are open to extension
// Interfaces are better when defining objects
// Type aliases are better for defining union types
// Type aliases are better for defining tuples
// Type aliases are better for defining function types
// Type aliases are better for defining intersection types
// interfaces are preferred


// Interface vs Class



