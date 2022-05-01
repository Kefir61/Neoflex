import React from 'react'
import like from '../img/icons/likes.svg'
import cart from '../img/icons/cart.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Header() {
     const allTotalCount = useSelector(({ cart }) => cart.allTotalCount);
     return (
          <header className="header">
               <NavLink className="logo" to='/'>QPICK</NavLink>
               <div className="header__icons">
                    <a href="">
                         <img src={like} alt=""></img>
                         <div className="header__icons--count">0</div>
                    </a>
                    <NavLink to='/cart'>
                         <img src={cart} alt=""></img>
                         {allTotalCount != 0
                              ? <div className="header__icons--count">{allTotalCount}</div>
                              : ''
                         }
                    </NavLink>
               </div>
          </header>
     )
}

export default Header