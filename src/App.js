import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <ContentHeader />
          <div className="cardBlock">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
