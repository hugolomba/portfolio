"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { useState } from "react";

export default function ProjectModal() {
  //   const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log("Modal open state:", isOpen);

  return (
    <>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full"
        onClick={onOpen}
      >
        Open Project Modal
      </button>

      <Modal isOpen={isOpen} onClose={onOpenChange}>
        <ModalContent>
          <ModalHeader>Project Title</ModalHeader>
          <ModalBody>
            <p className="text-white">
              Detailed information about the project, including features,
              technologies used, challenges faced, and solutions implemented.
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
              onClick={onOpenChange}
            >
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
