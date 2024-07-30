import React from 'react'
import ProductList from '../components/ProductList'

const HomePage = () => {
  return (
    <div className="">
      <h1 className='text-2xl m-3 underline font-semibold'>Featured Products</h1>
      <ProductList />
    </div>
  )
}

export default HomePage