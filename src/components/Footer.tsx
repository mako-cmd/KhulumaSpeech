import { Link } from "react-router-dom";
import classes from "../styles/footer.module.css";
import SubFooter from "./SubFooter";
import { useContext } from "react";
import { LayoutContext } from "../layouts/HomeLayout";

export default function Footer() {
  const props = useContext(LayoutContext);
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.logos}>
          <img
            className={classes.logo}
            src="/logo.png"
            alt="logo"
          />
          <img
            className={classes.logo}
            src="/abo_logo.jpg"
            alt="Aboriginal Logo"
          />
        </div>

        <div className={classes.abo_ack}>
          <div className={classes.acknowledgment}>
            In the spirit of reconciliation, Khuluma Speech Pathology
            acknowledges the Traditional Owners of the lands where they live and
            work – the land of the Wurudjeri people of the Kulin Nation. We pay
            respect to their Elders past and present and extend that respect to
            all Aboriginal and Torres Strait Islander peoples.
          </div>
          <div className={classes.links}>
            <h3>Quick Links</h3>
            <Link
              to={""}
              onClick={props?.howIWorkModalUseDisclosure.onOpen}
            >
              <span>Work With Me</span>
            </Link>
            <a
              href="/Privacy_Policy.pdf"
              target="__blank"
            >
              <span>Terms Of Service</span>
            </a>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
