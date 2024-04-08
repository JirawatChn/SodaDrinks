import { useEffect, useState } from "react"
import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { Total } from "../../../Components/table"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Account = ({ daRaw, setDaRaw, showtable, setShowtable, curPage, numPages, selectedValue, setSelectedValue, PageValue1, PageValue2, PageValue3, setNumPages, setCurPage, onlyWaiting, setOnlyWaiting }) => {
    const [da, setDa] = useState([]);
    const [amount, setAmount] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        setDa(daRaw)
        setAmount(daRaw.length)
    }, [daRaw])

    useEffect(() => {
        setNumPages(Math.ceil(da.length / showtable))
    }, [da, showtable])

    useEffect(() => {
        if (numPages === 0) {
            setCurPage(0)
        } else {
            if (curPage === 0) {
                setCurPage(1)
            } else if (curPage > numPages) {
                setCurPage(numPages)
            }
        }
    }, [curPage, numPages])

    const tableData = da.map((data, i) => {
        const start = (curPage - 1) * showtable
        const end = start + showtable

        if (start <= i && i < end)
            return (
                <tr key={data.id}>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.id}</td>
                    <td style={{ color: '#63468E' }}>
                        <Link to={'/detailAccount'} style={{ color: '#63468E', textDecoration: 'underline' }}>{data.EMP_ID}</Link>
                    </td>
                    <td style={{ color: '#63468E', textAlign: 'left' }}>{data.E_NAME}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.hiredate}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Recent}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Job}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Status ? <span className="text-success">กำลังใช้งาน</span> : <span className="text-warning">ออฟไลน์</span>}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="etc" id="dropdown-basic">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/detailAccount" style={{ color: '#3a3b45' }}>
                                    ดูภาพรวม
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
            )
    })

    const Accountbox = () => {
        const handleChange = (event) => {
            const value = parseInt(event.target.value);
            setSelectedValue(value);
            setShowtable(value); // ปรับค่า showtable เมื่อมีการเลือกค่าใน dropdown
            setCurPage(1); // ให้กลับไปที่หน้าที่ 1 เมื่อเปลี่ยนค่า showtable
        }
        const buttonPage = () => {
            const buttons = [];
            const numButtons = Math.ceil(da.length / showtable); // หาจำนวนหน้าทั้งหมด
            if (curPage <= numPages && curPage != 1) {
                buttons.push(
                    <button
                        key={9999}
                        className="btn btn-primary button-spacing"
                        onClick={() => setCurPage(curPage - 1)}
                    >
                        Prev
                    </button>

                )
            }
            for (let i = 1; i <= numButtons; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={"btn " + (curPage === i ? "btn-primary" : "btn-outline-primary") + " button-spacing"}
                        onClick={() => setCurPage(i)}
                    >
                        {i}
                    </button>

                )

            }
            if (curPage < numPages) {
                buttons.push(
                    <button
                        key={999}
                        className="btn btn-primary button-spacing"
                        onClick={() => setCurPage(curPage + 1)}
                    >
                        Next
                    </button>

                )
            }
            return buttons;
        }
        return (
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>เพิ่มผู้ใช้งาน</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ paddingLeft: '23px' }}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: '#63468E' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: 400 }}>ชื่อ</p>
                                            <p style={{ color: 'red' }}>*</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group input-group-sm mb-3">
                                        <input id="datepicker" type="text" className="form-control"
                                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: '#63468E' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: 400 }}>รหัสผ่าน</p>
                                            <p style={{ color: 'red' }}>*</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: '#63468E' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: 400 }}>ยืนยันรหัสผ่าน</p>
                                            <p style={{ color: 'red' }}>*</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group input-group-sm mb-3">
                                        <input id="datepicker" type="text" className="form-control"
                                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ height: '47px' }}>
                                <div className="col-sm-4">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: '#63468E' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: 400 }}>อีเมล</p>
                                            <p style={{ color: 'red' }}>*</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm" placeholder="" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <div style={{ clear: 'both', float: 'left', width: '100%', color: '#63468E' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <p style={{ marginRight: '10px', fontWeight: 400 }}>สิทธิ์การใช้งาน</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group input-group-sm mb-3">
                                        <select style={{ width: '100%' }} className="form-select" id="inputGroupSelect02">
                                            <option defaultValue="User">User</option>
                                            <option value="1">Manager</option>
                                            <option value="2">Admin</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Total amount={amount} name='เพิ่มผู้ใช้งาน' show={show} setShow={setShow} />
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <div>
                            <p style={{ color: 'black' }}>
                                ทั้งหมด
                            </p>
                        </div>
                        <br />
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing="0"
                                style={{ margin: '0 auto' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', backgroundColor: '#b8adc979', color: '#63468E' }}>
                                        <th style={{ width: '5%', textAlign: 'center' }}>#</th>
                                        <th style={{ width: '16%', textAlign: 'left' }}>รหัสพนักงาน</th>
                                        <th style={{ width: '16%' }}>ชื่อผู้ใช้</th>
                                        <th style={{ width: '16%', textAlign: 'center' }}>วันที่สมัคร</th>
                                        <th style={{ width: '16%', textAlign: 'center' }}>เข้าใช้งานล่าสุด</th>
                                        <th style={{ width: '16%', textAlign: 'center' }}>สิทธิ์การใช้งาน</th>
                                        <th style={{ width: '15%', textAlign: 'center' }}>สถานะ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'left' }}>
                                    {tableData}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ position: 'relative', textAlign: 'left' }}>
                            <div style={{ marginTop: 'auto' }}>
                                {buttonPage()}
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, right: '70px', transform: 'translate(50%, 0)', display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>จำนวนต่อหน้า</div>
                                <select style={{ right: '0px' }} className="form-select" value={selectedValue} onChange={handleChange}>
                                    <option value={PageValue1}>{PageValue1}</option>
                                    <option value={PageValue2}>{PageValue2}</option>
                                    <option value={PageValue3}>{PageValue3}</option>
                                </select>
                            </div>
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
                    <Body heading='ข้อมูลผู้ใช้งาน' table={<Accountbox />} />
                    <Footer />
                </div>
            </div>
            <div className="loader" id="loader"></div>
        </div>
    )
}