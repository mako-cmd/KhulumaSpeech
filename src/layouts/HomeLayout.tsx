import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/Mobileheader";
import { useState } from "react";
import Footer from "../components/Footer";
import ChakraModal from "../components/ChakraModal";
import { useDisclosure } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { createContext } from "react";

interface IProps {
  contactModalUseDisclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
  };
}

export const LayoutContext = createContext<IProps | undefined>(undefined);

export default function HomeLayout() {
  const contactModalUseDisclosure = useDisclosure();
  let props: IProps = { contactModalUseDisclosure: contactModalUseDisclosure };
  let header = <Header />;
  if (isMobileDevice()) {
    header = <MobileHeader />;
  }

  return (
    <LayoutContext.Provider value={props}>
      <ChakraModal
        title="Get In Touch"
        content={
          <>
            <span>
              <PhoneIcon />
              &nbsp; <a href="tel:0412 345 678">0412 345 678</a>
            </span>
          </>
        }
        stateVars={contactModalUseDisclosure}
      />
      {header}
      <Outlet />
      <Footer />
    </LayoutContext.Provider>
  );
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
