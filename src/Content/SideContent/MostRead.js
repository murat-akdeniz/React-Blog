import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/cat.jpg'
import img2 from '../../images/cow.jpg'
import img3 from '../../images/flowers.jpg'
import img4 from '../../images/man.jpg'
import img5 from '../../images/rape-blossom.jpg'
import img6 from '../../images/torres-del-paine.jpg'


const mostReadPost = [
  { src: img1, title: 'Blockchain Teknolojisi', id: 1 },
  { src: img2, title: 'Blockchain Teknolojisi', id: 2 },
  { src: img3, title: 'Blockchain Teknolojisi', id: 3 },
  { src: img4, title: 'Blockchain Teknolojisi', id: 4 },
  { src: img5, title: 'Blockchain Teknolojisi', id: 5 },
  { src: img6, title: 'Blockchain Teknolojisi', id: 6 }
]

const Li = styled.li`    
    margin-bottom: 15px;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 15px;    
    width: 100%;
    display: flex;
    flex-flow: row nowrap;

`
const MostRead = () => {
  return (
    <>
      {
        mostReadPost.map(item => (
          <Li key={item.id}>
            <div style={{ width: '40%' }}>
              <a href="/#">
                <img src={item.src} alt={item.title} className='img-fluid' />
              </a>
            </div>
            <div style={{ width: '60%', marginLeft: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '0' }}>
                <a href="/#" style={{ textDecoration: 'none', color: 'black' }}>{item.title}</a>
              </h3>
            </div>
          </Li>
        ))
      }
    </>
  )
}


export default MostRead
