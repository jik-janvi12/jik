import React, { useState } from 'react'
import './App.css';
import { Formik, Field, Form } from 'formik';
const Formikj = () => {
  const [data ,setData] = useState([])
  return (
   <>
      <Formik 
     initialValues={{
      name: '',
      surname:'',
     }}
    //  onSubmit={async (values) =>{
    //   // console.log(values);
    //   setData=([...data , values])
    //  }}
    >
        <Form>
            name:- <Field type="name"></Field>
            <br />
            surname:-<Field type="surname"></Field>
            <br />
            submit:-<button type='submit'>submit</button>
        </Form>
       
    </Formik>
   </>
  )
}
export default Formikj
