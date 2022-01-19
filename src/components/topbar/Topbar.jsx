import React from "react";
import "./topbar.css";
import { ListSharp } from "@material-ui/icons";
import Logo from "../../assets/logo final 1.svg";




export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={Logo} alt='logo' className='topbarLogo' />
          <span className="logo">
            NetEstate Board
          </span>
        </div>
        <div className="topRight">
          <span className="DashboardVersion">ADMIN 1.0</span>
          <div className="topbarLoginContainer">
            <span className="topTextEmail">armelguerin23@gmail.com</span>
            <span className="topTextRole">administrateur</span>
          </div>
          <ListSharp className="topbarIcon" />
        </div>
      </div>
    </div>
  );
}
