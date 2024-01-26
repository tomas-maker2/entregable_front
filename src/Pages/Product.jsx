import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcums from '../Components/Breadcrums/Breadcums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import ReletedProducts from '../Components/ReletedProducts/ReletedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <ReletedProducts/>
    </div>
  )
}

export default Product