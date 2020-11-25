import React, { useRef} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea
    
  } from "@chakra-ui/react"
import { VscEdit } from 'react-icons/vsc'
import {useDisclosure} from '@chakra-ui/react'

const AddPost =()=> {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const initialRef = useRef()

    return(
        <>
        <Button onClick={onOpen} leftIcon={<VscEdit />} ml={5} mt={4}colorScheme='blue'>Add a post</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Title</FormLabel>
                <Input 
                // ref={initialRef} 
                placeholder="Title" />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Body</FormLabel>
                <Textarea placeholder="Body" />
                </FormControl>
          </ModalBody>

  
            <ModalFooter>
              <Button colorScheme="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue'>Add Post</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AddPost