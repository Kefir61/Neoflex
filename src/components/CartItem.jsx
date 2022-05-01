import React from 'react'
import button1 from '../img/icons/minus.svg'
import button2 from '../img/icons/pluse.svg'
import del from '../img/icons/delete.svg'
function CartItem({ item, totalPrice, totalCount, onClickMinusItem, onClickPluseItem, onRemove }) {

     return (
          <div className="goods-cart__item item">
               <div className="item--cart__foundation">
                    <div className="cart--img"><img src={item.img} alt=""></img></div>
                    <div className="cart--count__buttons">
                         <button onClick={() => onClickMinusItem(item, totalPrice, totalCount)}><img src={button1} alt=""></img></button>
                         <span>{totalCount}</span>
                         <button onClick={() => onClickPluseItem(item, totalPrice, totalCount)}><img src={button2} alt=""></img></button>
                    </div>
               </div>
               <div className="item--cart__info info">
                    <div className="info--cart__name">{item.title}</div>
                    <div className="info--cart__price">{item.price} ₽</div>
               </div>
               <button onClick={() => onRemove(item.id)} className="item--cart__delete"><img src={del} alt=""></img></button>
               <div className="item--cart__price"> {totalPrice} ₽</div>
          </div>
     )
}

export default CartItem