import React,{useContext} from "react"
import { ShopContext } from "../context/shopcontext"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/breadcrum/breadcrum"
import ProductDis from "../components/productdisplay/productdisplay"
import Discription from "../components/discriptionbox/discription"
import Relatedprod from "../components/related products/relatedprod"

const Product=()=>{
    const{all_product}= useContext(ShopContext)
    const {productId}=useParams()
    const product=all_product.find((e)=>e.id===Number(productId));
      return(
        <div className="product">
<Breadcrum product={product }/>
<ProductDis product={product}/>
<Discription/>
<Relatedprod/>
        </div>
    )
}
export default Product