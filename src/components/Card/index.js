import styles from "./Card.module.scss"

function Card () {
    return (
        <div className={styles.card}>
            <button className = {styles.cardFavorite}>
                <img src="img/favorite-sneakers.svg" alt="Избранное" />
            </button>
            <img className = {styles.cardImg} src="img/sneakers-1.jpg" alt="Кросовки" />
            <h5 className={styles.cardTitle}>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className={styles.cardFooter}>
                <div className={styles.cardPrice}>
                    <span className = {styles.text}>Цена:</span>
                    <span className = {styles.price}>12 999 руб.</span>
                </div>
                <button className = {styles.cardAdd}>
                    <img src="img/add.svg" alt="Добавить" />
                </button>
            </div>
        </div>
    );
}

export default Card;