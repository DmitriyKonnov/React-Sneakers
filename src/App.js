import React from 'react'
import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'
import Cart from './components/Cart'

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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
