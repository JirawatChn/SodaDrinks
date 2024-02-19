import { faBars, faBell, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Notification = () => {
    return (
        <div>
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faBell} className="fa-fw" />
                    <span className="badge badge-danger badge-counter">2</span>
                </a>
            </li>
        </div>
    )
}

export const Profile = () => {
    return (
        <div>
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-900 small">Admin</span>
                    <img className="img-profile rounded-circle" src="./img/Person.jpg" />
                </a>
            </li>
        </div>
    )
}