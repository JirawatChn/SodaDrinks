import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"
import { Total } from "../../../Components/table"


export const Customer = () => {
    
    const Customerbox = () =>{
        return(
            <Total amount={0}/>
        )
    }

    return (
        // <div id="wrapper">
        //     <Nav actived='customer' iconActive={{opacity: '100%'}}/>
        //     <div id="content-wrapper" className="d-flex flex-column">
        //         <div id="content">
        //             <Head topbar='Customer / ลูกค้า'/>
        //             <Body heading='ลูกค้า' table={<Total amount={0}/>}/>
        //             <Footer/>
        //         </div>
        //     </div>
        //     <div className="loader" id="loader"></div>
        // </div>
        <Layout actived='customer' iconActive={{ opacity: '100%' }} topbar='Customer / ลูกค้า' heading='ลูกค้า' table={<Customerbox />} />
    )
}