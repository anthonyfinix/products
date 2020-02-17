import React from 'react';

function App() {
  return (
    <div className="App">
      <button onClick={test}>View List</button>
    </div>
  );
}

const test = () => {
  // fetch('http://localhost:3100/nehruPlace').then(res=>res.json().then(result=>console.log(result)));
}



export default App;
