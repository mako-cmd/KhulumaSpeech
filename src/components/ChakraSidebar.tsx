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
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useRef, createContext } from "react";

function ChakraSideBar(data: {
  isOpen: boolean;
  onOpen: () => void | null;
  onClose: () => void | null;
}) {
  const btnRef = useRef();
  interface LinkItemProps {
    name: string;
    icon: IconType;
    href: null | string;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, href: "/" },
    { name: "About", icon: FiInfo, href: "/about" },
    { name: "Contact", icon: FiPhone, href: null },
  ];
  return (
    <>
      <Drawer
        isOpen={data.isOpen}
        placement="right"
        onClose={data.onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="#153a46"
          color="white"
        >
          <DrawerCloseButton />
          <DrawerHeader>LOGO</DrawerHeader>

          <DrawerBody>
            {LinkItems.map((link) => (
              <NavItem
                key={link.name}
                icon={link.icon}
                href={link.href}
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
  children: ReactText;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={href ?? undefined}
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
  );
};

export default ChakraSideBar;
