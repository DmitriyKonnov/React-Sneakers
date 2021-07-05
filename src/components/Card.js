function Card () {
    return (
        <div className="card">
            <button className = "cardFavorite">
                <img src="img/favorite-sneakers.svg" alt="Избранное" />
            </button>
            <img className = "cardImg" src="img/sneakers-1.jpg" alt="Кросовки" />
            <h5 className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardFooter">
                <div className="cardPrice">
                    <span className = "text">Цена:</span>
                    <span className = "price">12 999 руб.</span>
                </div>
                <button className = "cardAdd">
                    <img src="img/add.svg" alt="Добавить" />
                </button>
            </div>
        </div>
    );
}

export default Card;