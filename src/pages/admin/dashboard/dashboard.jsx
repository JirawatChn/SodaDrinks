import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"

export const Dashboard = () => {
    return (
        // <div id="wrapper">
        //     <Nav actived='dashboard' iconActive={{opacity: '100%'}}/>
        //     <div id="content-wrapper" className="d-flex flex-column">
        //         <div id="content">
        //             <Head topbar='Dashboard / ภาพรวม'/>
        //             <Body heading='ภาพรวม'/>
        //             <Footer/>
        //         </div>
        //     </div>
        // </div>
        <Layout actived='dashboard' iconActive={{ opacity: '100%' }} topbar='Dashboard / ภาพรวม' heading='ภาพรวม'/>
    )
}