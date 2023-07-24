import React from "react";
import './layout.css'
import SideBar from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <SideBar></SideBar>
              <main>{children}</main>

      </div>
    </>
  );
};

export default Layout;
