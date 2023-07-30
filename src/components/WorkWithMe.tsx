import { useContext } from "react";
import classes from "../styles/workwithme.module.css";
import { LayoutContext } from "../layouts/HomeLayout";
export default function WorkWithMe() {
  const props = useContext(LayoutContext);
  return (
    <>
      <a onClick={props?.howIWorkModalUseDisclosure.onOpen}>
        <div className={classes.wrapper}>
          <span
            className="no-select"
            style={{ fontSize: "x-large" }}
          >
            Work With Me
          </span>
        </div>
      </a>
    </>
  );
}
