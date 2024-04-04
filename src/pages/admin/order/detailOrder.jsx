import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Link } from "react-router-dom"
export const DetailOrder = () => {
    const DetailOrderBox = () => {
        return (
            <div className="container-fluid">

                <br />
                <div className="card shadow mb-3">
                    <div className="card-header py-3 d-flex justify-content-between align-items-center "
                        style={{ height: '100px', backgroundColor: '#fff' }}>
                        <div>
                            <h6 className="m-0 font-weight-bold" style={{ color: 'black', fontSize: '16px', fontWeight: '600'}}><svg
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-receipt-cutoff" viewBox="0 0 16 16" style={{marginRight: '10px'}}>
                                <path
                                    d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                <path
                                    d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" />
                            </svg> รายละเอียดการเบิกสินค้า</h6>
                        </div>

                        <div>
                            <Link to={'/order'} style={{color : '#63468E', marginRight: '10px'}}>
                                <span className="text" style={{ margin: '0 auto' }}>Retrun To Order</span>
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p style={{ color: 'black', fontWeight: '400'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                fill="currentColor" className="bi bi-receipt-cutoff"
                                                viewBox="0 0 16 16"  style={{marginRight: '10px'}}>
                                                <path
                                                    d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                                <path
                                                    d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" />
                                            </svg> สถานะการเบิก
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="confirmationStatus notconfirmationStatus"
                                            style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF0C8', color: '#e8b532', textAlign: 'center' }}>
                                            <span
                                                className="text confirmationStatus notconfirmationStatus">รอยืนยัน</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ borderLeft: '1px solid #ddd', paddingLeft: '15px' }}>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card shadow mb-3" style={{ bottom: '20px' }}>
                    <div className="card-body" style={{ height: '350px' }}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <div>
                                    <p style={{ color: 'black', fontWeight: '600' }}>
                                        รายละเอียดการเบิกสินค้า
                                    </p>
                                    <br />
                                    <div>
                                        <div style={{ float: 'left', width: '50%' }}>
                                            <p>
                                                รหัสออเดอร์ :
                                            </p>
                                            <p>
                                                รหัสสินค้า :
                                            </p>
                                            <p>
                                                ชื่อสินค้า :
                                            </p>
                                            <p>
                                                วันที่ :
                                            </p>
                                            <p>
                                                ประเภทรายการ :
                                            </p>
                                        </div>

                                        <div style={{ float: 'left', width: '50%' }}>
                                            <p>
                                                OD-0001
                                            </p>
                                            <p>
                                                EV-000-000-0005
                                            </p>
                                            <p>
                                                ข้อมูลตัวอย่างที่ 1
                                            </p>
                                            <p>
                                                18/10/66 12:00 AM
                                            </p>
                                            <p>
                                                เบิกสินค้าออก
                                            </p>
                                        </div>

                                        <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" style={{ borderLeft: '1px solid #ddd', paddingLeft: '15px' }}>
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <div>
                                    <p style={{ color: 'black', fontWeight: '600' }}>
                                        ผู้สร้างรายการ
                                    </p>
                                    <br />
                                    <div>
                                        <div style={{ float: 'left', width: '50%' }}>
                                            <p>
                                                ชื่อ :
                                            </p>
                                            <p>
                                                หมายเลขโทรศัพท์ :
                                            </p>
                                            <p>
                                                อีเมล :
                                            </p>
                                            <p>
                                                ที่อยู่ :
                                            </p>
                                        </div>

                                        <div style={{ float: 'left', width: '50%' }}>
                                            <p>
                                                จิรวัฒน์ ชนะสิทธิ์
                                            </p>
                                            <p>
                                                000 000-000
                                            </p>
                                            <p>
                                                jirawat.chn@spumail.net
                                            </p>
                                            <p>
                                                123 บางบัว บางเขน กรุงเทพ
                                            </p>
                                        </div>

                                        <div style={{ clear: 'both' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card shadow mb-3" style={{ bottom: '20px' }}>
                    <div className="card-body" style={{ height: '300px' }}>
                        <div>
                            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
                                สินค้า
                            </p>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0"
                                style={{ margin: '0 auto', borderBottom: '1px solid #ccc' }}>
                                <thead>
                                    <tr className="center-align" style={{ backgroundColor: '#b8adc979', color: '#63468E' }}>
                                        <th>#</th>
                                        <th>รหัส</th>
                                        <th>ชื่อสินค้า</th>
                                        <th>จำนวน</th>
                                    </tr>
                                </thead>
                                <tbody className="center-align">
                                    <tr>
                                        <td style={{ color: '#63468E' }}>1</td>
                                        <td style={{ color: '#63468E' }}>EV-000-000-0005</td>
                                        <td style={{ color: '#63468E' }}><img className="imgpoduct" src="./img/bg-1.jpg"
                                            alt="" />ข้อมูลตัวอย่างที่ 1</td>
                                        <td style={{ color: '#63468E' }}>3 ลัง </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="topbar-divider d-none d-sm-block"></div>
                                    <div>

                                    </div>
                                </div>

                                <div className="col-md-6" style={{ paddingLeft: '300px', color: '#63468E' }}>
                                    <div className="topbar-divider d-none d-sm-block"></div>
                                    <div>
                                        <br />
                                        <div>
                                            <div style={{ float: 'left', width: '50%' }}>
                                                <p>
                                                    จำนวนทั้งหมด :
                                                </p>
                                            </div>

                                            <div style={{ float: 'right', width: '50%', paddingLeft: '60px' }}>
                                                <p>1</p>
                                            </div>
                                            <div style={{ clear: 'both' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="card shadow mb-3" style={{ bottom: '20px' }}>
                    <div className="card-body" style={{ height: '210px' }}>
                        <div>
                            <br />
                            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
                                การเบิกสินค้า
                            </p>
                            <div className="ml-auto">
                                <p className="confirmationStatus notconfirmationStatus"
                                    style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF0C8', color: '#e8b532', textAlign: 'center' }}>
                                    <span className="text confirmationStatus notconfirmationStatus">รอยืนยัน</span>
                                </p>
                                <div style={{ paddingLeft: '1350px' }}>
                                    <a href="#" data-toggle="modal" data-target="#confrimModal"
                                        className="btn btn-primary"
                                        style={{ borderRadius: '10px', height: '42px', width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                        <span className="text" style={{ margin: '0 auto' }}>ยืนยันการเบิกสินค้า</span>
                                    </a>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <div id="liveAlertPlaceholder"></div>
            </div >
        )
    }

    return (
        <div id="wrapper">
            <Nav actived='order' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Order / รายการเบิกสินค้า' />
                    <Body table={<DetailOrderBox />} />
                    <div style={{ textAlign: "center" }}></div>
                </div>
            </div>
            <div className="loader" id="loader"></div>
            {/* <Layout actived='order' iconActive={{ opacity: '100%' }} topbar='Order / เบิกสินค้า' heading='เบิกสินค้า' table={<Orderbox />} /> */}
        </div>
    )
}