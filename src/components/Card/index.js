import React from 'react'
import styles from "./Card.module.scss"

function Card (props) {
    const [added, setAdded] = React.useState(false);
    const onClickPlus = () => {
        // setAdded (added ? false : true)
        setAdded (!added);
    }

    return (
        <div className={styles.card}>
            <button className = {styles.cardFavorite} onClick = {props.onFavorite}>
                <img src="img/favorite-sneakers.svg" alt="Избранное" />
            </button>
            <img className = {styles.cardImg} src= {props.imageUrl} alt="Кросовки" />
            <h5 className={styles.cardTitle}>{props.title}</h5>
            <div className={styles.cardFooter}>
                <div className={styles.cardPrice}>
                    <span className = {styles.text}>Цена:</span>
                    <span className = {styles.price}>{props.price} руб.</span>
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