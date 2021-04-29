const fs =  require('fs');
// const book = {
//     title: 'Ego is enemy',
//     author: 'Ryan Holiday'
// };
//
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
//
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

let newData = {...data, name:"Gyuliz",age:20}
const newJSON = JSON.stringify(newData);
fs.writeFileSync('1-json.json', newJSON);
console.log(dataBuffer);
console.log(dataBuffer.toString());
console.log(data)
console.log(newData)
