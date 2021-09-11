import React from "react";
import Card from "../../components/Card/Card";
import Page from "../../layout/Page/Page";

const Exercises: React.FC = () => {
  return (
    <Page>
      <div
        style={{
          height: "100%",
        }}
      >
        <Card>
          <h4>Multiplications</h4>
        </Card>
        <br />
        <Card>
          <h4>Additions</h4>
        </Card>
      </div>
    </Page>
  );
};

export default Exercises;
