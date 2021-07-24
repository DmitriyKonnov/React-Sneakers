import React from 'react'
import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'
import Cart from './components/Cart'


function App() {
  const [items, setItems] = React.useState([]);
  const [ cartOpened, setCartOpened] = React.useState ( false );
  const body = document.body;

  React.useEffect ( () => {
    fetch('https://60f84823ee56ef0017975864.mockapi.io/items').then ( (res) => {
      return res.json();
    }).then( (json) => {
      setItems(json);
    });
  }, [])

 

  return (
    <div className="wrapper">
      {/* {cartOpened ? <Cart onClose = { () => setCartOpened( false )}/> : null} */}
      {cartOpened && <Cart onClose = { () => {setCartOpened( false )
        body.classList.remove( "noScroll" )
      }}/>}
      <Header onClickCart = { () => {setCartOpened(true)
        body.classList.add( "noScroll" )
      }}/>
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
