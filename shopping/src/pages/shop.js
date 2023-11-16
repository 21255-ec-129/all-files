import Hero from "../components/hero/hero"
import Newcollections from "../components/newcollections/newcollections"
import Newsletter from "../components/newsletter/newsletter"
//import Item from "../components/items/item"
import Offers from "../components/offers/offers"
import Popular from "../components/popular/popular"


function Soft(){
    return(
        <div className="soft">
<Hero/>
<Popular/>
<Offers/>
<Newcollections/>
<Newsletter/>

{/* <Item/> */}
        </div>
    )
}export default Soft