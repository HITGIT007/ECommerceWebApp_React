
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/productlist" element={<ProductList/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
