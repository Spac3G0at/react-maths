import React from "react";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card";
import Page from "../../layout/Page/Page";

const Exercises: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <div
        style={{
          height: "100%",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "10px 0px" }}>Exercises</h1>
        <Card onClick={() => navigate("/app/exercises/multiplications")}>
          <h4>Multiplications</h4>
        </Card>
        <br />
        <Card onClick={() => navigate("/app/exercises/tables")}>
          <h4>Tables</h4>
        </Card>
      </div>
    </Page>
  );
};

export default Exercises;
