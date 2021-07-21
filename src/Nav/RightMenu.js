
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Ul = styled.ul`
  list-style: none;
  display: flex;  
  flex-flow: row nowrap;
  z-index: 10; 

  a{    
    font-size: 1.5rem;         
    text-decoration: none;
    color: #fff;
    margin-right: 2rem;
    &:hover{
      color:#000;
    }
    
  }

  @media (max-width:768px){
    flex-flow: column nowrap;
    justify-content: center;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100vw)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-left: 1rem;
    transition: transform 0.3s ease-in-out;   
    

    a{
      color: #fff;
      font-size: 2rem;    
      padding: 1rem 0;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover{
        color: yellow;
      }

    }

  }
`
const normalColor = {
  fontWeight: "bold",
  color: '#373a42'
}
const toggleColor = {
  fontWeight: "bold",
  color: '#16BAE7'
}
const RightMenu = ({ open }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;


  return (
    <Ul open={open} aria-hidden={!isHidden}>
      <NavLink exact to="/" tabIndex={tabIndex} activeStyle={open ? toggleColor : normalColor}>
        Home
      </NavLink>
      <NavLink exact to="/about" tabIndex={tabIndex} activeStyle={open ? toggleColor : normalColor}>
        About
      </NavLink>
      <NavLink exact to="/contact" tabIndex={tabIndex} activeStyle={open ? toggleColor : normalColor}>
        Contact
      </NavLink>
    </Ul>
  )
}

export default RightMenu
