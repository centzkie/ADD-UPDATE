import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../Css/Qln.css";
const Qln = () => {
  const navigate = useNavigate();
  const done = () => {
    navigate("/");
  };
  return (
    <div className="qln">
      <div className="headings"></div>
      <div className="content">
        <div className="head">You are:</div>
        <div className="queueLineNumber">
          <h1>01</h1>
        </div>
        <div className="note">
          <div className="thankyou">Thank you for using our QMS-portal</div>
          <div className="screenshot">
            <span style={{ color: "red" }}>*</span> Please write or do
            screenshot to remember your QLN
          </div>
        </div>
        <div className="buttons">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={done}
          >
            Done
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Qln;
