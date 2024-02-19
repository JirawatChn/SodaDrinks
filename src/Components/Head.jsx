import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Notification, Profile } from "./dropdown";

export const Head = ({ topbar }) => {

    const handleSidebarToggle = () => {
        document.body.classList.toggle("sidebar-toggled");
        document.querySelector(".sidebar").classList.toggle("toggled");

        if (document.querySelector(".sidebar").classList.contains("toggled")) {
            document.querySelectorAll(".sidebar .collapse").forEach((collapse) => collapse.collapse("hide"));
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <FontAwesomeIcon style={{ color: '#63468E', fontSize: '30px' }} id="sidebarToggle" icon={faBars}  onClick={handleSidebarToggle}/>

                <div style={{ paddingLeft: '20px', fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
                    <p>{topbar}</p>
                </div>

                <ul className="navbar-nav ml-auto">

                    <Notification/> 

                    <div className="topbar-divider d-none d-sm-block"></div>

                    <Profile/>
                    
                </ul>
            </nav>
        </div>
    )
}