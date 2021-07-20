import React from 'react'
import styled from 'styled-components'
import MostRead from './MostRead'
import Subscribe from './Subscribe'
import SignUp from '../SignUp/SignUp'


const H2 = styled.h2`
    font-size: 1rem;    
    margin: 0;
    background: #202020;
    color: #fff;
    padding: 0 10px;
    height: 32px;
    width:160px;
    line-height: 32px;
    border-radius: 2px 2px 0 0;
`
const Ul = styled.ul`
  padding: 0;
  margin:0;
  list-style: none;
`

const SideContent = () => {
   return (
      <div>
         <div className="widget-title" style={{ borderBottom: '2px solid black' }}>
            <H2>Most Read</H2>
         </div>
         <div style={{ marginTop: '2rem' }}>
            <Ul>
               <MostRead />
            </Ul>
         </div>
         <SignUp />
         {/* <Subscribe /> */}
      </div>
   )
}

export default SideContent
