import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Link } from "react-router-dom"
export const AddProduct = () => {
    const back = () => {
        return (
            <div>
                <Link to={'/product'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        สินค้าทั้งหมด
                    </p>
                </Link>
            </div>
        )
    }

    const AddProductBox = () => {
        return (
            <div>
                <div>
                    <h1 className="h4 mb-2" style={{ color: 'black', fontWeight: 'bold' }}>
                        นำสินค้าเข้าใหม่
                    </h1>
                </div>

                <div className="card shadow mb-3">
                    <div className="card-body" style={{ height: '600px' }}>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="topbar-divider d-none d-sm-block">
                                <p style={{ color: 'black', fontWeight: '600'}}>
                                    <img src="./img/Group 5.png" alt="icon" style={{ marginRight: '10px' }}/> รายละเอียดสินค้า
                                </p>
                            </div>
                        </div>
                        <div style={{ paddingLeft: '23px' }}>
                            <div className="row" style={{ height: '47px' }}>
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>
                                                รหัสสินค้า:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="EV-000-000-0005" readOnly />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '400' }}> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ top: '100%' }}>
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>ชื่อสินค้า:
                                                <span style={{ color: 'red' }}>*</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input id="txtName" type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="ข้อมูลตัวอย่าง 5" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>หน่วย: </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="ตัวอย่าง ชิ้น,ลัง" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '300' }}>Tag สินค้า: </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="topbar-divider d-none d-sm-block">
                                <p style={{ color: 'black', fontWeight: '600' }}>
                                    <img src="./img/Group 5.png" alt="icon" style={{ marginRight: '10px' }}/> ข้อมูลขนส่ง
                                </p>
                            </div>
                        </div>
                        <div style={{ paddingLeft: '23px' }}>
                            <div className="row">
                                <div className="col-md-2">
                                    <br />
                                    <div style={{ clear: 'both', float: 'left', width: '50%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>น้ำหนัก (กรัม)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <br />
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <br />
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: '400' }}>ขนาด (กว้าง ยาว สูง)
                                                (ซม.)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <br />
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="กว้าง" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <br />
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="ยาว" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <br />
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="สูง" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingLeft: '1400px' }}>
                                <a href="#" id="liveAlertBtn" className="btn btn-primary"
                                    style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                    <span className="text" style={{ margin: '0 auto' }}>สร้างรายการ</span>
                                </a>
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
                    <Head topbar='Product / สินค้า' />
                    <Body heading={back()} table={<AddProductBox />} />
                </div>
            </div>
            <div className="loader" id="loader"></div>
        </div>
    )
}