import './sb-admin-2.min.css'
import { Order } from './pages/admin/order/order'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './pages/admin/product/product'
import { Customer } from './pages/admin/customer/customer'
import { Delivery } from './pages/admin/delivery/delivery'
import { Login } from './pages/admin/login'
import { Account } from './pages/admin/account/account'
import { Dashboard } from './pages/admin/dashboard/dashboard'
import { useEffect, useState } from 'react'
import { fetch_OD } from './Components/data/data_o'
import { AddOrder } from './pages/admin/order/addOrder'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { DetailOrder } from './pages/admin/order/detailOrder'
import { AddProduct } from './pages/admin/product/addProduct'
import { DetailProduct } from './pages/admin/product/detailProduct'
// import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const [dataRaw, setDataRaw] = useState([])
  useEffect(()=>{
    setDataRaw(fetch_OD)
  },[])

    return (
      <div>
        <BrowserRouter basename='SodaDrinks'>
          <Routes>
            <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/product' element={<Product />} />
              <Route path='/addProduct' element={<AddProduct />} />
              <Route path='/detailProduct' element={<DetailProduct />} />
              <Route path='/order' element={<Order dataRaw={dataRaw} setDataRaw={setDataRaw}/>} />
              <Route path='/addOrder' element={<AddOrder/>} />
              <Route path='/detailOrder' element={<DetailOrder/>} />
              <Route path='/customer' element={<Customer />} />
              <Route path='/delivery' element={<Delivery />} />
              <Route path='/account' element={<Account />} />
          </Routes>
        </BrowserRouter>
      </div>

    );
}


export default App
