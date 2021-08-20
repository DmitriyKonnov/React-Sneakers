import React from 'react'

function Cart ({onClose, onRemove, items=[]}) {

    
  

    return (
            <div className="cart">
                <div className="cartBg">
                    <div className="cartBlock">
                        <div className="cartHeader">
                            <h3>Корзина</h3>
                            <button onClick = {onClose} className="cartRemove">
                                <img src="../img/remove.svg" alt="Добавить" />
                            </button>
                        </div>

                        {items.length > 0 ? 
                            <div className ="cartContainer">
                                <div className="cartContent">
                                    {items.map ( (item) => (
                                    <div className="cartItem">
                                        <div className="cartItemImg">
                                            <img src={item.imageUrl} alt="" />
                                        </div>
                                        <div className="cartItemContent">
                                            <p className="cartItemName">{item.title}</p>
                                            <p className="cartItemPrice">{item.price}</p>
                                        </div>
                                        <button onClick = {() => onRemove(item.id)} className = "cartRemove">
                                            <img src="../img/remove.svg" alt="Удалить" />
                                        </button>
                                    </div>))}
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
                             : 
                            <div className="emtyCart">
                                <div className="emtyCartimg">
                                    <img src="../img/box.png" alt="" />
                                </div>
                                <h3 className ="emtyCartTitle">Корзина пустая</h3>
                                <p className="emtyCartDescription">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                                <button onClick = {onClose} className = "emtyCartButton">
                                    <span>Вернуться назад</span>
                                    <img src="../img/arrow-btn.svg" alt="" />
                                </button>
                            </div>
                        }
                        
                        
                        
                    </div>
                </div>    
            </div> 
    );
}

export default Cart