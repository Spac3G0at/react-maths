import React from "react";
import { useNavigate } from "react-router";
import Card from "../../components/Card/Card";
import Page from "../../layout/Page/Page";

//

const Courses: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <div
        style={{
          height: "100%",
        }}
      >
        <Card onClick={() => navigate("/app/courses/tables")}>
          <h4>Multiplications</h4>
        </Card>
      </div>
    </Page>
  );
};

export default Courses;
