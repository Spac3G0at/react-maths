import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Tables from "../../components/Tables/Tables";
import Page from "../../layout/Page/Page";
import "./TablePage.scss";

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const TablesPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState(2);

  const handleStart = (num: number) => {
    setTableNumber(num);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page className="TablePage">
      <h3 style={{ textAlign: "center" }}>Tables</h3>
      <div className="grid">
        {numbers.map((el: number) => (
          <div key={el} className="grid-item">
            <Card onClick={() => handleStart(el)}>{el}</Card>
          </div>
        ))}
      </div>

      <Tables tableNumber={tableNumber} exit={handleClose} show={open} />
    </Page>
  );
};

export default TablesPage;
