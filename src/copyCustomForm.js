import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import InputField from './InputField'
import { Button } from './InputField'

const H3 = styled.h3` 
   text-align: center;
   margin-bottom: 2rem;
`
const Form = styled.form` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Container = styled.div` 
  display: grid;
  grid-row-gap: 25px;

`
const CustomForm = ({ status, message, onValidated }) => {
   const [email, setEmail] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [check, setCheck] = useState(false)
   const [count, setCount] = useState(0)
   console.log('status', status);
   console.log('check', check);
   console.log('count', count);



   useEffect(() => {
      if (status === 'success') clearFields();
   }, [status])

   const clearFields = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      email &&
         firstName &&
         lastName &&
         email.indexOf('@') > -1 &&
         onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
         });
   }
   if (count >= 2) {
      setCheck(false)
      status = null
   }
   return (
      <Form onSubmit={(e) => handleSubmit(e)}>
         <H3>
            {status === 'success' && !check ? 'Success' :
               'See You Again?'}
         </H3>
         {status === 'sending' && (
            <div className='alert alert-primary'>sending...</div>
         )}
         {status === 'error' && (
            <div
               className='alert alert-danger'
               dangerouslySetInnerHTML={{ __html: message }}
            />
         )}
         {status === 'success' && !check && (
            <div
               className='alert alert-success'
               dangerouslySetInnerHTML={{ __html: message }}
            />
         )}

         {status !== 'success' || check ? (
            <Container>
               <InputField
                  label='First Name'
                  onChangeHandler={setFirstName}
                  type='text'
                  value={firstName}
                  placeholder='John'
                  isRequired
               />

               <InputField
                  label='Last Name'
                  onChangeHandler={setLastName}
                  type='text'
                  value={lastName}
                  placeholder='Doe'
                  isRequired
               />

               <InputField
                  label='Email'
                  onChangeHandler={setEmail}
                  type='email'
                  value={email}
                  placeholder='your@email.com'
                  isRequired
               />


            </Container>
         ) : null}


         {
            status === 'success' && !check ?
               <button
                  onClick={() => {
                     setCheck(true)
                     status = {};
                  }}
                  className="btn btn-warning px-5"
                  style={check ? { display: 'none' } : {}}
               >Close
               </button> :
               <InputField
                  label="Subscribe"
                  type="submit"
                  formValues={[email, firstName, lastName]}
                  onClick={() => {
                     setCount(() => count + 1);
                     if (count >= 2) {
                        setCheck(false);

                     }
                  }}
               />
         }


      </Form>
   )
}

export default CustomForm
