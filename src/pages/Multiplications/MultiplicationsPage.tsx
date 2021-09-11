import React, { useState } from "react";
import Page from "../../layout/Page/Page";
import { VscSettings } from "react-icons/vsc";
import { FiPlay } from "react-icons/fi";
import "./MultiplicationsPage.scss";
import Modal from "../../components/Modal/Modal";
import MultiplicationsParamsForm from "../../components/Multiplications/MultiplicationsParamsForm";

const MultiplicationsPage = () => {
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    setShow(false);
  };

  return (
    <Page className="MultiplicationsPage">
      <h3>Multiplications</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => setShow(true)}
          className="settings-button button-root button-success"
        >
          <VscSettings />
        </button>
        <h4 style={{ marginLeft: 16 }}>Settings</h4>
      </div>
      <button className="button-root button-primary">
        Play <FiPlay />
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <MultiplicationsParamsForm handleConfirm={handleConfirm} />
      </Modal>
    </Page>
  );
};

export default MultiplicationsPage;
