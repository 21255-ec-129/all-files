import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shopcat from './pages/shopcat';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import Soft from './pages/shop';
import Footer from './components/footer/footer';
import mens_banner from './components/Assets/banner_mens.png'
import womens_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Soft/>}/>
      <Route path='/mens' element={<Shopcat banner={mens_banner} category="men"/>}/>
      <Route path='/womens' element={<Shopcat banner={womens_banner} category="women"/>}/>
      <Route path='/kids' element={<Shopcat banner={kids_banner} category="kid"/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=":productId"element={<Product />}/>
      </Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
    
     </BrowserRouter>
    </div>
  );
}
export default App;
