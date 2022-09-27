import './App.css';
import React, { useState } from 'react';

function App() {
    const[singleDetails, setDetails]=useState();
    const[allDetails, setallDetails]=useState([]);

    const handleSubmit=(event)=>{
      event.preventDefault();
       setallDetails=[...setallDetails,singleDetails]
    }

  return (
    <div className="App">
      <div className="App-header"><h2>Here is your to do List</h2></div>
      <div className="App-content">
        <form onSubmit="{handleSubmit}">
        <input type="text" id='My-text' placeholder='Please Enter your Work' onChange={e=>setDetails(e.target.value)} name="myDetails" ></input>
        <button type="submit" value="Submit">Add Details</button>
        </form>
      </div>
    </div>
  );
}

export default App;
