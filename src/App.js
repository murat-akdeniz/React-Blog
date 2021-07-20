import Navbar from './Nav/Navbar'
import './index.css'
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Article from './Pages/Article/Article'
import { cardStore } from './Content/CardStore'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';


const arr = () => {
  let data = sessionStorage.getItem('mySessionStorage');

  if (data) return JSON.parse(data);
  else return [];

}

const App = () => {
  const [topic, setTopic] = useState('');
  const [card, setCard] = useState(arr);

  const searchTopic = (e) => {
    setTopic(() => e.target.value);
  }

  useEffect(() => {
    sessionStorage.setItem('mySessionStorage', JSON.stringify(card))
  }, [card])


  /*indexOf metodu içindeki ifade varsa 0 döndürür
  eğer aranan ifade yoksa da -1 döndürür.
  filter metodunda 0 ise false olur. Aranan ifade dışındakileri
  verir.  bu yuzden !==-1 bunu kullanırız.
  */
  const filteredCard = cardStore.filter(card => {
    return card.title.toLowerCase().indexOf(topic.toLowerCase()) !== -1
  })
  //cardItem=[{titel:...},{id:..},{text:...}]
  /* tıkladığımız cardItem ın id ile filteredCard daki 
  cardItem ın id si eşleşiyorsa diziden çıkar,geriye kalanları döndür diyor.*/
  const handleClickArticle = ({ cardItem }) => {

    const newCardList = filteredCard.filter(
      item => item.id === cardItem.id
    )
    setCard(newCardList);
  }



  return (
    <Router>

      <div className="page-container">
        <div className="content-wrap">

          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home topic={topic} searchTopic={searchTopic} filteredCard={filteredCard} handleClickArticle={handleClickArticle} />
            </Route>

            <Route path='/article'>
              <Article card={card} />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>


        </div>
        <Footer />
      </div>

    </Router>
  )
}
export default App

App.propTypes = {
  handleClickArticle: PropTypes.func,
  filteredCard: PropTypes.array
}
