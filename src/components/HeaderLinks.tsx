import classes from "../styles/headerlinks.module.css";
import { useDisclosure } from "@chakra-ui/react";
import ChakraModal from "./ChakraModal";
import { PhoneIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { LayoutContext } from "../layouts/HomeLayout";
import { Link } from "react-router-dom";

export default function HeaderLinks() {
  const props = useContext(LayoutContext);

  return (
    <>
      <div className={classes.links_wrapper}>
        <HeaderLink
          label="Home"
          url="/"
        />
        <HeaderLink
          label="About"
          url="/about"
        />
        <HeaderLink
          label="Contact"
          onClick={props ? props.contactModalUseDisclosure.onOpen : undefined}
          url={null}
        />
      </div>
    </>
  );
}

function HeaderLink(data: {
  label: string;
  url: string | null;
  onClick?: () => void;
}) {
  return (
    <Link
      to={data.url ? data.url : ""}
      className={classes.link_wrapper}
      onClick={data.onClick}
    >
      <span className="no-select">{data.label}</span>
    </Link>
  );
}
