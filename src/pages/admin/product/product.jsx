import { useEffect, useState } from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { fetch_DP } from "../../../Components/data/data_p"
import { Footer } from "../../../Components/Footer"
import { Total } from "../../../Components/table"


export const Product = () => {

    const [dp, setDp] = useState([])
        const [amount, setAmount] = useState(0)
    
        const [showtable, setShowtable] = useState(5)
        const [curPage, setCurPage] = useState(1) // เริ่มหน้าเป็นหน้าที่ 1
        const [numPages, setNumPages] = useState(0)
        const [selectedValue, setSelectedValue] = useState(showtable);
    
        const PageValue1 = 5
        const PageValue2 = 10
        const PageValue3 = 20

        useEffect(() => {
            const fetchData = fetch_DP()
            setDp(fetchData)
            setAmount(fetchData.length)
        }, [])
    
        useEffect(() => {
            setNumPages(Math.ceil(dp.length / showtable))
        }, [dp, showtable]) // เมื่อมีการเปลี่ยนแปลงใน dp หรือ showtable
    
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


    const Productbox = () => {

        const handleChange = (event) => {
            const value = parseInt(event.target.value);
            setSelectedValue(value);
            setShowtable(value); // ปรับค่า showtable เมื่อมีการเลือกค่าใน dropdown
            setCurPage(1); // ให้กลับไปที่หน้าที่ 1 เมื่อเปลี่ยนค่า showtable
        }
    
        const buttonPage = () => {
            const buttons = [];
            const numButtons = Math.ceil(dp.length / showtable); // หาจำนวนหน้าทั้งหมด
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
    
        const tableData = dp.map((data, i) => {
            const start = (curPage - 1) * showtable
            const end = start + showtable
    
            if (start <= i && i < end)
                return (
                    <tr key={data.id}>
                        <td style={{ color: '#63468E', textAlign: 'center' }}>{data.id}</td>
                        <td style={{ color: '#63468E', paddingLeft: '50px' }}>
                            <a>{data.P_ID}</a>
                        </td>
                        <td style={{ color: '#63468E' }}>{data.P_NAME}</td>
                        <td style={{ textAlign: 'center'}} className={data.amount === 0 ? "text-danger" : data.amount <= 15 ? "text-warning" : "text-success"}
>{data.amount}</td>
                    </tr>
                )
        })
    
        return (
            <div>
                <Total amount={amount} />
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
                                        <th style={{ width: '45%', paddingLeft: '50px' }}>รหัส</th>
                                        <th style={{ width: '40%' }}>ชื่อสินค้า</th>
                                        <th style={{ width: '10%', textAlign: 'center' }}>คงเหลือ</th>
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
                                <select style={{right: '0px'}} className="form-select" value={selectedValue} onChange={handleChange}>
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
        //     <Nav actived='product' iconActive={{opacity: '100%'}}/>
        //     <div id="content-wrapper" className="d-flex flex-column">
        //         <div id="content">
        //             <Head topbar='Product / สินค้า'/>
        //             <Body heading='สินค้าทั้งหมด' table={<Productbox/>}/>
        //             <Footer/>
        //         </div>
        //     </div>
        //     <div className="loader" id="loader"></div>
        // </div>
        <Layout actived='product' iconActive={{ opacity: '100%' }} topbar='Product / สินค้า' heading='สินค้าทั้งหมด' table={<Productbox />} />
    )
}