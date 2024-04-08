import { useEffect, useState, useRef } from "react"
import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { Total } from "../../../Components/table"
import { fetch_DV } from "../../../Components/data/data_d"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AddDelivery = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const back = () => {
        return (
            <div>
                <Link to={'/delivery'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        บริการขนส่ง
                    </p>
                </Link>
            </div>
        )
    }

    const AddDeliveryBox = () => {

        return (
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>รายละเอียดการส่ง</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="card shadow h-100 py-2 mx-auto" style={{ width: '500px' }}>
                            <div className="card-body text-center">
                                <div className="row no-gutters align-items-center justify-content-center text-center">
                                    <div className="col-auto">
                                        <h3
                                            style={{
                                                textAlign: 'center',
                                                fontWeight: '900',
                                                width: '200px',
                                                height: '35px',
                                                backgroundColor: '#EDEAF2',
                                                color: '#63468E',
                                                fontSize: '12px',
                                                borderRadius: '25px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            รายละเอียดการส่ง
                                        </h3>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '10px' }}>
                                    <img style={{ width: '79px', height: '74px', marginRight: '10px' }} src="./img/Logo.png" />
                                    <img style={{ width: '70px', height: '25px', marginRight: '10px' }} src="./img/Group 57.png" />
                                    <img style={{ width: '140px', height: '55px' }} src="./img/KR.png" />
                                </div>
                            </div>
                            <hr className="border-top my-3" style={{ borderColor: 'black' }} />
                            <div className="row" style={{ paddingLeft: '30px' }}>
                                <p>จำนวน</p>
                            </div>
                            <div className="row" style={{ paddingLeft: '30px' }}>
                                <p style={{ color: '#63468E', fontWeight: 'bolder' }}>1 จำนวน</p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="secondary" onClick={handleClose}>
                        ยกเลิก
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        ยืนยันการจัดส่ง
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div>
                    <h1 className="h4 mb-2" style={{ color: 'black', fontWeight: 'bold' }}>
                        บริการขนส่ง
                    </h1>
                </div>
                <div className="card shadow mb-3">
                    <div className="card-body" >
                        <div className="row">
                            <div className="col-sm-3">
                                <div>
                                    <p style={{ paddingLeft: '50px', color: 'black', fontWeight: 600 }}>
                                        <img src="./img/Group 51.png" width="40px" height="40px" style={{ marginRight: '10px' }} /> สินค้า
                                    </p>
                                </div>
                                <div className="row" style={{ paddingLeft: '50px' }}>
                                    <div className="input-group input-group-sm mb-3">
                                        <input id="storedTxtOrder" type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="สินค้า" />
                                        <div className="col-md-3">
                                            <button data-dismiss="modal" data-toggle="modal" data-target="#selectModal"
                                            >
                                                เลือก
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p style={{ paddingLeft: '50px', color: 'black', fontWeight: 600 }}>
                                        <img src="./img/Group 51.png" width="40px" height="40px" style={{ marginRight: '10px' }} /> บริษัท
                                    </p>
                                </div>
                                <div className="row" style={{ paddingLeft: '50px' }}>
                                    <div className="input-group input-group-sm mb-3">
                                        <input id="storedTxtCompany" type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="บริษัทผู้รับ" />
                                        <div className="col-md-3">
                                            <button data-dismiss="modal" data-toggle="modal" data-target="#comModal"
                                            >
                                                เลือก
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p style={{ paddingLeft: '50px', color: 'black', fontWeight: 600 }}>
                                        <img src="./img/Group 53.png" width="40px" height="40px" style={{ marginRight: '10px' }} /> ชื่อผู้รับ
                                    </p>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input id="storedTxtName" type="text" className="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="ชื่อ-นามสกุล ผู้รับ" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input id="storedTxtTel" type="text" className="form-control" style={{ width: '200px' }}
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                                placeholder="เบอร์โทรศัพท์ผู้รับ" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div>
                                            <div className="input-group input-group-sm mb-3">
                                                <select className="form-select" style={{ width: '300px' }} id="inputGroupSelect01">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div>
                                            <div className="input-group input-group-sm mb-3">
                                                <select className="form-select" style={{ width: '300px' }} id="inputGroupSelect02">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div>
                                            <div className="input-group input-group-sm mb-3">
                                                <select className="form-select" style={{ width: '300px' }} id="inputGroupSelect03">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div className="input-group input-group-sm mb-3">
                                            <div id="zipCodeDisplay" className="form-control">รหัสไปรษณีย์</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: '47px' }}>
                                    <div className="col-md-12" style={{ color: '#63468E' }}>
                                        <div className="mb-3">
                                            <textarea id="storedTxtAddress" className="form-control" rows="5" placeholder="ที่อยู่"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div>
                                    <p style={{ paddingLeft: '50px', color: 'black', fontWeight: '600' }}>
                                        <img src="./img/Group 46.png" width="50px" height="40px" style={{ paddingRight: '10px' }} /> เลือกรูปแบบขนส่ง
                                    </p>
                                </div>
                                <div className="row" style={{ paddingLeft: '50px' }}>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="col-md-4">
                                            <div className="card shadow h-100 py-2 " style={{ width: '450px' }}>
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <button className="card shadow hover-btn" style={{ width: '700px', height: '130px' }}>
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col-md-6 text-left">
                                                                        <div>
                                                                            <p style={{ color: 'black', fontWeight: 'bold' }}>Kerry Express </p>
                                                                        </div>
                                                                        <div>
                                                                            <p style={{ fontSize: '12px' }}>บริการนำพัสดุส่งทั่วประเทศ </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ paddingLeft: '50px' }}>
                                                                        <img style={{ width: '139px', height: '39px' }} src="./img/KR.png" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <br />

                                                        <button className="card shadow hover-btn" style={{ width: '700px', height: '130px' }}>
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col-md-6 text-left">
                                                                        <div>
                                                                            <p style={{ color: 'black', fontWeight: 'bold' }}>Flash Express</p>
                                                                        </div>
                                                                        <div>
                                                                            <p>รับถึงบ้านทั่วประเทศไทย</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ paddingLeft: '20px' }}>
                                                                        <img style={{ width: '159px', height: '59px' }} src="./img/Flash-Express.png" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <br />
                                                        <button className="card shadow hover-btn" style={{ width: '700px', height: '130px' }}>
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col-md-6 text-left">
                                                                        <div>
                                                                            <p style={{ color: 'black', fontWeight: 'bold' }}>Thai Post</p>
                                                                        </div>
                                                                        <div>
                                                                            <p>ไปรษณีย์ไทย</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ paddingLeft: '20px' }}>
                                                                        <img style={{ width: '159px', height: '59px' }} src="./img/Thaipost.png" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <br />
                                                        <button className="card shadow hover-btn" style={{ width: '700px', height: '130px' }}>
                                                            <div className="card-body">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col-md-6 text-left">
                                                                        <div>
                                                                            <p style={{ color: 'black', fontWeight: 'bold' }}>Shopee Express</p>
                                                                        </div>
                                                                        <div>
                                                                            <p>Shopee Express</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6" style={{ paddingLeft: '20px' }}>
                                                                        <img style={{ width: '159px', height: '59px' }} src="./img/SPX.png" alt="Shopee Express" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', paddingRight: '15px' }}>
                                    <a className="btn" data-toggle="modal" data-dismiss="modal"
                                        onClick={() => { setShow(!show) }}
                                        style={{ backgroundColor: '#63468E', color: '#fff', borderRadius: '20px', width: '100px' }}
                                        href="#">ต่อไป</a>
                                </div>
                            </div>
                        </div>
                    </div >
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
                    <Body heading={back()} table={<AddDeliveryBox />} />
                    <Footer />
                </div>
            </div>
            <div className="loader" id="loader"></div>
        </div>
    )
}