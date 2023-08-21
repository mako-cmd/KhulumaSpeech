import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  BoxProps,
  FlexProps,
  Input,
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiInfo,
  FiPhone,
} from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useRef, createContext, useContext } from "react";
import { LayoutContext } from "../layouts/HomeLayout";
import { Link } from "react-router-dom";

function ChakraSideBar(data: { isOpen: boolean; onClose: () => void | null }) {
  const btnRef = useRef();
  const props = useContext(LayoutContext);
  const contactModalOpenCallback = props?.contactModalUseDisclosure.onOpen;
  const workWithMeModalOpenCallback = props?.howIWorkModalUseDisclosure.onOpen;

  const handleModalOpen = (callback: (() => void) | undefined) => {
    data.onClose();
    if (callback !== undefined) {
      callback();
    }
  };

  interface LinkItemProps {
    name: string;
    icon: IconType;
    href: null | string;
    onClick?: () => void;
  }
  const LinkItems: Array<LinkItemProps> = [
    {
      name: "Home",
      icon: FiHome,
      href: "/",
      onClick: () => handleModalOpen(undefined),
    },
    {
      name: "About",
      icon: FiInfo,
      href: "/about",
      onClick: () => handleModalOpen(undefined),
    },
    {
      name: "Contact",
      icon: FiPhone,
      href: null,
      onClick: () => handleModalOpen(contactModalOpenCallback),
    },
    {
      name: "How I Work",
      icon: MdOutlineConnectWithoutContact,
      href: "/How-I-Work",
      onClick: () => handleModalOpen(undefined),
    },
  ];
  return (
    <>
      <Drawer
        isOpen={data.isOpen}
        placement="right"
        onClose={data.onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="#153a46"
          color="white"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <i>Khuluma Speech</i>
          </DrawerHeader>

          <DrawerBody>
            {LinkItems.map((link) => (
              <NavItem
                key={link.name}
                icon={link.icon}
                href={link.href}
                onClick={link.onClick}
              >
                {link.name}
              </NavItem>
            ))}
          </DrawerBody>

          <DrawerFooter borderTop="1px solid lightgrey">
            <span>
              Khuluma Speech Pathology
              {/* <PiCopyrightLight /> */}
            </span>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  href: null | string;
  children: ReactText;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Link to={href ? href : ""}>
      <Box
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

export default ChakraSideBar;
