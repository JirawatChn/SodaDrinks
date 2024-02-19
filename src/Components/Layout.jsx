import { Body } from "./Body"
import { Footer } from "./Footer"
import { Head } from "./Head"
import { Nav } from "./Nav"

export const Layout = ({ actived,iconActive,topbar,heading,table }) => {
    return (
        <div id="wrapper">
            <Nav  actived={actived} iconActive={iconActive}/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar={topbar}/>
                    <Body heading={heading} table={table}/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}