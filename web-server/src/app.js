const path = require('path');
const express = require('express');

console.log(__dirname); //source directory
console.log(__filename);
console.log(path.join(__dirname, '../public'));

const app =  express();
const publicDirectoryPath = path.join(__dirname,'../public');

app.set('view engine','hbs')// used to create dynamic templates
app.use(express.static(publicDirectoryPath));
// app.com


app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Gyuliz'
    });
});

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'Gyuliz',
        name: 'Great'
    });
});

app.get('/help',(req,res) => {
    res.render('help',{
        helpText: "Help is here"
    });
});
// app.get('/help',(req,res) => {
//     res.send({
//         name: 'Gyuliz',
//         location: 'Amsterdam'
//     });
// });
//
// app.get('/about', (req,res) => {
//     res.send('<h1>About</h1>');
// });

// app.get('/weather', (req,res)=>{
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Amsterdam'
//     });
// })

app.listen(3000, () => {
    console.log('server is up on port 3000')
});




