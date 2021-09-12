import React from "react";
import { IoConstructSharp } from "react-icons/io5";
import Page from "../../layout/Page/Page";

const Home: React.FC = () => {
  return (
    <Page>
      <div
        style={{
          height: "100%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          <IoConstructSharp />
        </h1>
        <h1 style={{ textAlign: "center" }}>App under development</h1>
      </div>
    </Page>
  );
};

export default Home;
