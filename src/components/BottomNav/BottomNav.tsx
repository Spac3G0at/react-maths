import React from "react";
import "./BottomNav.scss";
import NavButton from "./NavButton";
import { TiDocumentText } from "react-icons/ti";
import { FaDumbbell } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";

const BottomNav: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const setActive = (path: string) => {
    if (pathname !== path) navigate(path);
  };

  const isActive = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <div className="BottomNav">
      <NavButton
        onClick={() => setActive("/app/home")}
        active={isActive("/home")}
        icon={<AiFillHome style={{ fontSize: "25px" }} />}
      />
      <NavButton
        onClick={() => setActive("/app/exercises")}
        active={isActive("/exercises")}
        icon={<FaDumbbell style={{ fontSize: "25px" }} />}
      />
      <NavButton
        active={isActive("/courses")}
        onClick={() => setActive("/app/courses")}
        icon={<TiDocumentText style={{ fontSize: "25px" }} />}
      />
    </div>
  );
};

export default BottomNav;
