import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import SideContent from '../../Content/SideContent/SideContent'

export const DivContent = styled.div`
   font-size: 1.3rem;
   padding:1rem;
`
export const H1 = styled.h1`
  text-align: center;

`

const Contact = () => {
   return (
      <Container style={{ marginTop: '5rem' }}>
         <Row>
            <Col lg={9} >
               <main>
                  <article>
                     <header>
                        <H1>Contact</H1>
                     </header>
                     <section>
                        <DivContent >
                           <p>Thanks for wanting to get in touch with me! If you would like to engage in a conversation about your upcoming event, please refer to the channels below. I look forward to hearing from you.</p>
                           <p>Please keep in mind that I get a huge amount of communications, so this page lists the channels I use and how I like to use them.</p>
                           <p><strong>Twitter: <a href="http://twitter.com">@space_walker</a></strong></p>
                           <p>I probably spend too much time here, but it has become my primary means of broadcasting things to the world. Please follow me here. I don't see every mention so you may not get a reply via a public tweet, but I'll try.</p>
                           <p><strong>LinkedIn: <a href="https://www.linkedin.com">space_walker</a></strong></p>
                           <p>My background is decently well covered here. I accept connections from people I've met, worked with, spoken with or otherwise had enough interaction to feel that I can call them a professional contact. I don't respond to requests from people I don't know.</p>

                        </DivContent>
                     </section>

                  </article>

               </main>

            </Col>
            <Col lg={3} style={{ padding: '1rem' }}>
               <Row>
                  <Col>
                     <SideContent />
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
   )
}

export default Contact
