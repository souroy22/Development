import './App.css';
import {Routes, Route} from 'react-router-dom';
import Products from './components/product/views/Products';
import Cart from './components/cart/views/Cart';
import NavbarComp from './components/navbar/views/Navbar';

const App = () => {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
