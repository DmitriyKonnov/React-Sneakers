import React from 'react'
import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'
import Cart from './components/Cart'


function App() {
  const [items, setItems] = React.useState([  {"title": "Мужские Кроссовки Nike Blazer Mid Suede",
  "price": 12999,
  "imageUrl": "/img/sneakers-1.jpg"
 },
 {"title": "Max 270и Nike Blazer Mid Suede",
  "price": 12999,
  "imageUrl": "/img/sneakers-2.jpg"
 },
 {"title": "Мужские Кроссовки Nike Blazer Mid Suede",
  "price": 8499,
  "imageUrl": "/img/sneakers-3.jpg"
 },
 {"title": "Кроссовки Puma X Aka Boku Future Rider",
  "price": 8999,
  "imageUrl": "/img/sneakers-4.jpg"
 },
 {"title": "Мужские Кроссовки Under Armour Curry 8",
  "price": 10999,
  "imageUrl": "/img/sneakers-5.jpg"
 },
 {"title": "Мужские Кроссовки Nike Kyrie 7",
  "price": 12999,
  "imageUrl": "/img/sneakers-6.jpg"
 },
 {"title": "Мужские Кроссовки Jordan Air Jordan 11",
  "price": 14999,
  "imageUrl": "/img/sneakers-7.jpg"
 },
 {"title": "Мужские Кроссовки Nike LeBron XVIII",
  "price": 12999,
  "imageUrl": "/img/sneakers-8.jpg"
 },
 {"title": "Мужские Кроссовки Nike Lebron XVIII Low",
  "price": 11999,
  "imageUrl": "/img/sneakers-9.jpg"
 },
 {"title": "Кроссовки Puma X Aka Boku Future Rider",
  "price": 6999,
  "imageUrl": "/img/sneakers-10.jpg"
 },
 {"title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
  "price": 17999,
  "imageUrl": "/img/sneakers-11.jpg"
 },
 {"title": "Мужские Кроссовки Nike Blazer Mid Suede",
  "price": 10999,
  "imageUrl": "/img/sneakers-12.jpg"
 },])
  const [ cartOpened, setCartOpened] = React.useState ( false );

  return (
    <div className="wrapper">
      {/* {cartOpened ? <Cart onClose = { () => setCartOpened( false )}/> : null} */}
      {cartOpened && <Cart onClose = { () => setCartOpened( false )}/>}
      <Header onClickCart = { () => setCartOpened(true)}/>
      <div className="content">
        <div className="container">
          <ContentHeader />
          <div className="cardBlock">
            {items.map ( (item) => (
              <Card 
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
                onFavorite = {() => console.log('Нажми избранное')}
                onPlus = {() => console.log('Нажми плюс')}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
