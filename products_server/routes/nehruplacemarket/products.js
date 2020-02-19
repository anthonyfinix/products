const express = require('express')
const router = express.Router();
const fetch = require('node-fetch');
const cheerio = require('cheerio');


router.get('/motherboards',(req,res)=>{
    fetch('https://www.nehruplacemarket.com/price-list/motherboard-price-list.html')
        .then(res => res.text())
        .then(body => {
            res.json({data:getProducts(body)})
        })
});


const getProducts = (body) => {
    $ = cheerio.load(body);
    const table = $('table[style="border-collapse: collapse; width: 100%; font-family: Helvetica,Arial,sans-serif; font-size: 12px; text-align: left;"]');
    const products = []
    table.each((i,el)=>{
        const tr = $(el).children('tbody').children('tr');
        $(tr).each((i, el) => {
            let product = {}
            $('td', el).each((i, el) => {
                if ($(el).text() == '') return
                product[i] = $(el).text();
            });
            products.push(product);
        });
    })
    return products;
}

module.exports = router;