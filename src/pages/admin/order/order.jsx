import { useEffect, useRef, useState } from "react"
import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { fetch_OD } from "../../../Components/data/data_o"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Total } from "../../../Components/table"
import { Link } from "react-router-dom"


export const Order = ({ dataRaw, setDataRaw }) => {
    // const [dataRaw, setDataRaw] = useState([])
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(0);
    const [showtable, setShowtable] = useState(5)
    const [curPage, setCurPage] = useState(1) // เริ่มหน้าเป็นหน้าที่ 1
    const [numPages, setNumPages] = useState(0)
    const [selectedValue, setSelectedValue] = useState(showtable);
    const [onlyWaiting, setOnlyWaiting] = useState(false)
    const onlyColor = useRef()

    const [savedata, setSavedata] = useState(0)

    const PageValue1 = 5
    const PageValue2 = 10
    const PageValue3 = 20

    // const fetchData = fetch_OD()

    // useEffect(() => {
    //     setDataRaw(fetchData)
    //     setAmount(data.length)
    // }, [])

    useEffect(() => {
        const selectItem = dataRaw.filter((data) => {
            return !onlyWaiting || !data.Status
        })
        setData(selectItem)
        setAmount(selectItem.length)
        if (selectItem.length > 0) {
            onlyColor.current.color = '#187532';
        }
    }, [dataRaw, onlyWaiting])

    useEffect(() => {
        setCurPage(1)
    }, [onlyWaiting])

    useEffect(() => {
        setNumPages(Math.ceil(data.length / showtable))
    }, [data, showtable])

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

    useEffect(() => {
        console.log(savedata)
        setCurPage(numPages + 1)
    }, [savedata])

    const ConfirmClick = (id) => {
        const selectedItem = dataRaw.find((data) => {
            return data.id == id
        })
        selectedItem.Status = true
        // console.log(selectedItem)
        setDataRaw([...dataRaw])
    }

    const DeleteClick = (id) => {
        const selectedItem = dataRaw.filter((data) => {
            return data.id !== id
        })
        setDataRaw(selectedItem)
    }

    const tableData = data.map((data, i) => {
        const start = (curPage - 1) * showtable
        const end = start + showtable

        if (start <= i && i < end) {
            return (
                <tr key={data.id}>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.id}</td>
                    <td>
                        <Link to={'/detailOrder'} style={{ color: '#63468E', textDecoration: 'underline' }}>
                            {data.ORDER_ID}
                        </Link>
                    </td>
                    <td style={{ color: '#63468E' }}>{data.DATE}</td>
                    <td style={{ color: '#63468E' }}>{data.P_NAME}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Contact}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Status ? <span className="text-success">สำเร็จ</span> : <span className="text-warning">กำลังรอ</span>}</td>
                    {/* <td className="deleteItem"><FontAwesomeIcon icon={faTrash} /> </td> */}
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="etc" id="dropdown-basic">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => window.location.href = '/SodaDrinks/detailOrder'} style={{ color: '#3a3b45' }}>ดูภาพรวม</Dropdown.Item>
                                {!data.Status && <Dropdown.Item href="#/Confirm" onClick={() => ConfirmClick(data.id)}>ยืนยัน</Dropdown.Item>}
                                <Dropdown.Item href="#/Delete" onClick={() => { DeleteClick(data.id) }}>ลบ</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
            )
        }
    }

    )

    const Orderbox = () => {

        const handleChange = (event) => {
            const value = parseInt(event.target.value);
            setSelectedValue(value);
            setShowtable(value); // ปรับค่า showtable เมื่อมีการเลือกค่าใน dropdown
            setCurPage(1); // ให้กลับไปที่หน้าที่ 1 เมื่อเปลี่ยนค่า showtable
        }

        const buttonPage = () => {
            const buttons = [];
            const numButtons = Math.ceil(data.length / showtable); // หาจำนวนหน้าทั้งหมด
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
                <Total amount={amount} name='เบิก' address='/addOrder' />
                <div className="card shadow mb-3" >

                    <div className="card-body" >
                        <div>
                            <p style={{ color: 'black', marginBottom: '0px' }}>
                                ทั้งหมด
                            </p>
                        </div>
                        <br />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={onlyWaiting} onChange={(e) => { setOnlyWaiting(e.target.checked) }} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > <span ref={onlyColor} className={onlyWaiting ? "text-success" : ''}>แสดงเฉพาะ</span>  <span className="text-warning" style={{ marginLeft: '5px' }}>กำลังรอ</span></label>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing="0"
                                style={{ margin: '0 auto' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', backgroundColor: '#b8adc979', color: '#63468E' }}>
                                        <th style={{ width: '5%', textAlign: 'center' }}>#</th>
                                        <th style={{ width: '21.25%', paddingLeft: '30px' }}>รหัสออเดอร์</th>
                                        <th style={{ width: '21.25%' }}>วันที่</th>
                                        <th style={{ width: '21.25%' }}>รายการ</th>
                                        <th style={{ width: '21.25%', textAlign: 'center' }}>ผู้ติดต่อ</th>
                                        <th style={{ width: '10%', textAlign: 'center' }}>สถานะ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'left' }}>
                                    {tableData}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ position: 'relative', textAlign: 'left' }}>
                            <div style={{ justifyContent: "center" }}>
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
            <Nav actived='order' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Order / เบิกสินค้า' />
                    <Body heading='เบิกสินค้า' table={<Orderbox />} />
                    <div style={{ textAlign: "center" }}></div>
                </div>
            </div>
            <div className="loader" id="loader"></div>
            {/* <Layout actived='order' iconActive={{ opacity: '100%' }} topbar='Order / เบิกสินค้า' heading='เบิกสินค้า' table={<Orderbox />} /> */}
        </div>

    )
}