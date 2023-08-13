import classes from "../styles/header.module.css";
import HeaderLinks from "./HeaderLinks";
import Socials from "./Socials";
import WorkWithMe from "./WorkWithMe";
import ChakraModal from "./ChakraModal";
import { useDisclosure } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <div className={classes.header_wrapper}>
        <div className={classes.left_section}>
          {/* <Socials /> */}
          <HeaderLinks />
        </div>
        <div className={classes.center_section}>
          {/* <img
            className={classes.logo}
            src="/logo_sm.png"
            alt="logo"
          /> */}
        </div>
        <div className={classes.right_section}>
          <WorkWithMe />
        </div>
      </div>
    </>
  );
}
