
import { Row, Col, Container } from 'react-bootstrap'
import SideContent from '../../Content/SideContent/SideContent'
import styled from 'styled-components'


const Wrapper = styled.div`
   display: grid;
   grid-row-gap:30px;
`
const Article = ({ card }) => {

   const cardItem = card[0]
   return (
      <Container style={{ marginTop: '5rem' }} key={cardItem.id}>
         <Row>
            <Col xl={8} >
               <section>
                  <article>
                     <Wrapper>
                        <h1 style={{ textAlign: 'center' }}>{cardItem.title}</h1>
                        <div style={{ textAlign: 'center' }}>
                           <img src={cardItem.img} alt={cardItem.title}
                              className='img-fluid'
                           />
                        </div>
                        <div style={{ fontSize: '1.5rem', textIndent: '10 each-line', whiteSpace: 'pre-wrap' }}>{cardItem.text}</div>
                     </Wrapper>
                  </article>
               </section>


            </Col>
            <Col xl={4} style={{ padding: '1rem' }}>
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

export default Article
