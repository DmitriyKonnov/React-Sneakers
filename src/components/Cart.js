function Cart () {
    return (
        <div className="cart">
            <div className="cartBg">
                <div className="cartBlock">
                    <div className="cartHeader">
                        <h3>Корзина</h3>
                    </div>
                    <div className="cartContent">
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="../img/sneakers-1.jpg" alt="" />
                            </div>
                            <div className="cartItemContent">
                                <p className="cartItemName">Мужские Кроссовки Nike Air Max 270</p>
                                <p className="cartItemPrice">12 999 руб.</p>
                            </div>
                            <button className = "cartRemove">
                                <img src="../img/remove.svg" alt="Добавить" />
                            </button>
                        </div>
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="../img/sneakers-2.jpg" alt="" />
                            </div>
                            <div className="cartItemContent">
                                <p className="cartItemName">Мужские Кроссовки Nike Air Max 270</p>
                                <p className="cartItemPrice">12 999 руб.</p>
                            </div>
                            <div className="cartItemButton">
                                <img src="../img/remove.svg" alt="Добавить" />
                            </div>
                        </div>
                    </div>
                    <div className="cartFooter">
                        <div className="cartSum">
                            <span className = "cartFooterName">Итого: </span>
                            <div className = "cartFooterDash"></div>
                            <span className = "cartFooterPrice">21 498 руб. </span>
                        </div>
                        <div className="cartSum">
                            <span className = "cartFooterName">Налог 5%: </span>
                            <div className = "cartFooterDash"></div>
                            <span className = "cartFooterPrice">1074 руб. </span>
                        </div>
                        <button className = "cartFooterBtn">
                            <span>Оформить заказ</span>
                            <img src="../img/arrow-btn.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Cart