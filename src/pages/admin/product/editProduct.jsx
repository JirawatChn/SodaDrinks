import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Footer } from "../../../Components/Footer"
import { Link } from "react-router-dom"

export const EditProduct = () => {

    const back = () => {
        return (
            <div>
                <Link to={'/detailProduct'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        รายละเอียดสินค้า
                    </p>
                </Link>
            </div>
        )
    }

    const EditProductBox = () => {
        return (
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 font-weight-bold mb-0 text-black-800" style={{ color: 'black' }}>แก้ไขข้อมูล ข้อมูลตัวอย่าง 5</h1>
                </div>
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <div>
                                    <div>
                                        <div style={{ float: 'left', width: '40%' }}>
                                            <img style={{ width: '190px', height: '190px' }} src="./img/bg-1.jpg" alt="Product Image" />
                                        </div>
                                        <div className="row" style={{ paddingLeft: '20px' }}>
                                            <div className="col-sm-8">
                                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>ชื่อสินค้า</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="input-group input-group-sm mb-3">
                                                    <input id="txtCompany" type="text" className="form-control"
                                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue="ข้อมูลตัวอย่าง 5" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingLeft: '20px' }}>
                                            <div className="col-sm-8">
                                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>รหัสสินค้า</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="input-group input-group-sm mb-3">
                                                    <input id="txtCompany" type="text" className="form-control"
                                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue="P-0001" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingLeft: '20px' }}>
                                            <div className="col-sm-8">
                                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>น้ำหนัก</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="input-group input-group-sm mb-3">
                                                    <input id="txtCompany" type="text" className="form-control"
                                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue="1,000 กรัม" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '470px', marginTop: '20px'}}>
                                    <Link to={'/detailProduct'} id="liveAlertBtn" className="btn btn-primary"
                                        style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                        <span className="text" style={{ margin: '0 auto' }}>บันทึกรายการ</span>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="wrapper">
            <Nav actived='product' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Product / รายการสินค้า' />
                    <Body heading={back()} table={<EditProductBox />} />
                    <Footer />
                </div>
            </div>
            <div className="loader" id="loader"></div>
        </div>
    )
}