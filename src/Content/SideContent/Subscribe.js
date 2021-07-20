import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;

  @media(max-width:996px){
    flex-flow: column wrap;
    justify-content: center;
  }
    
`
const H1 = styled.h1`
  font-size: 2rem;
  @media(max-width:768px){
    font-size: 1.2rem;
  }
`

const Button = styled.button`
  background: black;
  color:#fff;
  padding:5px 15px;
  margin-top: 1rem;

`

const Input = styled.input`
  border-width: 0px 0px 1px;
  border-radius: 0px;
  background: transparent;
  width: 100%;
  height: 44px;  
  color: rgb(41, 41, 41);  
  line-height: 1.2;
  font-weight: 400;
  padding: 0px 15px;  
  outline: none;
  transition: border-color 0.25s ease 0s;
`
const Container = styled.div`
  border:3px solid #EECE1A;
  padding:15px 5px;
`

const Subscribe = () => {
  return (
    <Container className='d-flex justify-content-center flex-column align-items-center'>
      <div style={{ textAlign: 'center' }}>
        <H1>See You Again ?</H1>
        <p>You can send e-mail right here</p>
      </div>

      <Form>
        <div>
          <Input
            type="email"
            placeholder='Write your email here'
            required aria-label='email'
            name='email'
          />
        </div>
        <Button type='submit'>
          <span>Subscribe</span>
        </Button>
      </Form>
    </Container>
  )
}

export default Subscribe
