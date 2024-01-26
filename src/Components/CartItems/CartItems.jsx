import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CartItems = () => {
    
    const {getTotalCartAmount,all_product, cartItems, removeFromCart} = useContext(ShopContext);

    const sendEmail = async () => {
        try {
            await axios.get('http://localhost:4000/mail'); 
            alert('Producto/s comprado/s con exito, se envia mail con notificación');
        } catch (error) {
            console.error('Error al enviar el correo electrónico', error);
            alert('Error al enviar el correo electrónico');
        }
    };

    return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main ">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={removeIcon} onClick={() =>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <Link to={'/thanks'}>
                <button onClick={sendEmail}>Proceed to checkout</button>
                </Link>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default CartItems