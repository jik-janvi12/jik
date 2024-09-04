//insert view data
//delete edit button use
import './App.css';
import React from 'react'
import { useState } from "react";

 function App() {

    const[name ,setName]=useState('')
   const[surname ,setSurname]=useState('')
   const[password ,setPassword]=useState('')
   const[email ,setEmail]=useState('')
   const[editId ,setEditId]=useState(null)
   const[data ,setData]=useState([])

 const handleSubmitData =(e) =>{
  e.preventDefault()

   
    if(editId !== null){
        let editdata = [...data]
        editdata[editId]={name,surname,email,password}
        setData(editdata)
        setEditId(null)
    }
    else{
      setData([...data,{name,surname,password,email}])
    }
      setName('')
      setSurname('')
      setEmail('')
      setPassword('')
    
 }
 //delete data  is function
 const deletedata =(index) =>{              //index pass karavi
    // console.log("index ====",index);     //index male tena mate log padavi
    let copydata=[...data]                  //new word lay datacopy kari data ne add karavi
    copydata.splice(index,1)                //javascript function use kari data delete mate splic no use karvo //index and 1 be parametir pass karva 
    setData(copydata)                       // copy data ne setdata ma add karvi
 }

 // edit mate
 const editdata =(item ,index) =>{
  // console.log('edit =====>',index);
  setName(item.name)
  setSurname(item.surname)
  setEmail(item.email)
  setPassword(item.password)
  setEditId(index)
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
        <td>delete</td>
        <td>edit</td>
      </tr>
      {
        data.map((item , index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>
              <button onClick={() =>deletedata(index)}>delete</button>        
            </td>
            <td>
              <button onClick={() =>editdata(item,index)}>edit</button>
            </td>
          </tr>
        ))
      }
    </table>
  </>
  )
}
export default App;