import React, { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaBuilding,
  FaWallet,
  FaCog,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import "./sidebar.css";
import CardDetals from "../cardDetails/CardDetals";
import LineChart from "../LineGraph/LineChart";
import CollectionD from "../collection/CollectionD";
import TeamManage from "../Tmanagement/TeamManage";
import notifImg from "../../assets/notification.png";
// import profileImg form "../../assets/profile.png";
import profileImg from "../../assets/profile.png";

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isContainerActive, setIsContainerActive] = useState(false);

  // handle toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
    setIsContainerActive(!isContainerActive);
  };

  return (
    <div className="wrapper">
      {/* Side-Nav */}
      <div
        className={`side-navbar ${
          isSidebarActive ? "active-nav" : ""
        } d-flex justify-content-between flex-wrap flex-column`}
      >
        <ul className="nav flex-column w-100">
          <a href="#" className="nav-link h3 my-2 logo_bizclock">
            BiZCLOCK
          </a>
          <li href="#" className="nav-link active mt-3">
            <span className="icon">
              <FaTachometerAlt />
            </span>
            <a href="#" className="mx-2">
              Dashboard
            </a>
          </li>
          <li href="#" className="nav-link">
            <FaBuilding />
            <a href="#" className="mx-2">
              Properties
            </a>
          </li>
          <li href="#" className="nav-link">
            <FaWallet />
            <a href="#" className="mx-2">
              Transactions
            </a>
          </li>
          <li href="#" className="nav-link">
            <FaCog />
            <a href="#" className="mx-2">
              Settings
            </a>
          </li>
          <li href="#" className="nav-link">
            <FaUsers />
            <a href="#" className="mx-2">
              Community
            </a>
          </li>
          <li href="#" className="nav-link">
            <FaQuestionCircle />
            <a href="#" className="mx-2">
              Help
            </a>
          </li>
        </ul>
        <span
          href="#"
          className="nav-link h4 w-100 mb-5"
          style={{ fontSize: "14px", fontWeight: "400" }}
        >
          <p>
            BizClick DASHBOARD
            <br />
            @2024 All Rights Reserved
          </p>
          <p>Made By Kanishka Garg</p>
        </span>
      </div>

      {/* Main Wrapper */}
      <div className={`my-container ${isContainerActive ? "active-cont" : ""}`}>
        {/* Top Nav */}
        <nav className="navbar top-navbar navbar-light bg-white px-5">
          <a className="btn border-0" id="menu-btn" onClick={toggleSidebar}>
            {/* <FiAlignJustify /> */}
            <FaBars size={20} />
            &nbsp; Dashboard
          </a>
          <form className="d-lg-flex d-none ms-auto" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="ms-2 Notification">
            <a href="#">
              <img src={notifImg} alt="notification" width="512" height="512" />
            </a>
          </div>
          <div className="ms-4 d-flex justify-content-between align-items-center gap-3 person">
            <div className="text-center personName">
              <h5 className="mb-0">David Here</h5>
              <p className="mb-0">Super Admin</p>
            </div>
            <div className="profile">
              <img src={profileImg} alt="profile" width="256" height="256" />
            </div>
          </div>
        </nav>
        {/* End Top Nav */}
        <div className="container mt-4 my-4">
          <div className="row">
            <div className="col-md-12">
              <CardDetals />
              <LineChart />
              <CollectionD />
              <TeamManage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
