import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { Total } from "../../../Components/table"

export const Account = () => {

    const Accountbox = () =>{
        return(
            <Total amount={0} name='+ เพิ่มผู้ใช้งาน'/>
        )
    }

    return (
        // <div id="wrapper">
        //     <Nav actived='account' iconActive={{opacity: '100%'}}/>
        //     <div id="content-wrapper" className="d-flex flex-column">
        //         <div id="content">
        //             <Head topbar='Account / จัดการผู้ใช้'/>
        //             <Body heading='ข้อมูลผู้ใช้งาน' table={<Total amount={0}/>}/>
        //             <Footer/>
        //         </div>
        //     </div>
        //     <div className="loader" id="loader"></div>
        // </div>
        <Layout actived='account' iconActive={{ opacity: '100%' }} topbar='Account / จัดการผู้ใช้' heading='ข้อมูลผู้ใช้งาน' table={<Accountbox />} />
    )
}