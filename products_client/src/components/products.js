import React from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

const createList = () => {
    fetch('http://localhost:3000/nehruPlace')
        .then(res => {console.log(res)})
}

export default Products =>
    <div>
        <button onClick={createList}>Laptop Laptops</button>
    </div>