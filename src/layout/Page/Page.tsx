import PropTypes from "prop-types";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", noPadding, ...other }: any, ref) => (
    <div
      style={{
        height: "100%",
        padding: "10px",
        paddingBottom: noPadding ? "0px" : "52px",
      }}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
