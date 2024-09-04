//insert view data
import './App.css';
import React from 'react'
import { useState } from "react";

 function App() {

    const[name ,setName]=useState('')
   const[surname ,setSurname]=useState('')
   const[password ,setPassword]=useState('')
   const[email ,setEmail]=useState('')
   const[data ,setData]=useState([])

 const handleSubmitData =(e) =>{
  e.preventDefault()

    setData([...data,{name,surname,password,email}])
    setName('')
    setSurname('')
    setEmail('')
    setPassword('')
    
 }
 
  return (
  <>
  <form onSubmit={handleSubmitData}>
    name:-<input type='text' name='name' id='' value={name}
    onChange={(e) =>setName(e.target.value)} ></input><br /><br />
    surname:-<input type='text' name='surname' id='' value={surname}
    onChange={(e) =>setSurname(e.target.value)}></input><br /><br />
    Email:-<input type='text' name='email' id='' value={email}
    onChange={(e) =>setEmail(e.target.value)}></input><br /><br />
    password:-<input type='text' name='password' id='' value={password}
    onChange={(e) =>setPassword(e.target.value)}></input><br /><br />
  
    Submit:-<input type='submit' name='' id=''></input>
  </form>
    <table border={1}>
      <tr>
        <td>name</td>
        <td>surname</td>
        <td>email</td>
        <td>password</td>
      </tr>
      {
        data.map((item , index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))
      }
    </table>
  </>
  )
}
export default App;