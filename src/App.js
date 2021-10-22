import React from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';

import Home from './pages/Home'
import Favorites from './pages/Favorites'



function App() {
  const body = document.body;

  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect ( () => {
    // fetch('https://60f84823ee56ef0017975864.mockapi.io/items').then ( (res) => {
    //   return res.json();
    // }).then( (json) => {
    //   setItems(json);
    // }); Вместо fetch использую axios
    axios.get('https://60f84823ee56ef0017975864.mockapi.io/items').then ((res) => {
      setItems(res.data)
    });
    axios.get('https://60f84823ee56ef0017975864.mockapi.io/cart').then ((res) => {
      setCartItems(res.data)
    });
    axios.get('https://60f84823ee56ef0017975864.mockapi.io/favorites').then ((res) => {
      setFavorites(res.data)
    });
  }, [])

  const addToCart = (obj) => {
    axios.post('https://60f84823ee56ef0017975864.mockapi.io/cart',obj);
    // setCartItems([...cartItems, obj]);
    setCartItems(prev =>[...prev, obj]);
    console.log(obj)
  };

  const addToFavorite = (obj) => {
    axios.post('https://60f84823ee56ef0017975864.mockapi.io/favorites', obj);
    setFavorites([...favorites,obj]);
  }

  const onCahangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  };

  const inputClear = () => {
    setSearchValue('');
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://60f84823ee56ef0017975864.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

 

  return (
    <div className="wrapper">
      {/* {cartOpened ? <Cart onClose = { () => setCartOpened( false )}/> : null} */}
      {cartOpened && <Cart items = {cartItems} onRemove = {onRemoveItem} onClose = { () => {setCartOpened( false )
        body.classList.remove( "noScroll" );
      }}/>}
      <Header onClickCart = { () => {setCartOpened(true);
        body.classList.add( "noScroll" );
      }}/>

      <Route path = "/" exact>
        <Home 
        searchValue = {searchValue} 
        inputClear= {inputClear} 
        onCahangeSearchInput = {onCahangeSearchInput}
        items = {items}
        addToFavorite = {addToFavorite}
        addToCart = {addToCart}
        />
      </Route>

      <Route path ="/favorites">
      < Favorites 
        items = {favorites}
      />
      </Route>
      
    </div>
  );
}

export default App;
