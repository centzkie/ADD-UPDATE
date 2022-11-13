import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserLock as AdminPortal } from "react-icons/fa";

import Tophero from "../Components/Tophero";

const Landing = () => {
  const navigate = useNavigate();
  const adminAuth = () => {
    navigate("/admin");
  };
  const GenerateQLN = () => {
    navigate("/generateNumber");
  };
  const transactions = () => {
    navigate("/transactions");
  };

  const viewTables = {
    color: "Blue",
    textDecoration: "none",
  };
  return (
    <div className="landing">
      <div className="wrapper">
        <Tophero />
        <div className="access">
          <motion.div
            className="admin"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <abbr title="Admin Access">
              <AdminPortal onClick={adminAuth} />
            </abbr>
          </motion.div>
        </div>

        <main className="content">
          <div className="card">
            <div className="elements">
              <h1>Office of Academic Head Program</h1>
              <div className="buttons">
                <div className="generatebtn">
                  <motion.button
                    className="generate"
                    onClick={GenerateQLN}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Generate Queue Line Number
                  </motion.button>
                </div>
                <div className="transactionbtn">
                  <motion.button
                    type="button"
                    className="transaction"
                    onClick={transactions}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View My Transaction
                  </motion.button>
                </div>
                <div className="transactionbtn">
                  <a href="#tables" style={viewTables}>
                    View QueueLine
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <section id="tables">
          <div className="tables">
            <h2>QUEUELINE HERE</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
