import Actionlet from "../components/Actionlet/Actionlet";
import classes from "../styles/section_3.module.css";
import { RiSpeakLine } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
import { MdOutlineHandshake } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";

export default function Section_3() {
  return (
    <>
      <div className={classes.wrapper}>
        <h3 className={classes.subtitle}>What we help with...</h3>
        <div className={classes.sub_wrapper}>
          <Actionlet
            label={"Talking"}
            icon={<RiSpeakLine />}
          />
          <Actionlet
            label={"Literacy"}
            icon={<BsBook />}
          />
          <Actionlet
            label={"Understanding"}
            icon={<MdOutlineHandshake />}
          />
          <Actionlet
            label={"Pronunciation"}
            icon={<IoMegaphoneOutline />}
          />
        </div>
      </div>
    </>
  );
}
