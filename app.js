const express = require('express'); //framework js pour api rest https://expressjs.com/
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }                
    ];

    let tagline = "Any code of your own that haven't looked for siw or mor months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

app.get('/about', (req, res) => res.render('pages/about'));


app.listen(3000, console.log('Example app listening on port 3000!'));