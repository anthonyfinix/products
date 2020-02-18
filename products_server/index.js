const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const cheerio = require('cheerio')
const app = express();
const port = 3100;
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('root')
});

app.get('/nehruPlace', (req, res) => {
    fetch('https://www.nehruplacemarket.com/laptop-price/laptop-price.php')
        .then(res => res.text())
        .then(body => {
            $ = cheerio.load(body);
            const tr = $($('table')[1]).children('tbody').children('tr');
            const products = []
            const getProducts = ()=>{
                $(tr).each((i,el)=>{
                    let product ={}
                    $('td',el).each((i,el)=>{
                        product[i] = $(el).text();
                    });
                    products.push(product);

                });
                return products;
            }
            res.send(getProducts())
        })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

