import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'
import Cart from './components/Cart'

function App() {
  return (
    <div className="wrapper">
      <Cart/>
      <Header />
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
