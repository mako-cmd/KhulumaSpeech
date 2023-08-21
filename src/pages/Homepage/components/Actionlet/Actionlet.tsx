import { IconType } from "react-icons";
import classes from "../../../../styles/actionlet.module.css";
import { ReactNode } from "react";
import { BiError } from "react-icons/bi";

interface data {
  icon: ReactNode;
  label: string;
}

export default function Actionlet({ label, icon }: data) {
  const defaultIcon = <BiError />;
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.icon}>{icon ?? defaultIcon}</div>
        <p className={classes.label}>{label ?? "Label"}</p>
      </div>
    </>
  );
}
