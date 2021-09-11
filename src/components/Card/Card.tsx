import React, { forwardRef } from "react";
import "./Card.scss";

const Card = forwardRef(
  ({ children, title = "", noPadding, ...other }: any, ref) => (
    <div className="Card" ref={ref} {...other}>
      {children}
    </div>
  )
);

export default Card;
