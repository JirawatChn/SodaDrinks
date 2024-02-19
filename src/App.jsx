import './sb-admin-2.min.css'
import { Order } from './pages/admin/order/order'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './pages/admin/product/product'
import { Customer } from './pages/admin/customer/customer'
import { Delivery } from './pages/admin/delivery/delivery'
import { Login } from './pages/admin/login'
import { Account } from './pages/admin/account/account'
import { Dashboard } from './pages/admin/dashboard/dashboard'

function App() {

  return (
    <BrowserRouter basename='SodaDrinks'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product' element={<Product />} />
        <Route path='/order' element={<Order />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
