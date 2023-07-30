import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/Mobileheader";
import { useState } from "react";
import Footer from "../components/Footer";
import ChakraModal from "../components/ChakraModal";
import { useDisclosure } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { createContext } from "react";

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
      <ChakraModal
        size="xl"
        title={<h2>How I Work</h2>}
        stateVars={howIWorkModalUseDisclosure}
        content={
          <div style={{ padding: "1rem" }}>
            <ol>
              <li>
                Fill this intake{" "}
                <a
                  style={{ color: "blue" }}
                  href="https://docs.google.com/forms/d/1_X3d-YysC68t_S8FHOnLXKHULxMOpxKmhKe9MzzFL14/edit"
                  target="_blank"
                >
                  form
                </a>{" "}
                to be considered for our wailist.
              </li>
              <li>
                I will respond and let you know if I feel we are a good fit.
              </li>
              <li>Assessment and discussion / planning.</li>
              <li>
                Therapy, if appropriate. Please note therapy sessions are
                delivered in blocks (10 weeks), to re-evaluate progress and give
                your child a much needed break.
              </li>
            </ol>
            <p>We suggest placing your child on multiple waitlists.</p>
            <br></br>
            <h3 style={{ fontSize: "1.5rem" }}>FEES AND POLICIES</h3>
            <ol>
              <li>Fees</li>
              <p>Please contact us for our fees.</p>
              <li>Rebates</li>
              <p>
                <ol>
                  <li>
                    Chronic Disease Management Plan: You can ask your child’s GP
                    to consider a referral for a Medicare-funded Chronic Disease
                    Management (CDM) plan. This would subsidise up to 5 allied
                    health services per calendar year. More information can be
                    found{" "}
                    <a href="https://www1.health.gov.au/internet/main/publishing.nsf/Content/mbsprimarycare-chronicdisease-pdf-infosheet">
                      here
                    </a>
                  </li>
                  <li>
                    Private Health Insurance: Speech pathology services may be
                    eligible for you to claim through your private health
                    insurance. The extent of your cover depends on the type of
                    policy and extras you select. There are various limits that
                    may apply, for example a limit per service, per year, or
                    lifetime limits. Please check with your private health
                    insurer for more details.
                  </li>
                  <li>
                    NDIS: The National Disability Insurance Scheme may be
                    available for those with developmental delays or
                    disabilities. Depending on your situation, the NDIS can
                    cover the cost of many allied health services. Khuluma
                    Speech Pathology is able to provide services to self-managed
                    or plan-managed NDIS clients.
                  </li>
                </ol>
              </p>
              <li>Cancellation Policy</li>
              <p>
                48-hour cancellation policy applies. Any sessions cancellation
                within 48 hours will incur full payment.
              </p>
              <li>
                Privacy Policy (
                <a
                  style={{ color: "blue" }}
                  href="/Privacy_Policy.pdf"
                  target="_blank"
                >
                  click me
                </a>
                )
              </li>
            </ol>
          </div>
        }
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
