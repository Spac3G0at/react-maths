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
        <Card onClick={() => navigate("/app/exercises/multiplications")}>
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
