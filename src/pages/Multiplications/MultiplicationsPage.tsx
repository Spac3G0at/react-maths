import React, { useState } from "react";
import Page from "../../layout/Page/Page";
import { FiPlay } from "react-icons/fi";
import "./MultiplicationsPage.scss";
import MultiplicationsSettingsButton from "../../components/Multiplications/SettingsButton/MultiplicationsSettingsButton";
import MultiplicationsGame from "../../components/Multiplications/MultiplicationsGame/MultiplicationsGame";

const MultiplicationsPage: React.FC = () => {
  const [play, setPlay] = useState(false);

  return (
    <Page className="MultiplicationsPage">
      <h3>Multiplications</h3>

      <MultiplicationsSettingsButton />

      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          marginTop: "50%",
        }}
      >
        <button
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            boxShadow: "rgb(176 176 176) 0px 4px 15px 2px",
          }}
          onClick={() => setPlay(true)}
          className="button-root button-success"
        >
          <FiPlay style={{ fontSize: "40px", marginLeft: "10px" }} />
        </button>
      </div>

      <MultiplicationsGame exit={() => setPlay(false)} show={play} />
    </Page>
  );
};

export default MultiplicationsPage;
