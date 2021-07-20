import React, { useState } from 'react'
import styled from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Container = styled.div`
  
  background: #202124;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`
const Ul = styled.ul`
  list-style: none;
  display: flex;  
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  a{    
    font-size: 1.5rem;         
    text-decoration: none;
    color: #fff;
    margin-right: 2rem;
    &:hover{
      color:#000;
    }
  }
  @media(max-width:576px){
    flex-flow: column wrap;
  }

`
const ScrollUp = styled.button`
    outline: 0;
    border:0;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 9;
    text-align: center;  
    background:#ffc107;
`
const LinkScrollUp = styled.a`
  width: 40px;
  height: 40px;  
  text-decoration: none;
  color: #000;
  
  color: #fff;
  padding: 0.5rem;
  transition: 1s;  
  line-height: 40px;
  cursor: pointer;
  border-radius: 2px;  
`
const LinkBrand = styled(Link)`
  text-decoration: none;  
  transition: 1s;  
  line-height: 40px;
  cursor: pointer;
`
const LinkNav = styled(Link)`
  &:hover{
    color:#16BAE7 !important;
  }
`

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const btnVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true)
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', btnVisible);
  return (
    <footer style={{ position: 'absolute', bottom: '0', width: '100%', height: '2.5rem' }}>
      <Container >
        <h3>
          <LinkBrand to='/'>
            <span style={{ color: '#648cff' }}>Space</span>
            <span style={{ color: '#fc6a42' }}>Walker</span>
          </LinkBrand>
        </h3>
        <Ul>
          <LinkNav to="/">
            Home
          </LinkNav>
          <LinkNav to="/about">
            About
          </LinkNav>
          <LinkNav to="/contact">
            Contact
          </LinkNav>
        </Ul>
      </Container>
      <ScrollUp tabIndex={0} onClick={scrollTop} style={{ display: visible ? 'inline' : 'none' }}>
        <LinkScrollUp><FaAngleUp color='black' size='1.5rem' /></LinkScrollUp>
      </ScrollUp>
    </footer>

  )
}

export default Footer
