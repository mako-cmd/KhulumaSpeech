import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/Mobileheader";
import { useState } from "react";
import SubFooter from "../components/SubFooter";
import ChakraModal from "../components/ChakraModal";
import { useDisclosure } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { createContext } from "react";
import SplashScreen from "../components/SplashScreen";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

interface IUseDisclosure {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
}

interface IProps {
  contactModalUseDisclosure: IUseDisclosure;
  howIWorkModalUseDisclosure: IUseDisclosure;
}

export const LayoutContext = createContext<IProps | undefined>(undefined);

export default function HomeLayout() {
  const contactModalUseDisclosure = useDisclosure();
  const howIWorkModalUseDisclosure = useDisclosure();
  let props: IProps = {
    contactModalUseDisclosure: contactModalUseDisclosure,
    howIWorkModalUseDisclosure: howIWorkModalUseDisclosure,
  };
  let header = <Header />;
  if (isMobileDevice()) {
    header = <MobileHeader />;
  }

  return (
    <>
      <div
        className="layout"
        id="layout"
      >
        <LayoutContext.Provider value={props}>
          <ChakraModal
            title="Get In Touch"
            content={
              <>
                <span
                  style={{ display: "flex", placeItems: "center", gap: "10px" }}
                >
                  <PhoneIcon />
                  <a href="tel:0478 624 165">0478 624 165</a>
                </span>
                <br />
                <span
                  style={{ display: "flex", placeItems: "center", gap: "10px" }}
                >
                  <MdOutlineAlternateEmail />
                  <a href="mailto:khulumaspeech@gmail.com">
                    khulumaspeech@gmail.com
                  </a>
                </span>
              </>
            }
            stateVars={contactModalUseDisclosure}
          />
          {header}
          <Outlet />
          <Footer />
          <ScrollToTop />

          {/* <SubFooter /> */}
        </LayoutContext.Provider>
      </div>
      {/* <SplashScreen /> */}
    </>
  );
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
