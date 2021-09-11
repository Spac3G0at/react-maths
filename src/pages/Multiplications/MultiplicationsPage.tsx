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

      <button
        onClick={() => setPlay(true)}
        className="button-root button-primary"
      >
        Play <FiPlay />
      </button>

      <MultiplicationsGame exit={() => setPlay(false)} show={play} />
    </Page>
  );
};

export default MultiplicationsPage;
