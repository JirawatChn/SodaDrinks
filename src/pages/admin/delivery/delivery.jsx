import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { Total } from "../../../Components/table"

export const Delivery = () => {

    const Deliverybox = () =>{
        return(
            <Total amount={0} name='ขนส่ง'/>
        )
    }
    
    return (
        // <div id="wrapper">
        //     <Nav actived='delivery' iconActive={{opacity: '100%'}}/>
        //     <div id="content-wrapper" className="d-flex flex-column">
        //         <div id="content">
        //             <Head topbar='Delivery / การขนส่ง'/>
        //             <Body heading='บริการขนส่ง' table={<Total amount={0}/>}/>
        //             <Footer/>
        //         </div>
        //     </div>
        //     <div className="loader" id="loader"></div>
        // </div>
        <Layout actived='delivery' iconActive={{ opacity: '100%' }} topbar='Delivery / การขนส่ง' heading='บริการขนส่ง' table={<Deliverybox />} />
    )
}