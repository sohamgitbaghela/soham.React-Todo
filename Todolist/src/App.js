import './App.css';
import React, { useState } from 'react';

function App() {
    const[inputlist, setinput]= useState('');
    var[items, setitem]= useState([]);
   
    const changeitem=(e)=>{
      setinput(e.target.value)
    }
    const enteritem=()=>{
      setitem((olditem)=>{
        return [...olditem,inputlist]
      })
      //console.log(items);
      setinput('')
    }

    const manageitem=(index)=>{
        items.forEach((val,ind)=>{
          if(index==ind)
          {
            items[index]=inputlist;
          }
        })
        setinput('')

    }
    
    const deleteitem=(ind)=>{
      setitem((olditem)=>{
        return olditem.filter((a,i)=>{
          return ind!=i
        })
      })
    }

  return (
    <div className="App">
      <div className="App-header"><h2>Here is your to do List</h2></div>
      <div className="App-content">
        
        <input type="text" id='My-text' placeholder='Please Enter your Task' onChange={changeitem} name={"myDetails"} value={inputlist} ></input>
        <button onClick={enteritem} >Add Task</button><br></br>
        <table>
          <thead>
            <tbody>
            <tr>
              <td className='Heading'>Task</td>
            
              <td className='Heading'>Modification</td>

              <td className='Heading'>Remove</td>

              </tr>   
            
            </tbody>           
            <tbody>{items.map((val,index)=>{
              return <tr>
                <td className='Data'>{val}</td>
                <td className='Data'><button className='Edit' onClick={()=>{manageitem(index)}}>Edit</button></td>
                <td className='Data'><button className='Delete' onClick={()=>{deleteitem(index)}}>delete</button></td>
              </tr>

            })}</tbody>
         
          </thead>
           
        </table>  
        
      </div>
    </div>
  );
}

export default App;
