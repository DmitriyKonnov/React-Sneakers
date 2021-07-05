function ContentHeader () {
    return (
        <div className="contentHeader">
            <h3 className="contentTitle">Все кросовки</h3>
            <div className="searchBlock">
              <img src="img/search.png" alt="Поиск" />
              <input type="text" placeholder = "Поиск..."/>
            </div>
          </div>
    );
}

export default ContentHeader;