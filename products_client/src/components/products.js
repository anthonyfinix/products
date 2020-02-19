import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const MotherBoards = () => {
    fetch('http://localhost:3100/nehruplacemarket/motherboards')
        .then(res => res.json())
        .then(response => {
            for (let i = 0; i > response.data.length; i++) {
                return <MenuItem value={response.data[i][1]}>{response.data[i][1]}</MenuItem>
            }
        });
}


// const Products = () => {


//     return (
//         <div>
//             {console.log(MotherBoards())}
//             <FormControl>
//                 <InputLabel>Age</InputLabel>
//                 <Select>
//                     {MotherBoards()}
//                 </Select>
//             </FormControl>
//         </div>

//     )
// }

export default class Products extends React.Component {
    async componentDidMount() {
        fetch('http://localhost:3100/nehruplacemarket/motherboards')
            .then(res => res.json())
            .then(response => {
                for (let i = 0; i > response.data.length; i++) {
                    return <MenuItem value={response.data[i][1]}>{response.data[i][1]}</MenuItem>
                }
            });
    }
    render() {
        return (
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Select>
                </Select>
            </FormControl>
        )
    }
};