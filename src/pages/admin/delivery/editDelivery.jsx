import React, { useState } from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Footer } from "../../../Components/Footer"
import { Link } from "react-router-dom"

export const EditDelivery = () => {

    const back = () => {
        return (
            <div>
                <Link to={'/detailDelivery'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        รายละเอียดการขนส่ง
                    </p>
                </Link>
            </div>
        )
    }

    const EditDeliveryBox = () => {
        return (
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 font-weight-bold mb-0 text-black-800" style={{ color: 'black' }}>แก้ไขข้อมูล การขนส่ง</h1>
                </div>
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <div>
                                    <p style={{ color: "black", fontWeight: 600 }}>
                                        รายละเอียดการเบิกสินค้า
                                    </p>
                                    <div>
                                        <img width="170px" height="40px" src="./img/KR.png" alt="KR Logo" />
                                    </div>
                                    <br />
                                    <div>
                                        <div style={{ float: "left", width: "50%" }}>
                                            <p>รายการ :</p>
                                            <p>รายการเบิก :</p>
                                            <p>วันที่ :</p>
                                            <p>Tracking No.1 :</p>
                                            <p>สถานะ : <span className="text-light badge-pill badge-warning"> กำลังรอ</span></p>
                                        </div>

                                        <div style={{ float: "left", width: "50%" }}>
                                            <p>DV-0001</p>
                                            <p>P-0001</p>
                                            <p>18/10/66 12:30 AM</p>
                                            <p>SODA00000000001</p>
                                            <br />
                                        </div>

                                        <div style={{ clear: "both" }}></div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6" style={{ borderLeft: "1px solid #ddd", paddingLeft: "15px" }}>
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <div>
                                    <p style={{ color: "black", fontWeight: 600 }}>
                                        ข้อมูลการขนส่ง
                                    </p>
                                    <div>
                                        <br />
                                        <br />
                                    </div>
                                    <div className="row" style={{ paddingLeft: '20px' }}>
                                        <div className="col-sm-5">
                                            <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <p style={{ marginRight: '10px', fontWeight: '600' }}>ชื่อลูกค้า</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="input-group input-group-sm mb-3">
                                                <input id="txtCompany" type="text" className="form-control"
                                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue="ตัวอย่างลูกค้า 1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{ paddingLeft: '20px' }}>
                                        <div className="col-sm-5">
                                            <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <p style={{ marginRight: '10px', fontWeight: '600' }}>เบอร์โทรศัพท์ผู้รับ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="input-group input-group-sm mb-3">
                                                <input id="txtCompany" type="text" className="form-control"
                                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue="-" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{ paddingLeft: '20px' }}>
                                        <div className="col-sm-5">
                                            <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <p style={{ marginRight: '10px', fontWeight: '600' }}>ที่อยู่ผู้รับ</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="input-group input-group-sm mb-3">
                                                <input id="txtCompany" type="text" className="form-control"
                                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" defaultValue="123 บางบัว บางเขน กรุงเทพ" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '500px', marginTop: '20px'}}>
                                    <Link to={'/detailDelivery'} id="liveAlertBtn" className="btn btn-primary"
                                        style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                        <span className="text" style={{ margin: '0 auto' }}>บันทึกรายการ</span>
                                    </Link>
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
            <Nav actived='delivery' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Delivery / การขนส่ง' />
                    <Body heading={back()} table={<EditDeliveryBox />} />
                    <Footer />
                </div>
            </div>
        </div>
    )
}