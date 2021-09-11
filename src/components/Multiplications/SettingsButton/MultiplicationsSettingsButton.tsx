import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import Modal from "../../Modal/Modal";
import MultiplicationsParamsForm from "../MultiplicationsParamsForm";

const MultiplicationsSettingsButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        onClick={() => setShow(true)}
        className="settings-button button-root button-info"
      >
        <VscSettings />
      </button>
      <h4 style={{ marginLeft: 16 }}>Settings</h4>
      <Modal show={show} onClose={() => setShow(false)}>
        <MultiplicationsParamsForm handleConfirm={() => setShow(false)} />
      </Modal>
    </div>
  );
};

export default MultiplicationsSettingsButton;
