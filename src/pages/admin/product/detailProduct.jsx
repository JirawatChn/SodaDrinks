import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Link } from "react-router-dom"

export const DetailProduct = () =>{

    const back = () => {
        return (
            <div>
                <Link to={'/product'}>
                    <p style={{ color: '#63468E', fontSize: '1rem', fontWeight: '400' }}>
                        <i className="bi bi-chevron-left"></i>
                        สินค้าทั้งหมด
                    </p>
                </Link>
            </div>
        )
    }

    const DetailProductBox = () =>{
        return(
            <div>

            </div>
        )
    }
    return(
        <div id="wrapper">
        <Nav actived='product' iconActive={{ opacity: '100%' }} />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Head topbar='Product / รายการสินค้า' />
                <Body heading={back()} table={<DetailProductBox/>}/>
                <div style={{ textAlign: "center" }}></div>
            </div>
        </div>
        <div className="loader" id="loader"></div>
        {/* <Layout actived='order' iconActive={{ opacity: '100%' }} topbar='Order / เบิกสินค้า' heading='เบิกสินค้า' table={<Orderbox />} /> */}
    </div>
    )
}