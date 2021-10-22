import Card from '../components/Card';


function Home ({searchValue,inputClear,onCahangeSearchInput,items,addToFavorite,addToCart}){
    return (
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
              .filter( elem =>elem.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map ( (item, index) => (
              <Card 
                key = {index}
                id = {item.id}
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
                onFavorite = {addToFavorite}
                onPlus = {addToCart}
              />
            ))
            }
          </div>
        </div>
      </div>
    )
}

export default Home;