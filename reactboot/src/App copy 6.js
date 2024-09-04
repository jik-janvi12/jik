import React, { useState } from 'react'
import './App.css';
import { Formik, Field, Form } from 'formik';
 function App() {
  const [data ,setData] = useState([])
  return(
    <>
    <Formik 
     initialValues={{
      name: '',
      surname:'',
     }}
     onSubmit={async (values) =>{
      // console.log(values);
      setData=([...data , values])
     }}
    >
        <Form>
            name:- <Field type="name"></Field>
            <br />
            surname:-<Field type="surname"></Field>
            <br />
            submit:-<button type='submit'>submit</button>
        </Form>
       
    </Formik>
     {/* <table border={1}>
          <tr>
            <td>name</td>
            <td>surname</td>
          </tr>
          {
            data.map((item , index) =>(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
              </tr>
            ))
          }
        </table> */}
    </>
  )
 } 
export default App
