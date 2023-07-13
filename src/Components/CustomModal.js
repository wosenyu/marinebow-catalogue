import { useState } from "react";
import { Box, Flex, SimpleGrid, Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

function CustomModal({ isOpen, onClose, title, content }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{content}</ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CustomModal;