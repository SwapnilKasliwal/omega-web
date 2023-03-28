import './App.css';
import Navbar from './Components/Navbar'
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductsPage from './Components/ProductsPage';
import AboutPage from './Components/AboutPage';

const products = [{name: "Baltic Brown Granite", path: 'Balticbrown.jpg'}]
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<HomePage products = {products}/>}></Route>
      <Route exact path='/about' element={<AboutPage/>}></Route>
      <Route exaxct path='/products' element={<ProductsPage products = {products}/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
