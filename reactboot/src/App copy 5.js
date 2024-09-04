import './App.css';
import { useState } from "react";
import { Formik, useFormik } from 'formik';
function App() {
  const [data ,setData] = useState([])
  const [editId ,setEditId] =useState(null)

  const formik =useFormik({
    initialValues:{
      name:'',
      surname:''
    },
    onSubmit: values =>{
      // console.log(values);
      setData([...data , values])
      formik.resetForm()
    }
    

    
  })
  const deletedata =(index) =>{              //index pass karavi
    // console.log("index ====",index);     //index male tena mate log padavi
    let copydata=[...data]                  //new word lay datacopy kari data ne add karavi
    copydata.splice(index,1)                //javascript function use kari data delete mate splic no use karvo //index and 1 be parametir pass karva 
    setData(copydata)                       // copy data ne setdata ma add karvi
 }
 const editdata =(item ,index) =>{
  // console.log(item);
  formik.setValues({
    name: item.name,
    surname:item.surname
  })
  setEditId(index)
 }
  return(
    <>
    <form onSubmit={formik.handleSubmit}>
      <table>
        <tr>
          <td>name</td>
          <td>
            <input type='text' name='name' id='' value={formik.values.name} onChange={formik.handleChange}></input>
          </td>
        </tr>
        <tr>
          <td>surname</td>
          <td>
            <input type='text' name='surname' id='' value={formik.values.surname} onChange={formik.handleChange}></input>
          </td>
        </tr>
        <tr>
          <td>submit</td>
          <td><input type='submit'></input></td>
        </tr>
      </table>

      <table border={1}>
        <tr>
          <td>name</td>
          <td>surname</td>
          <td>delete</td>
          <td>Edit</td>
          
        </tr>
        {
          data.map((item , index)=>(
            <tr>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>
              <button onClick={() =>deletedata(index)}>delete</button>
              </td>
              <td>
                <button onClick={() =>editdata(item ,index)}>Edit</button>
              </td>
            </tr>
          ))
        }
      </table>
    </form>
    </>
  )
}
export default App
