import { useEffect, useState } from "react";
import { Notification, Profile } from "./dropdown";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';


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
            <Navbar expand="lg" variant="light" bg="white" className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <Navbar.Brand style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
                    <span style={{ marginRight: 'auto' }}>
                        <i className="bi bi-justify" id="sidebarToggle"></i>
                    </span>
                    <span style={{ marginLeft: '20px' }}>{topbar}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end navbar-nav ml-auto">

                    <Navbar.Text className="nav-item dropdown no-arrow mx-1">
                        <a id="alertsDropdown"> 
                            <i className="bi bi-bell-fill"></i>
                            <span className="badge badge-danger badge-counter">2</span>
                        </a>
                    </Navbar.Text>

                    <Navbar.Text>
                        <div className="divider d-none d-sm-block" ></div>
                    </Navbar.Text>

                    <Navbar.Text className="nav-item dropdown no-arrow" >
                        <a id="userDropdown" >
                            <span className="mr-2 d-none d-lg-inline text-gray-900 small">Admin</span>
                            <i className="bi bi-person-fill"></i>
                        </a>
                    </Navbar.Text>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}