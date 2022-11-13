import React from "react";
import Sidepanel from "../Components/Sidepanel";
import "../Css/AnnouncementDB.css";
import Signout from "../Components/AdminSignOutbtn";
import { motion } from "framer-motion";

const AnnouncementDB = () => {
  return (
    <div className="announcement">
      <Sidepanel />
      <div className="announcementContent">
        <div className="title">
          <h1>Announcement</h1>
        </div>
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Announcement..."
          ></textarea>
          <div className="button">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Announce
            </motion.button>
          </div>
        </form>
        <div className="table"></div>
      </div>
      <div className="signOut">
        <Signout />
      </div>
    </div>
  );
};

export default AnnouncementDB;
