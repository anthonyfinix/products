const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
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
    .then(body => res.json(body))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

