import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Link } from "react-router-dom"

export const AddOrder = () => {
    const back = () => {
        return (
            <div>
                <Link to={'/order'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        รายการเบิกสินค้า
                    </p>
                </Link>
            </div>
        )
    }
    const AddOrderBox = () => {
        return (
            <div>
                <div>
                    <h1 className="h4 mb-2 " style={{ color: 'black', top: '20px', fontWeight: 'bold' }}>
                        สร้างรายการเบิกสินค้า
                    </h1>
                </div>
                <div className="card shadow mb-3">
                        <div className="card-body" style={{height: '350px'}}>
                            <div className="row" style={{paddingLeft: '20px'}}>
                                <div className="topbar-divider d-none d-sm-block">
                                    <p style={{color: 'black', fontWeight: '800'}}>
                                        <img src="/img/Group 5.png"/> ข้อมูล
                                    </p>
                                </div>
                            </div>
                            <div style={{paddingLeft: '23px'}}>


                                <div className="row" style={{height: '47px'}}>
                                    <div className="col-md-2">
                                        <div style={{clear: 'both',float: 'left', width: '100%', color: 'black'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <p style={{marginRight: '10px',fontWeight: '200'}}>
                                                    รายการ: </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="OD-0001" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{top: '100%'}}>
                                    <div className="col-md-2">
                                        <div style={{clear: 'both', float: 'left', width: '100%', color: 'black'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <p style={{marginRight: '10px', fontWeight: '200'}}>จาก:
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" value="คลังสินค้า" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div style={{clear: 'both', float: 'left', width: '100%', color: 'black'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <p style={{marginRight: '10px', fontWeight: '200'}}>ไป: </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group input-group-sm mb-3">
                                            <select style={{width: '100%'}} className="form-select" id="inputGroupSelect02">
                                                <option selected>บริษัท 1 </option>
                                                <option value="1">บริษัท 2</option>
                                                <option value="2">บริษัท 3</option>
                                                <option value="3">บริษัท 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div style={{clear: 'both', float: 'left', width: '100%', color: 'black'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <p style={{marginRight: '10px', fontWeight: '300'}}>วันที่: </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group input-group-sm mb-3">
                                            <input id="datepicker" type="text" className="form-control"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div style={{clear: 'both', float: 'left', width: '100%', color: 'black'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <p style={{marginRight: '10px', fontWeight: '300'}}>อ้างอิง </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group input-group-sm mb-3">
                                            <input type="text" className="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" placeholder="-"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
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
                    {/* ส่ง back เข้าไปเป็นค่า prop สำหรับ heading ใน Body */}
                    <Body heading={back()} table={<AddOrderBox />} />
                    <div style={{ textAlign: "center" }}></div>
                </div>
            </div>
            <div className="loader" id="loader"></div>
            {/* <Layout actived='order' iconActive={{ opacity: '100%' }} topbar='Order / เบิกสินค้า' heading='เบิกสินค้า' table={<Orderbox />} /> */}
        </div>
    )
}