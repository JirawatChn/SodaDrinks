import React from "react"
import { Body } from "./../../Components/Body"
import { Head } from "./../../Components/Head"
import { Nav } from "./../../Components/Nav"
import { Footer } from "../../Components/Footer"
import { Link } from "react-router-dom"

export const Profile = () => {
    const ProfileBox = () => {
        return (
            <div>
                <div className="card shadow mb-3">
                    <div className="card-body" style={{ height: '600px', textAlign: 'center' }}>
                        <div>
                            <img height="200px" width="200px" src="./img/Group 60.png" />
                        </div>
                        <br />
                        <div className="row" style={{ justifyContent: 'center', paddingRight: '190px' }}>
                            <div className="col-md-2" style={{ float: 'right' }}>
                                <h3 style={{ fontWeight: 'bold', color: 'black' }}>ข้อมูลส่วนตัว</h3>
                            </div>
                        </div>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <div className="col-sm-2" style={{ float: 'right' }}>
                                <p style={{ fontWeight: '400', color: 'black' }}>ชื่อผู้ใช้งาน</p>
                            </div>
                            <div className="col-md-2" style={{ float: 'right' }}>
                                <input className="form-control" style={{ borderRadius: '4px', height: '30px', borderColor: '#0000003d' }} defaultValue="Jirawat Chanasit" />
                            </div>
                        </div>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <div className="col-sm-2" style={{ float: 'right', paddingRight: '46px' }}>
                                <p style={{ fontWeight: '400', color: 'black' }}>อีเมล</p>
                            </div>
                            <div className="col-md-2" style={{ float: 'right' }}>
                                <input className="form-control" style={{ borderRadius: '4px', height: '30px', borderColor: '#0000003d' }} defaultValue="jirawat.chn@spumail.net" />
                            </div>
                        </div>
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <div className="col-sm-2" style={{ float: 'right', paddingRight: '24px' }}>
                                <p style={{ fontWeight: '400', color: 'black' }}>รหัสผ่าน</p>
                            </div>
                            <div className="col-md-2" style={{ float: 'right' }}>
                                <input type="password" className="form-control" style={{ borderRadius: '4px', height: '30px', borderColor: '#0000003d' }} placeholder="********" />
                            </div>
                        </div>
                        <br />
                        <div style={{ textAlign: 'center' }}>
                            <button id="liveAlertBtn" className="btn btn-primary" style={{ borderRadius: '20px', height: '40px', width: '100px' }}>ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="wrapper">
            <Nav actived='customer' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Profile / ข้อมูลส่วนตัว' />
                    <Body heading='ข้อมูลส่วนตัว' table={<ProfileBox />} />
                    <Footer />
                </div>
            </div>
        </div>
    )
}