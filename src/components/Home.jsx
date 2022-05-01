import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { addHeaderphoneToCart } from '../redux/actions/cart';
function Home() {
     const dispatch = useDispatch();
     const headPhons = useSelector(({ headPhons }) => headPhons.headPhons);
     const wirelessHeadphons = useSelector(({ headPhons }) => headPhons.wirelessHeadphons);
     console.log(headPhons)
     const hendleAddHearphonsToCart = (obj) => {
          dispatch(addHeaderphoneToCart(obj))
     }
     return (
          <main className="main">
               <h2 className="main__index--title">Наушники</h2>
               <div className="main__goods">
                    {headPhons.map(obj => <Card key={obj.id} obj={obj} onClickAddHeadphons={hendleAddHearphonsToCart} />)}
               </div>
               <h2 className="main__index--title">Беспроводные наушники</h2>
               <div className="main__goods">
                    {wirelessHeadphons.map(obj => <Card key={obj.id} obj={obj} />)}
               </div>
          </main>
     )
}

export default Home