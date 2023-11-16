import React, { useContext} from 'react'
import './css/shopcat.css'
import { ShopContext } from '../context/shopcontext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/items/item';


const Shopcat=(props)=>{
    const {all_product}=useContext(ShopContext);
    return(
        <div className="shop-cat">
<img  className='shopcat-banner' src= {props.banner} alt=''/>
<div className='shopcat-indexsort'>
    <p>
        <span>showing 1-12</span>out of 36 products
    </p>
    <div className='shopcat-sort'>
        Sort by <img src={dropdown_icon} alt=''/>
        </div>
</div>
<div className='shopcat-products'>
    {all_product.map((item,i)=>{
        if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
            return null;
        }
    })}
</div>
<div className='shopcat-loadmore'>
    Explore more
</div>
        </div>
    )
}
export default Shopcat