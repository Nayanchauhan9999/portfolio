import React from "react";
import {
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeading,
  StyledSuccessAlertModal,
} from "./SuccessAlertModal.styles";
import { SuccessAlertModalProps } from "./SuccessAlertModal.types";
import Heading from "@/components/__Shared/Heading";
import Button from "@/components/Atoms/Button";
import { IoClose } from "react-icons/io5";

const SuccessAlertModal = ({
  open,
  title,
  description,
  onClose,
}: SuccessAlertModalProps) => {
  return (
    open && (
      <StyledSuccessAlertModal>
        <StyledModalHeading>
          <Heading size="medium" variant="h2" color="primary">
            {title}
          </Heading>
          <IoClose size={25} onClick={onClose} />
        </StyledModalHeading>
        <StyledModalContent>
          {description}
        </StyledModalContent>
        <StyledModalFooter>
          <Button align="center" onClick={onClose}>
            Close
          </Button>
        </StyledModalFooter>
      </StyledSuccessAlertModal>
    )
  );
};

export default SuccessAlertModal;
