import React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Img = styled.img`
  width: 100%;
  height: 35vh;
  object-fit: cover;
  
  @media (max-width:996px){
    height: 100%;
  }
`
const LinkArticle = styled(Link)`
  &:hover{
    color:#fff !important;
  }
`
const P = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const Card = ({ cardItem, handleClickArticle }) => {

  return (
    <>
      <Col lg={6} >
        <Img src={cardItem.img} alt={cardItem.title} />
      </Col>
      <Col lg={6}>
        <div className='card p-1'>
          <div className="card-horizontal">
            <article className="card-body ">
              <h4 className="card-title">{cardItem.title}</h4>
              <P className="card-text mt-3">{cardItem.text}</P>
              <LinkArticle
                className='btn mt-1'
                style={{ background: '#16BAE7' }}
                to="/article"
                onClick={() => handleClickArticle({ cardItem })}
              > Read the article

              </LinkArticle>
            </article>
          </div>
        </div>
      </Col>
    </>
  )
}

export default Card
