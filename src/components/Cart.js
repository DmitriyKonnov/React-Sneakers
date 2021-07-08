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
                            <div className="cartItemContent"></div>
                            <div className="cartItemButton"></div>
                        </div>
                    </div>
                    <div className="cartFooter">
                        <div className="cartSum">
                            <span></span>
                            <div></div>
                            <span></span>
                        </div>
                        <div className="cartSum">
                        <span></span>
                            <div></div>
                            <span></span>
                        </div>
                        <button></button>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Cart