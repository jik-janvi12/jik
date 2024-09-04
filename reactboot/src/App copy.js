//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import { useState } from "react";

 function App() {
  
  const[data, setData] = useState([{name:'demo',cat:'fruit'},{name:'demo1',cat:'fruit'}])
  return (
    <div>
      <table border={1}>
            <tr>
                <td>name</td>
                <td>demo</td>
            </tr>
            {
                data.map((item,i)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.cat}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}
export default App;