import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Link } from "react-router-dom"
export const DetailAccount = () => {
    const back = () => {
        return (
            <div>
                <Link to={'/account'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        ผู้ใช้งาน
                    </p>
                </Link>
            </div>
        )
    }

    const DetailAccountBox = () => {
        return (
                <div>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 font-weight-bold mb-0 text-black-800" style={{ color: 'black' }}>ข้อมูลผู้ใช้งาน</h1>
                </div>

                    <div className="card shadow mb-3">
                        <div className="card-body" style={{ height: '300px' }}>
                            <div className="row" style={{ paddingLeft: '20px' }}>
                                <br />
                            </div>
                            <div style={{ paddingLeft: '23px' }}>
                                <div className="row" style={{ height: '47px' }}>
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '600' }}>Email:</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '600' }}>jirawat.chn@spumail.net</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ top: '100%' }}>
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '400' }}>ชื่อผู้ใช้งาน :</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '600' }}>Jirawat Chanasit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '400' }}>สิทธิ์การใช้งาน : </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group input-group-sm mb-3">
                                            <select style={{ width: '100%' }} className="form-select" id="inputGroupSelect02">
                                                <option selected>Admin</option>
                                                <option value="1">Manager</option>
                                                <option value="2">User</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: 'black' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '400' }}>สถานะ : </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div style={{ clear: 'both', float: 'left', width: '100%', color: '#187532' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ marginRight: '10px', fontWeight: '600' }}>กำลังใช้งาน</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div style={{ textAlign: 'start' }}>
                                <button id="liveAlertBtn" className="btn btn-primary" style={{ borderRadius: '20px', height: '40px', width: '100px' }}>ยืนยัน</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    return (
        <div id="wrapper">
            <Nav actived='account' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Account / จัดการผู้ใช้' />
                    <Body heading={back()} table={<DetailAccountBox />} />
                </div>
            </div>
        </div>
    )
}