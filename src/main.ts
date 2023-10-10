interface productType {
  id: number;
  title: string;
  price: number;
  stock: number;
  creationDate?: Date;
}

const products: productType[] = [
  {
    title: 'Iphone 13',
    id: 1,
    stock: 10,
    price: 100,
  },
  {
    id: 2,
    title: 'Hp laptop x360',
    price: 500,
    stock: 5,
    creationDate: new Date(),
  },
  {
    id: 3,
    title: 'Lenovo laptop',
    price: 200,
    stock: 45,
  },
];

const someProducts: productType[] = [
  {
    id: 4,
    title: 'Lenovo laptop xi yoga',
    price: 200,
    stock: 45,
  },
];

// foreach

// products.forEach(function (item) {
//   console.log(item.title);
// });

// products.forEach((item) => {
//   console.log(item.title);
// });

// Map

// products.map((item) => {
//   console.log(item.title);
// });

// Filter

// const itemsBelow10 = products.filter((item) => {
//   //   if (item.stock <= 10) {
//   //     return item;
//   //   }

//   return item.stock <= 10;
// });

// const itemsBelow10 = products.filter((item) => item.stock <= 10);

// console.log(itemsBelow10);

// Reduce

const totalPrice = products.reduce((prevBalance, currentItem) => {
  return prevBalance + currentItem.price;
}, 0);

// ES5
// const productName = products[0].title;
// const productPrice = products[0].price;

// const { title, price, stock } = products[0];

// console.log(title, price, stock);

// Spread operator

// ES5
// const allProducts = products.concat(someProducts);

// ES6

// const allProducts = [...someProducts, ...products];
// console.log(allProducts);

const firstname = 'ali';
const lastname = 'farah';
// const fullname = firstname + ' ' + lastname;
const fullname = `${firstname} ${lastname}`;

let age = 28;

// if(age >= 10 && age < 20) {
//     console.log("You are teenager")
// } else if(age >=20 && age < 30) {
//     console.log("you are in twenth's")
// }

age >= 10 && age < 20
  ? console.log('You are teenager')
  : age >= 20 && age < 30
  ? console.log("You are in twenth's")
  : age >= 30 && age < 40
  ? console.log("You are in thirth's")
  : console.log('Please provide valid age between 10 and 40');
