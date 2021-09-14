import React, { forwardRef } from "react";
import "./Card.scss";

const Card = forwardRef(
  ({ children, title = "", noPadding, ...other }: any, ref) => (
    <div className="Card neumorphic" ref={ref} {...other}>
      {children}
    </div>
  )
);

export default Card;
