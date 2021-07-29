import React from 'react'
import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'
import Cart from './components/Cart'


function App() {
  const body = document.body;

  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([])
  

  React.useEffect ( () => {
    fetch('https://60f84823ee56ef0017975864.mockapi.io/items').then ( (res) => {
      return res.json();
    }).then( (json) => {
      setItems(json);
    });
  }, [])

  const addToCart = (obj) => {
    // setCartItems([...cartItems, obj])
    setCartItems(prev =>[...prev, obj]);
    console.log(obj)
  }

 

  return (
    <div className="wrapper">
      {/* {cartOpened ? <Cart onClose = { () => setCartOpened( false )}/> : null} */}
      {cartOpened && <Cart items = {cartItems} onClose = { () => {setCartOpened( false )
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
                key = {item.id}
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
                onFavorite = {() => console.log(item.id)}
                onPlus = {addToCart}
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
