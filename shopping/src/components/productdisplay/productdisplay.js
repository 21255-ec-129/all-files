import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
function ProductDis(props){

    const {product}=props;
    const {addTocart}=useContext(ShopContext);
    return(
        <div className="productdis">
            <div className='productdis-left'>
                <div className='productdis-img-list'>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>           
                </div>
                <div className='productdis-img'>
                <img  className='productdis-main-img'src={product.image} alt=''/>
                    
                </div>
            </div>
<div className='productdis-right'>
    <h1>{product.name}</h1>
    <div className='productdis-right-star'>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon}  alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull_icon} alt=''/>
<p>(122)</p>
    </div>
    <div className='productdis-right-prices'>
        <div className='productdis-right-prices-old'>${product.old_price}</div>
        <div className='productdis-right-prices-new'>${product.new_price}</div>
    </div>
    <div className='productdis-right-description'>
    WebOnline Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! Top Offers. Mobiles & Tablets. Electronics. TVs & Appliances. Fashion
    </div>
    <div className='productdis-right-size'>
        <h1>select size</h1>
        <div className='productdis-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
    <p className='productdis-right-category'><span>category:</span>women,T-shirt,crop top</p>
    <p className='productdis-right-category'><span>tags:</span>modern,latest,</p>

</div>
        </div>
    )
}
export default ProductDis