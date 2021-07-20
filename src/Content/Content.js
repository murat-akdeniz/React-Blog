
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Card from './Card'
import SearchBar from '../SearchBar/SearchBar'
import SideContent from './SideContent/SideContent'

const MyRow = styled.div`
  margin:0 0 2rem 0;  
  
`
const Content = ({ myprops }) => {
  const props = myprops[0]
  console.log('propski', props)
  let ItemCards = props.filteredCard.map(item => {
    return (
      <MyRow key={item.id} className='row'>
        <Card cardItem={item} key={item.id} handleClickArticle={props.handleClickArticle} />
      </MyRow>
    )
  })

  return (
    <>
      <SearchBar topic={props.topic} searchTopic={props.searchTopic} />

      <Container style={{ marginTop: '5rem' }}>
        <Row>
          <Col xl={9} >
            {ItemCards}
          </Col>
          <Col xl={3}>
            <Row>
              <Col style={{ padding: '0.5rem' }}>
                <SideContent />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>


  )
}

export default Content
