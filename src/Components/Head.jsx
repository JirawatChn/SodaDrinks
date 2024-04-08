import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";


export const Head = ({ topbar }) => {

    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem('token'));

    useEffect(() => {
        if (token === '') {
            navigate('/');
        }
    }, [token]);

    const handleLogout = () => {
        sessionStorage.setItem('token', '');
        setToken('');
    };

    const handleSidebarToggle = () => {
        document.body.classList.toggle("sidebar-toggled");
        document.querySelector(".sidebar").classList.toggle("toggled");

        if (document.querySelector(".sidebar").classList.contains("toggled")) {
            document.querySelectorAll(".sidebar .collapse").forEach((collapse) => collapse.collapse("hide"));
        }
    };

    return (
        <div>
            <Navbar expand="lg" variant="light" bg="white" className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                <Navbar.Brand style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', fontSize: '20px' }} >
                    <span style={{ marginRight: 'auto' }}>
                        <i className="bi bi-justify" id="sidebarToggle" onClick={() => { handleSidebarToggle() }}></i>
                    </span>
                    <span style={{ marginLeft: '20px' }}>{topbar}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end navbar-nav ml-auto">
                    <Navbar.Text className="nav-item dropdown no-arrow mx-1" style={{ zIndex: 200 }}>
                        <a id="alertsDropdown">
                            <i className="bi bi-bell-fill"></i>
                            <span className="badge badge-danger badge-counter">2</span>
                        </a>
                    </Navbar.Text>
                    <Navbar.Text style={{ zIndex: 200 }}>
                        <div className="divider d-none d-sm-block" ></div>
                    </Navbar.Text>
                    <Navbar.Text style={{ zIndex: 200 }}>
                        <Dropdown className="nav-item dropdown no-arrow">
                            <Dropdown.Toggle variant="etc" id="dropdown-basic">
                                <span className="mr-2 d-none d-lg-inline text-gray-900 small">Admin</span>
                                <Image className="img-profile rounded-circle" style={{ width: '25px' }} src="img/Person.jpg" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow animated--grow-in" href="#">
                                <Link to={'/profile'} className="dropdown-item" href="#">
                                    <i className="bi bi-person-fill mr-2 text-gray-400" ></i>
                                    Profile
                                </Link>
                                <NavDropdown.Divider />
                                <a className="dropdown-item" href="#" onClick={()=>{handleLogout()}}>
                                    <i className="bi bi-box-arrow-in-right mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}