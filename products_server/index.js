const express = require('express');
const cors = require('cors');
const app = express();
const port = 3100;

const nehruplacemarket =  require('./routes/nehruplacemarket/products');

app.use(cors());



app.get('/', (req, res) => {
    res.send('root')
});

app.use('/nehruplacemarket', nehruplacemarket);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

