
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Error404 from './pages/Error404';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

            <header>
                <ResponsiveAppBar/>
            </header>

            <Routes> 
                <Route path='*' element={<Error404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<Detail />} />
                <Route path='/products/:category' element={<Categories />} />
                <Route path='/products/category/:subcategory' element={<Categories />} />
                <Route path='/cart' element={<Cart />} />
            </Routes> 

            <footer  
              className="footer">
                <p>Diseñado por Agustín Coiro</p>
            </footer>
            
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
