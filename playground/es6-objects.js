//Object property shorthand

const name = 'Gyuliz';
const userAge = 20;

const user = {
    name,
    age: userAge,
};

console.log(user);

//object destructuring

const product = {
    label: 'Red notebook',
    price:3,
    stock:201,
    salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

const {label: productLabel , stock} = product;
// we are renaming label

console.log(productLabel, stock);


const transaction = (type, { label, stock}) => {

};

transaction('order',product);
