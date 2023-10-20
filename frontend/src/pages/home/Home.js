import React from 'react'
import Banner from './Banner';
import Category from './Category';
import ProductDetails from '../single-product/ProductDetails';
import Products from '../products/Products';

export default function Home() {
  return (
    <>
        <Banner/>
        <Category/>
        <Products/>
    </>
  )
}
