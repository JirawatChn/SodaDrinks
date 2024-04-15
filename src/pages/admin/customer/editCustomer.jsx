import React, { useState } from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Footer } from "../../../Components/Footer"
import { Link } from "react-router-dom"

export const EditCustomer = () => {

    const limitTel = 2;
    const [currentTel, setCurrentTel] = useState(2);
    const [telList, setTelList] = useState([]);

    const back = () => {
        return (
            <div>
                <Link to={'/detailCustomer'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        รายละเอียดผู้ติดต่อ
                    </p>
                </Link>
            </div>
        )
    }

    const EditCustomerBox = () => {

        const addTel = () => {
            if (telList.length < limitTel) {
                setCurrentTel(prevTel => prevTel + 1);
                setTelList(prevList => [...prevList, currentTel]);
            }
        };

        const labelTel = () => {
            return telList.map((tel, index) => (
                <div key={index}>
                    <div className="row" style={{ paddingLeft: '20px' }}>
                        <div className="col-sm-2">
                            <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px', fontWeight: '600' }}>เบอร์โทรศัพท์ {tel}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="input-group input-group-sm mb-3">
                                <input id="txtTel" type="text" className="form-control"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="-" />
                            </div>
                        </div>
                        <i className="bi bi-dash-circle-fill text-danger hover" style={{ fontSize: '25px' }} onClick={() => { deleteTel(index) }}></i>
                    </div>
                </div>
            ));
        };

        const deleteTel = (index) => {
            if (telList.length > 0) {
                const updatedList = [...telList];
                updatedList.splice(index, 1); // ใช้ splice เพื่อลบเบอร์โทรที่ตำแหน่ง index ออกจาก updatedList
                setTelList(updatedList);
                setCurrentTel(prevTel => prevTel - 1);
            }
        };


        return (
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 font-weight-bold mb-0 text-black-800" style={{ color: 'black' }}>แก้ไขข้อมูล ตัวอย่างลูกค้า 1</h1>
                </div>
                <div className="card shadow mb-3">
                    <div className="card-body" style={{ height: '700px' }}>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-md-3">
                                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
                                    <img src="./img/Group 54.png" alt="Group 54" style={{ marginRight: '10px' }} /> ข้อมูลลูกค้า
                                </p>
                            </div>
                        </div>
                        <br />

                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>รหัสลูกค้า</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <input id="txtCompany" type="text" className="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="C0001" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>ชื่อลูกค้า</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <input id="txtCompany" type="text" className="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="ตัวอย่างลูกค้า 1" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>เบอร์โทรศัพท์</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <input id="txtTel" type="text" className="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="-" />
                                </div>
                            </div>
                            <i className="bi bi-plus-circle-fill hover" style={{ color: '#63468e', fontSize: '25px' }} onClick={() => { addTel() }}></i>
                        </div>

                        {labelTel()}

                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>อีเมล</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <input id="txtMail" type="text" className="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="-" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>จังหวัด</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <select
                                        style={{ width: '100%', color: 'rgba(0, 0, 0, 0.37)', borderColor: 'rgba(0, 0, 0, 0.185)', borderRadius: '2px' }}
                                        className="form-select" id="inputGroupSelect02">
                                        <option defaultValue='กรุงเทพ'>กรุงเทพ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>อำเภอ/เขต</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <select
                                        style={{ width: '100%', color: 'rgba(0, 0, 0, 0.37)', borderColor: 'rgba(0, 0, 0, 0.185)', borderRadius: '2px' }}
                                        className="form-select" id="inputGroupSelect02">
                                        <option defaultValue='กรุงเทพ'>บางเขน</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>ตำบล/แขวง</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <select
                                        style={{ width: '100%', color: 'rgba(0, 0, 0, 0.37)', borderColor: 'rgba(0, 0, 0, 0.185)', borderRadius: '2px' }}
                                        className="form-select" id="inputGroupSelect02">
                                        <option defaultValue='กรุงเทพ'>จตุจักร</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>รหัสไปรษณีย์</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <input id="txtPostID" type="text" className="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="11130" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ paddingLeft: '20px' }}>
                            <div className="col-sm-2">
                                <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p style={{ marginRight: '10px', fontWeight: '600' }}>ที่อยู่</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="input-group input-group-sm mb-3">
                                    <input id="txtAddress" type="text" className="form-control"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="123 วัดชลอ บางกรวย นนทบุรี 11130" />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: '380px' }}>
                            <Link to={'/detailCustomer'} id="liveAlertBtn" className="btn btn-primary"
                                style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <span className="text" style={{ margin: '0 auto' }}>บันทึกรายการ</span>
                            </Link>
                        </div>
                    </div>
                    <br />

                </div>
            </div>
        )
    }
    return (
        <div id="wrapper">
            <Nav actived='customer' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Customer / ลูกค้า' />
                    <Body heading={back()} table={<EditCustomerBox />} />
                    <Footer />
                </div>
            </div>
            <div className="loader" id="loader"></div>
        </div>
    )
}