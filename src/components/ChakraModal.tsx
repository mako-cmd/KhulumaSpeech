import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IData {
  title: ReactNode;
  content: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
  stateVars: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
  };
}

export default function ChakraModal({
  title,
  content,
  stateVars,
  size = undefined,
}: IData) {
  return (
    <>
      <Modal
        isOpen={stateVars.isOpen}
        onClose={stateVars.onClose}
        size={size}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
