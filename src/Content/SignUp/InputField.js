import React from 'react'
import styled from 'styled-components'
//LABEL
const Label = styled.label`  
  color: #444;
  font-size: 1.2rem;  
  display: grid;
  grid-row-gap: 1px;

`
//INPUT
const Input = styled.input`   
  border: none;  
  outline: none;
  border-radius: 50px;
  padding: 1rem; 
  margin-top :1.2rem ;
  max-width :500px ;  
  font-size: 1rem;   
  box-shadow: 0 15px 30px 0 rgb(48 54 77 / 10%);
  border: none;
  color: #223464;  
  height: 60px;
  line-height: 1.42857;  
  @media(max-width:1199.33px){     
     width: 60vw;
  }
  @media(max-width:576px){     
     width: 75vw;
  }
`
//INPUT BUTTON
export const Button = styled.input`  
  border: none;  
  padding: 16px 20px;  
  font-size: 1.5rem; 
  border-radius: 65px;
  box-shadow: 0 15px 30px 0 rgb(48 54 77 / 10%);
  border: none;
  color: #223464;  
  height: 60px;
  line-height: 1.42857;  
  width: 15rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;  
  transition: background .5s ease-out;
  font-weight: bold;
  ${props => props.disabled ? 'background:rgba(169, 169, 169,0.3);color:#ccc' :
      'background:#ffc107;'}

  
 
`
//TEXTAREA
const Textarea = styled.textarea`  
  background-color: #444;
  border: none;
  font-size: 16px;
  padding: 16px 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  font-weight: bold;
  color: red;
`
//props=label,onChangeHandler,type,value,placeHolder,formValues
const InputField = (props) => {
   console.log('props', props)
   //values=[email,firstName,lastName]
   const validateInput = values => {
      if (values.some(f => f === '') || values[0].indexOf('@') === -1)
         return true
      else
         return false
   }

   if (props.type === 'submit') {
      return (
         <Button
            type='submit'
            value={props.label}
            disabled={validateInput(props.formValues)}
            onClick={props.onClick}
         />
      )
   }

   else if (props.type === 'textarea') {
      return (
         <Label>
            {props.label}
            <Textarea
               onChange={(e) => props.onChangeHandler(e.target.value)}
               placeholder={props.placeholder}
               value={props.value}
               required={props.isRequired}
               rows={7}
               name={props.name}
            />
         </Label>
      )
   }
   else {
      return (
         <Label>
            {props.label}
            <Input
               onChange={(e) => props.onChangeHandler(e.target.value)}
               type={props.type}
               placeholder={props.placeholder}
               value={props.value}
               required={props.isRequired}
               name={props.name}
            />
         </Label>
      );
   }

}

export default React.memo(InputField)
