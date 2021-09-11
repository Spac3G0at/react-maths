import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav/BottomNav";
import "./NavLayout.scss";

const NavLayout: React.FC = () => {
  return (
    <div className="NavLayout">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default NavLayout;
