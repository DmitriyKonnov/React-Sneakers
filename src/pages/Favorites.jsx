import Card from '../components/Card';


function Favorites ({items, addToFavorite}){
    return (
        <div className="content">
        <div className="container">
          <div className="contentHeader">
            <h3 className="contentTitle"> Мои закладки</h3>
          </div>
          <div className="cardBlock">
            {items
              .map ( (item, index) => (
              <Card 
                key = {index}
                id = {item.id}
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
                favorited = {true}
                onFavorite = {addToFavorite}
              />
            ))
            }
          </div>
        </div>
      </div>
    )
}

export default Favorites;