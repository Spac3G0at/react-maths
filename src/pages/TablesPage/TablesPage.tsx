import React from "react";
import Card from "../../components/Card/Card";
import Page from "../../layout/Page/Page";
import "./TablePage.scss";

const TablesPage: React.FC = () => {
  return (
    <Page className="TablePage">
      <h3 style={{ textAlign: "center" }}>Tables</h3>
      <div className="grid">
        <div className="grid-item">
          <Card>2</Card>
        </div>
        <div className="grid-item">
          <Card>3</Card>
        </div>
        <div className="grid-item">
          <Card>4</Card>
        </div>
        <div className="grid-item">
          <Card>5</Card>
        </div>
        <div className="grid-item">
          <Card>6</Card>
        </div>
        <div className="grid-item">
          <Card>7</Card>
        </div>
        <div className="grid-item">
          <Card>8</Card>
        </div>
        <div className="grid-item">
          <Card>9</Card>
        </div>
      </div>
    </Page>
  );
};

export default TablesPage;
