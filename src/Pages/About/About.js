import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import SideContent from '../../Content/SideContent/SideContent'
import { DivContent, H1 } from '../Contact/Contact'

const About = () => {

   return (
      <Container style={{ marginTop: '5rem' }}>
         <Row>
            <Col lg={9} >
               <main>
                  <article>
                     <header>
                        <H1>About</H1>
                     </header>
                     <section>
                        <DivContent>
                           <p>Hi, I'm Space Walker. I'm a dedicated father and husband, a professional Web and Mobile Developer, and avid OSS and community advocate. I'm currently a Developer Advocate for Microsoft and have formerly worked for Disney on several web and mobile applications that you may have used.</p>
                           <p>I'm the author of various OSS such as <a href="place.visualstudio.com/items?itemName=johnpapa.vscode-peacock&amp;wt.mc_id=johnpapanet-blog-jopapa">Peacock</a>, the Angular Style Guide, and many popular <a href="http://www.pluralsight-training.net/microsoft/Authors/Details?handle=john-papa">Pluralsight courses</a>.</p>
                           <p>You can often find me speaking and training at various events around the world in keynotes, workshops, and sessions for events such as <a href="http://www.ng-conf.org/">ngConf</a>, <a href="http://www.anglebrackets.org/">AngleBrackets</a>, and TechEd/Ignite.</p>
                           <p>You can listen to me on the popular weekly podcast <a href="https://realtalkjavascript.simplecast.com/">Real Talk JavaScript</a>.</p>
                           <p>You can reach me at <a href="/">muratakdeniz</a> or on twitter at <a href="http://twitter.com">@space_walker</a>.</p>

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

export default About
