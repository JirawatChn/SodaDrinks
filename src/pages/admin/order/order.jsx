import { useEffect, useRef, useState } from "react"
import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { fetch_OD } from "../../../Components/data/data_o"
import { Total } from "../../../Components/table"

export const Order = () => {
    const [dataRaw, setDataRaw] = useState([])
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(0);
    const [showtable, setShowtable] = useState(5)
    const [curPage, setCurPage] = useState(1) // เริ่มหน้าเป็นหน้าที่ 1
    const [numPages, setNumPages] = useState(0)
    const [selectedValue, setSelectedValue] = useState(showtable);
    const [onlyWaiting,setOnlyWaiting] =useState(false)
    const onlyColor = useRef()

    const PageValue1 = 5
    const PageValue2 = 10
    const PageValue3 = 20

    const fetchData = fetch_OD()

    useEffect(() => {
        setDataRaw(fetchData)
        setAmount(data.length)
    }, [])

    useEffect(()=>{
        const selectItem = dataRaw.filter((data)=>{
            return !onlyWaiting || !data.Status
        })
        setData(selectItem)
        setAmount(selectItem.length)
        setCurPage(1)
        if (selectItem.length > 0) {
            onlyColor.current.color = '#187532';
        }
    },[dataRaw,onlyWaiting])

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


    const tableData = data.map((data, i) => {
        const start = (curPage - 1) * showtable
        const end = start + showtable

        if (start <= i && i < end) {
            return (
                <tr key={data.id}>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.id}</td>
                    <td style={{ color: '#63468E' }}>{data.ORDER_ID}</td>
                    <td style={{ color: '#63468E' }}>{data.DATE}</td>
                    <td style={{ color: '#63468E' }}>{data.P_NAME}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Contact}</td>
                    <td style={{ color: '#63468E', textAlign: 'center' }}>{data.Status ? <span className="text-success">สำเร็จ</span> : <span className="text-warning">กำลังรอ</span>}</td>
                </tr>
            )
        }
    })


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
            for (let i = 1; i <= numButtons; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={"btn " + (curPage === i ? "btn-primary" : "btn-outline-primary") + " button-spacing"}
                        onClick={() => setCurPage(i)}
                    >
                        {i}
                    </button>
                );
            }
            return buttons;
        }

        return (
            <div>
                <Total amount={amount} />
                <div className="card shadow mb-3" >

                    <div className="card-body" >
                        <div>
                            <p style={{ color: 'black', marginBottom:'0px'}}>
                                ทั้งหมด
                            </p>
                        </div>
                        <br />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={onlyWaiting} onChange={(e)=>{setOnlyWaiting(e.target.checked)}}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > <span ref={onlyColor} className={onlyWaiting ? "text-success" : ''}>แสดงเฉพาะ</span>  <span className="text-warning" style={{marginLeft: '5px'}}>กำลังรอ</span></label>
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
        // <div id="wrapper">
        //     <Nav actived='order' iconActive={{ opacity: '100%' }} />
        //     <div id="content-wrapper" className="d-flex flex-column">
        //         <div id="content">
        //             <Head topbar='Order / เบิกสินค้า' />
        //             <Body heading='เบิกสินค้า' table={<Orderbox />} />
        //         </div>
        //     </div>
        //     <div className="loader" id="loader"></div>
        // </div>
        <Layout actived='order' iconActive={{ opacity: '100%' }} topbar='Order / เบิกสินค้า' heading='เบิกสินค้า' table={<Orderbox />} />

    )
}