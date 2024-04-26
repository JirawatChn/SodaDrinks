import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../pages/admin/dashboard/dashboard";

export const Nav = ({ actived, iconActive }) => {
  return (
    <div>
      <style>
        {`
.transition-container {
    transform: translateY(-100%);
    transition: transform 1s ease;
  }
  
  .transition-container.start {
    transform: translateY(0);
  }
  
  .transition-container .card {
    transform: translateY(100%);
    transition: transform 1s ease;
  }
  
  .transition-container.start .card {
    transform: translateY(0);
  }
  
  @keyframes pushUp {
    from {
      transform: translateY(100%);
    }
  
    to {
      transform: translateY(0);
    }
  }
  
  .push-up-animation {
    animation: pushUp 1s ease;
  }
  
  .slide-from-bottom {
    transition: transform 0.5s ease;
    transform: translateY(100%);
  }
  
  .slide-from-bottom.show {
    transform: translateY(0);
  }
  
  .modal-content .modal-body p {
    text-decoration: none;
  }
  
  .card-header {
    animation: slideInRight 1s ease-out;
    /* Adjust the duration and timing function as needed */
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
  
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
  
    to {
      transform: translateY(0);
    }
  }

                .logo {
                    animation: flip 5s infinite;
                    vertical-align: middle;
                    border-style: none;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                }
                @keyframes flip {
                    0%, 100% {
                        transform: rotateY(0deg);
                    }
                    50% {
                        transform: rotateY(180deg);
                    }
                }
                `}
      </style>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon">
            <img className="logo" src="./img/bg-1.jpg" width="45" height="50" />
          </div>
          <div className="sidebar-brand-text mx-3">Soda Drink</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className={"nav-item" + (actived === "dashboard" ? " active" : "")}>
          <Link to={"/dashboard"} className="nav-link collapsed">
            <img
              width="18"
              height="18"
              style={
                actived == "dashboard" ? { iconActive } : { opacity: "35%" }
              }
              src="./img/fi-ss-dashboard.png"
            />
            <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
              Dashboard
            </span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Operations</div>

        <li className={"nav-item" + (actived === "product" ? " active" : "")}>
          <Link to={"/product"} className="nav-link collapsed">
            <img
              width="18"
              height="18"
              style={actived == "product" ? { iconActive } : { opacity: "35%" }}
              src="./img/fi-ss-label.png"
            />
            <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
              Product
            </span>
          </Link>
        </li>

        <li className={"nav-item" + (actived === "order" ? " active" : "")}>
          <Link to={"/order"} className="nav-link collapsed">
            <img
              width="18"
              height="18"
              style={actived == "order" ? { iconActive } : { opacity: "35%" }}
              src="./img/fi-ss-receipt.png"
            />
            <span style={{ fontSize: "15px", paddingLeft: "10px" }}>Order</span>
          </Link>
        </li>

        <li className={"nav-item" + (actived === "delivery" ? " active" : "")}>
          <Link to={"/delivery"} className="nav-link collapsed">
            <img
              width="18"
              height="18"
              style={
                actived == "delivery" ? { iconActive } : { opacity: "35%" }
              }
              src="./img/fi-ss-truck-side.png"
            />
            <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
              Delivery
            </span>
          </Link>
        </li>

        <li className={"nav-item" + (actived === "customer" ? " active" : "")}>
          <Link to={"/customer"} className="nav-link collapsed">
            <img
              width="18"
              height="18"
              style={
                actived == "customer" ? { iconActive } : { opacity: "35%" }
              }
              src="./img/Vector.png"
            />
            <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
              Customer
            </span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Admin</div>

        <li className={"nav-item" + (actived === "account" ? " active" : "")}>
          <Link to={"/account"} className="nav-link collapsed">
            <img
              width="18"
              height="18"
              style={actived == "account" ? { iconActive } : { opacity: "35%" }}
              src="./img/fi-ss-user.png"
            />
            <span style={{ fontSize: "15px", paddingLeft: "10px" }}>
              Account
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
