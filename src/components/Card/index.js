import React from 'react'
import styles from "./Card.module.scss"

function Card ({onFavorite, imageUrl, title, price, onPlus}) {
    const [added, setAdded] = React.useState(false);
    const onClickPlus = () => {
        // setAdded (added ? false : true)
        setAdded (!added);
        onPlus({onFavorite, imageUrl, title})
    }

    return (
        <div className={styles.card}>
            <button className = {styles.cardFavorite} onClick = {onFavorite}>
                <img src="img/favorite-sneakers.svg" alt="Избранное" />
            </button>
            <img className = {styles.cardImg} src= {imageUrl} alt="Кросовки" />
            <h5 className={styles.cardTitle}>{title}</h5>
            <div className={styles.cardFooter}>
                <div className={styles.cardPrice}>
                    <span className = {styles.text}>Цена:</span>
                    <span className = {styles.price}>{price} руб.</span>
                </div>
                <button className = {styles.cardAdd} onClick = {onClickPlus}>
                    {added ? <img src="img/added.svg" alt="Добавить" /> : <img src="img/add.svg" alt="Добавить" />}
                    {/* <img src="img/add.svg" alt="Добавить" /> */}
                </button>
            </div>
        </div>
    );
}

export default Card;