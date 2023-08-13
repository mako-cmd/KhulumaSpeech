import classes from "../styles/topsection.module.css";
import { BiSolidChevronsDown } from "react-icons/bi";

export default function TopSection() {
  return (
    <div className={classes.wrapper}>
      {/* <h1>Khuluma</h1>
      <br />

      <h2 style={{ color: "orange" }}>
        <i>(ku-lu-mah)</i>
      </h2>
      <br />
      <h1>Speech Pathology</h1> */}
      <img
        className={classes.logo}
        src="/logo.png"
        alt="logo"
      />

      <BiSolidChevronsDown className={classes.call_to_scroll_down} />
    </div>
  );
}
