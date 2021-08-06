import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';


function App() {
  const body = document.body;

  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect ( () => {
    // fetch('https://60f84823ee56ef0017975864.mockapi.io/items').then ( (res) => {
    //   return res.json();
    // }).then( (json) => {
    //   setItems(json);
    // }); Вместо fetch использую axios
    axios('https://60f84823ee56ef0017975864.mockapi.io/items').then ((res) => {
      setItems(res.data)
    })
  }, [])

  const addToCart = (obj) => {
    // setCartItems([...cartItems, obj])
    setCartItems(prev =>[...prev, obj]);
    console.log(obj)
  }

  const onCahangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }

  const inputClear = () => {
    setSearchValue('');
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
          <div className="contentHeader">
            {
              searchValue.length > 0 ? <h3 className="contentTitle">Вы ищите:{searchValue}</h3> : <h3 className="contentTitle"> Все кросовки
              </h3>
            }
            <div className="searchBlock">
              <img src="img/search.png" alt="Поиск" />
              <button onClick = {inputClear} className="inputClear">
                <img src="../img/remove.svg" alt="Добавить" />
              </button>
              <input onChange = {onCahangeSearchInput} value = {searchValue} type="text" placeholder = "Поиск..."/>
            </div>
          </div>
          <div className="cardBlock">
            {items
              .filter ( (item) => item.title.toLowerCase().includes(searchValue))
              .map ( (item) => (
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
