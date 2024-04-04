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
import { fetch_DP } from './Components/data/data_p'
import { fetch_DV } from './Components/data/data_d'
import { DetailDelivery } from './pages/admin/delivery/detailDelivery'
import { fetch_CM } from './Components/data/data_c'
import { DetailCustomer } from './pages/admin/customer/detailCustomer'
// import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const [dataRaw, setDataRaw] = useState([])
  const [dpRaw, setDpRaw] = useState([])
  const [ddRaw, setDdRaw] = useState([])
  const [dcRaw, setDcRaw] = useState([])

  const [showtable, setShowtable] = useState(5)
  const [curPage, setCurPage] = useState(1) // เริ่มหน้าเป็นหน้าที่ 1
  const [numPages, setNumPages] = useState(0)
  const [selectedValue, setSelectedValue] = useState(showtable);
  const [onlyWaiting, setOnlyWaiting] = useState(false)


  const PageValue1 = 5
  const PageValue2 = 10
  const PageValue3 = 20

  useEffect(() => {
    setDataRaw(fetch_OD)
    setDpRaw(fetch_DP)
    setDdRaw(fetch_DV)
    setDcRaw(fetch_CM)
  }, [])

  return (
    <div>
      <BrowserRouter basename='SodaDrinks'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/product' element={<Product dpRaw={dpRaw} setDpRaw={setDpRaw} showtable={showtable} setShowtable={setShowtable} curPage={curPage} setCurPage={setCurPage} numPages={numPages} setNumPages={setNumPages} selectedValue={selectedValue} setSelectedValue={setSelectedValue} PageValue1={PageValue1} PageValue2={PageValue2} PageValue3={PageValue3}/>} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/detailProduct' element={<DetailProduct />} />
          <Route path='/order' element={<Order dataRaw={dataRaw} setDataRaw={setDataRaw} showtable={showtable} setShowtable={setShowtable} curPage={curPage} setCurPage={setCurPage} numPages={numPages} setNumPages={setNumPages} selectedValue={selectedValue} setSelectedValue={setSelectedValue} onlyWaiting={onlyWaiting} setOnlyWaiting={setOnlyWaiting} PageValue1={PageValue1} PageValue2={PageValue2} PageValue3={PageValue3}/>} />
          <Route path='/addOrder' element={<AddOrder />} />
          <Route path='/detailOrder' element={<DetailOrder />} />
          <Route path='/customer' element={<Customer dcRaw={dcRaw} setDcRaw={setDcRaw} showtable={showtable} setShowtable={setShowtable} curPage={curPage} setCurPage={setCurPage} numPages={numPages} setNumPages={setNumPages} selectedValue={selectedValue} setSelectedValue={setSelectedValue} PageValue1={PageValue1} PageValue2={PageValue2} PageValue3={PageValue3}/>} />
          <Route path='/detailCustomer' element={<DetailCustomer />} />
          <Route path='/delivery' element={<Delivery ddRaw={ddRaw} setDdRaw={setDdRaw} showtable={showtable} setShowtable={setShowtable} curPage={curPage} setCurPage={setCurPage} numPages={numPages} setNumPages={setNumPages} selectedValue={selectedValue} setSelectedValue={setSelectedValue} onlyWaiting={onlyWaiting} setOnlyWaiting={setOnlyWaiting} PageValue1={PageValue1} PageValue2={PageValue2} PageValue3={PageValue3}/>} />
          <Route path='/detailDelivery' element={<DetailDelivery />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App
