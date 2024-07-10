import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './pages/Product/Add/AddProduct'
import AddCategory from './pages/Category/Add/AddCategory'
import ListProduct from './pages/Product/ListProduct/ListProduct'
import AddOption from './pages/OptionProduct/Add/AddOption'

const App = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/category" element={<AddCategory />} />
          <Route path="/list" element={<ListProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/add-options" element={<AddOption />} />
        </Routes>
      </div>
    </div>
  )
}

export default App