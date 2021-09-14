import React from "react";
import "./NavButton.scss";

const NavButton: React.FC<{ icon: any; active?: boolean; onClick: any }> = ({
  icon,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`NavButton ${active && "active"} neumorphic`}
    >
      <div>{icon}</div>
    </button>
  );
};

export default NavButton;
