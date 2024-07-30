import React from 'react'
import CartIcon from '../assets/images/CartIcon.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="text-center border-2 border-black p-4 text-3xl font-bold m-3 rounded-2xl tranistion transform duration-300 hover:scale-95">
        <Link to='/'>Shopping Website</Link></div>
      <div className=' flex justify-end items-center mr-8'>
      <Link to="/cart" className="cart-icon"><img src={CartIcon} alt="Cart" className='w-12 h-12 tranistion transform duration-300 hover:scale-105'/></Link>
      </div>
    </header>
  )
}

export default Header