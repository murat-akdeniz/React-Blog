
import styled from 'styled-components'
import Burger from './Burger'
import { Link } from 'react-router-dom'

const Nav = styled.nav`   
  padding: 1rem 1.5rem;  
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  text-align:center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  background: #16BAE7;
  z-index: 100;
  color: #fff;  
`
const LinkBrand = styled(Link)` 
  text-decoration: none;
  color: #fff;
  padding: 0.5rem;
  transition: 1s;  
  line-height: 40px;
  cursor: pointer; 
  &:hover{
    color: #373A42;
  }
`
const Navbar = () => {

  return (
    <Nav className='container-fluid'>
      <div className="logo">
        <LinkBrand style={{ background: 'transparent' }} to='/'>
          <span>Space Walker</span>
        </LinkBrand>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
