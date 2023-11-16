import { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../context/shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'
function Cartitems(){
    const {getTotalCartAmount,all_product,cartItems,removeFromcart}=useContext(ShopContext)
    return(
        <div className="cartitems">
            <div className='cartitems-formate-main'>
                <p>Products</p>
                <p>Title</p>
                <p>price</p>
                <p>Quality</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
<hr/>
{all_product.map((e)=>{
    if (cartItems[e.id]>0)
    {
        return <div className='cartitems-formate cartitems-formate-main'>
        <img src={e.image} alt='' className='cartitems-product-icon'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.new_price*cartItems[e.id]}</p>
        <img className='cartitems-remove-icon' src={remove_icon}  onClick={()=>{removeFromcart(e.id)}} alt=''/>
    </div>
    }
    return null;
})}
<div className='cartitems-down'>
    <div className='cartitems-total'>
        <h1>Cart Total</h1>
        <div>
            <div className='cartitems-total-item'>
                <p>Subtatal</p>
                <p>${getTotalCartAmount}</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
                <p>Shopping free</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className='cartitems-promocode'>
        <p>if you have a promo codeenter here</p>
        <div className='cartitems-promobox'>
            <input type='text' placeholder='promo code'/>
            <button>submit</button>
        </div>
    </div>
</div>
        </div>
    )
}export default Cartitems