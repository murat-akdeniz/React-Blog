import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'


const Form = styled.form`   
  
  font-size: 2rem;  
  text-align: center;
  
  margin: 0 auto;
  max-width: 560px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  border-radius: 65px;
  box-shadow: 0 15px 30px 0 rgb(48 54 77 / 10%);
  border: none;
  color: #223464;  
  height: 60px;
  line-height: 1.42857;
  padding: 6px 36px;  
  

  .btn{
    background: transparent;    
    outline: 0px;
    cursor: pointer;      
    border: none;    
    border-radius: 25px;
    height: 50px;
    text-align: center;
    width: 50px;    
    background: #16BAE7;
    color: #FFFFFF; 
    
  }

  #search{
    border: 0;
    background: transparent;
    font-size: 18px;
    outline: none;
    
  }

`
const SearchBar = ({ topic, searchTopic }) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id='search'
        placeholder='Search topic...'
        value={topic}
        onChange={searchTopic}
      />
      <button className='btn'>
        <FaSearch size='1.2rem' />
      </button>
    </Form>

  )
}

export default SearchBar
