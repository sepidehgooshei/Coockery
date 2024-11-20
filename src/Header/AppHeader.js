
import React from "react";
import { Link } from "react-router-dom";
import AppHeaderWatch from "../components/header/AppHeaderWatch";
import AppSidebar from "../components/header/AppSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Search from "../components/header/Search";

export default function AppHeader() {

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="row align-items-center py-2" style={{ backgroundColor: "#046865" }}>
        <div className="d-flex justify-content-between w-100">
          <AppHeaderWatch />
          <div>
            <Link className="text-white me-3" to="/Login">
              ورود/ثبت نام
            </Link>
          </div>
        </div>
      </div>

      <div className="row my-2 align-items-center">
        <div className="col-auto">
          <a className="navbar-brand" href="#">
            <img src="../assets/skin/logonew2.png" alt="rezim" height="50" width="100" className="d-inline-block align-text-top"/>
          </a>
        </div>
        
        <div className="col">
          <ul className="nav d-flex align-items-center">
            <li className="nav-item">
              <AppSidebar />
            </li>
           </ul>
        </div>
      
        <div className="col-4">
          <Search />
        </div>
    
        <div className="col text-end">
          <span> <i className="fa-brands fa-instagram me-2 text-danger"></i></span> 
          <span> <i className="fa-brands fa-youtube text-danger me-2"></i></span>
          <span><i className="fa-brands fa-telegram text-primary me-2"></i></span>
          <span><i className="fa-regular fa-envelope text-muted me-2"></i></span>
        </div>
      </div>
    </div>
  );
}


