import React from "react"
import { Body } from "../../../Components/Body"
import { Head } from "../../../Components/Head"
import { Nav } from "../../../Components/Nav"
import { Footer } from "../../../Components/Footer"
import { Link } from "react-router-dom"

export const DetailDelivery = () => {
    return (
        <div id="wrapper">
            <Nav actived='delivery' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Delivery / การขนส่ง' />
                    <Body heading='บริการขนส่ง' />
                    <Footer />
                </div>
            </div>
        </div>
    )
}