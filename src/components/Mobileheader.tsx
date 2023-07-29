import classes from "../styles/mobileheader.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Socials from "./Socials";
import ChakraSideBar from "./ChakraSidebar";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <ChakraSideBar
        isOpen={isOpen}
        onClose={closeDrawer}
      />
      <div className={classes.wrapper}>
        <Socials />
        <button
          className={classes.sidebar_button}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </button>
      </div>
    </>
  );
}
