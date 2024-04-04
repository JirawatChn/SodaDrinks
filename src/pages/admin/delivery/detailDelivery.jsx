import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Footer } from "../../../Components/Footer"
import { Link } from "react-router-dom"

export const DetailDelivery = () => {

    const DetailDeliveryBox = () => {
        return (
            <div className="container-fluid">
                <div className="card shadow mb-3">
                    <div className="card-header py-3 d-flex justify-content-between align-items-center"
                        style={{ height: "100px", backgroundColor: "#fff" }}>
                        <div>
                            <h6 className="m-0 font-weight-bold" style={{ color: "black", fontSize: "16px", marginLeft: '10px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-truck" viewBox="0 0 16 16">
                                    <path
                                        d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg> รายละเอียดการขนส่ง
                            </h6>
                        </div>
                        <div>
                            <Link to={'/delivery'} style={{ color: '#63468E', marginRight: '10px' }}>
                                <span className="text" style={{ margin: "0 auto" }}>Retrun To Order</span>
                            </Link>
                        </div>
                    </div>
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
                                            <p>สถานะ :</p>
                                            <p className="confirmationStatus notconfirmationStatus"
                                                style={{ borderRadius: "60px", height: "43px", width: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#FFF0C8", color: "#e8b532", textAlign: "center" }}>
                                                <span className="text confirmationStatus notconfirmationStatus">รอยืนยัน</span>
                                            </p>
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
                                    <div style={{ paddingLeft: "550px", top: "100px" }}>
                                        <a id="liveAlertBtn" className="btn btn-primary"
                                            style={{ borderRadius: "10px", height: "42px", width: "200px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                                            <span className="text" style={{ margin: "0 auto" }}>ยืนยันการเบิกสินค้า</span>
                                        </a>
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
                                    <div>
                                        <div style={{ float: "left", width: "50%" }}>
                                            <p>ชื่อผู้รับ :</p>
                                            <p>เบอร์โทรศัพท์ผู้รับ :</p>
                                            <p>ที่อยู่ผู้รับ :</p>
                                        </div>

                                        <div style={{ float: "left", width: "50%" }}>
                                            <p>ตัวอย่างลูกค้า 1</p>
                                            <p>-</p>
                                            <p>123 บางบัว บางเขน กรุงเทพ</p>
                                        </div>

                                        <div style={{ clear: "both" }}></div>
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
            <Nav actived='delivery' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Delivery / การขนส่ง' />
                    <Body table={<DetailDeliveryBox />} />
                    <Footer />
                </div>
            </div>
        </div>
    )
}