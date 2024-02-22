import { faBars, faBell, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown';



export const Notification = () => {
    return (
            <Dropdown>
                <Dropdown.Toggle className="nav-link dropdown-toggle" id="alertsDropdown">
                    <i className="bi bi-bell-fill"></i>
                    <span className="badge badge-danger badge-counter">2</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <Dropdown.Header>
                        Alerts Center
                    </Dropdown.Header>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">-</div>
                            <span className="font-weight-bold">-</span>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">-</div>
                            <span className="font-weight-bold">-</span>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    )
}



export const Profile = () => {

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

    return (
        <div>
            <Dropdown className='nav-item dropdown no-arrow'>
                <Dropdown.Toggle variant="link" id="userDropdown" className="nav-link dropdown-toggle">
                    <span className="mr-2 d-none d-lg-inline text-gray-900 small">Admin <i className="bi bi-person-fill"></i></span>
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item >
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

// li className={`nav-item dropdown no-arrow ${showProfile ? 'show' : ''}`}>
//                 <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
//                     data-toggle="dropdown" aria-haspopup="true" aria-expanded={showProfile ? 'true' : 'false'}
//                     onClick={() => { setShowProfile(!showProfile) }}>
//                     <span className="mr-2 d-none d-lg-inline text-gray-900 small">Admin</span>
//                     <img className="img-profile rounded-circle" src="./img/Person.jpg" alt="User Profile" />
//                 </a>
//                 {/* Dropdown - User Information */}
//                 <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${showProfile ? 'show' : ''}`}
//                     aria-labelledby="userDropdown">
//                     <a className="dropdown-item" href="/pages/Admin/profile.html">
//                         <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
//                         Profile
//                     </a>
//                     <div className="dropdown-divider" onClick={handleLogout}></div>
//                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
//                         <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//                         Logout
//                     </a>
//                 </div>
//             </li>