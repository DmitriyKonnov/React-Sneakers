import React from 'react'
import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'
import Cart from './components/Cart'

const arr = [
  {title: "Мужские Кроссовки Nike Blazer Mid Suede",
   price: 12999,
   imageUrl: "/img/sneakers-1.jpg"
  }]

function App() {

  const [ cartOpened, setCartOpened] = React.useState ( false );

  return (
    <div className="wrapper">
      {cartOpened ? <Cart onClose = { () => setCartOpened( false )}/> : null}
      <Header onClickCart = { () => setCartOpened(true)}/>
      <div className="content">
        <div className="container">
          <ContentHeader />
          <div className="cardBlock">
            {arr.map ( (item) => (
              <Card 
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
              />
            ))

            }
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
