import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { minusItem, pluseItem, removeCartItem } from '../redux/actions/cart';
import CartItem from './CartItem';

function Cart() {
     const dispatch = useDispatch()
     const items = useSelector(({ cart }) => cart.items);
     const allTotalPrice = useSelector(({ cart }) => cart.allTotalPrice);
     console.log(items)
     const addedHeadphons = Object.keys(items).map(key => {
          return (
               items[key].items[0]
          )
     });
     const total = Object.keys(items).map(key => {
          return (
               {
                    totalPrice: items[key].totalPrice,
                    totalCount: items[key].totalCount
               }
          )
     });

     const minusItemToCart = (obj, totalPrice, totalCount) => {
          dispatch(minusItem(obj, totalPrice, totalCount))
     }
     const pluseItemToCart = (obj, totalPrice, totalCount) => {
          dispatch(pluseItem(obj, totalPrice, totalCount))
     }

     const onRemoveItem = (id) => {
          dispatch(removeCartItem(id))
     }


     return (
          <main className="main">
               <h2 className="main__cart--title">Корзина</h2>
               <div className="main__cart">
                    <div className="main__cart--goods goods">
                         {addedHeadphons &&
                              addedHeadphons.map((item, key) => <CartItem key={items.id} item={item}
                                   totalPrice={total[key].totalPrice}
                                   totalCount={total[key].totalCount}
                                   onClickMinusItem={minusItemToCart}
                                   onClickPluseItem={pluseItemToCart}
                                   onRemove={onRemoveItem} />)
                         }
                    </div>
                    <div className="goods-cart__pay">
                         <div className="pay--cart__sum">
                              <span>ИТОГО</span>
                              <span>₽ {allTotalPrice}</span>
                         </div>
                         <button className="pay--cart__button">Перейти к оформлению</button>
                    </div>
               </div>
          </main>
     )
}

export default Cart