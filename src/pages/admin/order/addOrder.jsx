import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Link } from "react-router-dom"

export const AddOrder = () => {
    const back = () => {
        return (
            <div>
                <Link to={'/order'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        รายการเบิกสินค้า
                    </p>
                </Link>
            </div>
        )
    }
    const AddOrderBox = () => {
        return (
            <div>
                <div>
                    <h1 className="h4 mb-2 " style={{ color: 'black', top: '20px', fontWeight: 'bold' }}>
                        สร้างรายการเบิกสินค้า
                    </h1>
                </div>
                <div className="card shadow mb-3">
                    <div className="card-body" style={{ height: '350px' }}>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="topbar-divider d-none d-sm-block">
                                <p style={{ color: 'black', fontWeight: '600' }}>
                                    <img src="./img/Group 5.png" style={{ marginRight: '10px' }} />ข้อมูล
                                </p>
                            </div>
                        </div>
                        <div style={{ paddingLeft: '23px' }}>


                            <div className="row" style={{ height: '47px' }}>
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>
                                                รายการ : </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" defaultValue="OD-0001" readOnly/>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ top: '100%' }}>
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>จาก :
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" defaultValue="คลังสินค้า" readOnly/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>ไป : </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <select style={{ width: '100%' }} className="form-select" id="inputGroupSelect02">
                                            <option defaultValue>บริษัท 1 </option>
                                            <option value="1">บริษัท 2</option>
                                            <option value="2">บริษัท 3</option>
                                            <option value="3">บริษัท 4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>วันที่ : </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input id="datepicker" type="text" className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>อ้างอิง :</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="-" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>

                <br />

                <div className="card shadow mb-3" style={{ bottom: '20px' }}>
                    <div className="card-body" style={{ height: '570px' }}>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="topbar-divider d-none d-sm-block">
                                <p style={{ color: 'black', fontWeight: '600' }}>
                                    <img src="./img/Group 6.png" alt="logo" style={{ margin: '10px' }} /> สินค้า
                                </p>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{ margin: '0 auto' }}>
                                    <thead>
                                        <tr className="center-align" style={{ backgroundColor: '#b8adc979', color: '#63468E', textAlign: 'left' }}>
                                            <th></th>
                                            <th>รหัสสินค้า</th>
                                            <th>ชื่อสินค้า</th>
                                            <th>จำนวนสินค้า</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="txtTable" style={{ textAlign: 'left' }}>
                                            <td style={{ textAlign: 'center' }}>
                                                <button style={{ fontWeight: '400', width: '80px', height: '25px', lineHeight: '0px' }}>
                                                    เลือก
                                                </button>
                                            </td>

                                            <td>
                                                <input id="txtIDProduct" type="text" placeholder="รหัสสินค้า" />
                                            </td>
                                            <td>
                                                <input id="txtNameProduct" type="text" placeholder="ชื่อสินค้า" />
                                            </td>
                                            <td>
                                                <input id="txtNumber" type="number" placeholder="0" />
                                            </td>
                                            <td style={{ textAlign: 'right' }}>
                                                <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                                                    <i className="bi bi-x-lg" style={{ color: 'red' }} />
                                                </button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td >
                                                <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                                                    <i className="bi bi-plus-circle-fill" style={{ color: '#4e3179', marginRight: '5px' }} /> เพิ่มสินค้า
                                                </button>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'black' }}>
                                                หมายเหตุ
                                            </td>
                                            <td>
                                                <div className="mb-3">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="-"></textarea>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '100px'}}>
                                                    <a href="#" id="liveAlertBtn" className="btn btn-primary" style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                        <span className="text" style={{ margin: '0 auto' }}>สร้างรายการ</span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="wrapper">
            <Nav actived='order' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Order / เบิกสินค้า' />
                    <Body heading={back()} table={<AddOrderBox />} />
                    <div style={{ textAlign: "center" }}></div>
                </div>
            </div>
            <div className="loader" id="loader"></div>
            {/* <Layout actived='order' iconActive={{ opacity: '100%' }} topbar='Order / เบิกสินค้า' heading='เบิกสินค้า' table={<Orderbox />} /> */}
        </div>
    )
}