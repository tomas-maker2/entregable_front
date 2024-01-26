import React, { useContext } from 'react'
import './ProductDisplay.css'
import startIcon from '../Assets/star_icon.png'
import starDull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    
    const {product} = props;

    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <img src={starDull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nemo quidem tempore dolores dolor exercitationem nulla accusamus doloribus, consectetur ducimus repudiandae aperiam molestias enim laudantium a eum voluptatum perspiciatis quae?
            </div>
            <div className="productdisplay-right-size">
                <h1>Selext Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Largee</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, Tshirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay