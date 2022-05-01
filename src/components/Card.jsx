import React from 'react'

function Card({ obj, onClickAddHeadphons }) {
     return (
          <div className="main__goods--card card">
               <div className="card-img"><img src={obj.img} alt=""></img></div>
               <div className="card-content">
                    <h4 className="card-content__title">{obj.title}</h4>
                    <div className="card-content__price">
                         <span>{obj.price} ₽</span>
                         {obj.oldPrice ? <span className="old--price">{obj.oldPrice}</span> : ""}
                    </div>
                    <div className="card-content__rating">{obj.rate}</div>
                    <div className="card-content__buy">
                         <button onClick={() => onClickAddHeadphons(obj)}>Купить</button>
                    </div>
               </div>
          </div>
     )
}

export default Card