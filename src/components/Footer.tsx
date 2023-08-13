import classes from "../styles/footer.module.css";
import SubFooter from "./SubFooter";

export default function Footer() {
  return (
    <>
      <div className={classes.wrapper}></div>
      <SubFooter />
    </>
  );
}
