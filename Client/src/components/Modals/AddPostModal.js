import React from 'react'
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
    Textarea,
    Grid,
    Box,
    Heading
    
  } from "@chakra-ui/react"
import { VscEdit } from 'react-icons/vsc'
import {useDisclosure} from '@chakra-ui/react'

const AddPost =()=> {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Button onClick={onOpen} leftIcon={<VscEdit />} ml={5} mt={4}colorScheme='blue'>Add a post</Button>

        <Modal isOpen={isOpen} onClose={onClose} size='xl' >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Grid templateColumns='repeat(2,1fr)' gap={6} my={1}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input 
                  // ref={initialRef} 
                  placeholder="Title" />
                  </FormControl>

                  <FormControl>
                  <FormLabel>Author</FormLabel>
                  <Input 
                  placeholder="Author" />
                  </FormControl>
              </Grid>
              <Box mt={4}>
                <Heading fontSize='20px' my={2}>Social</Heading>
                <Grid templateColumns='repeat(2,1fr)' gap={6}>
                  <FormControl>
                    <FormLabel>Github</FormLabel>
                    <Input 
                    // ref={initialRef} 
                    placeholder="Github" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>LinkedIn</FormLabel>
                    <Input 
                    placeholder="LInkedIn" />
                  </FormControl>
                    
                  <FormControl mt={0}>
                    <FormLabel>Website</FormLabel>
                    <Input 
                    placeholder="Website" />
                  </FormControl>
                </Grid>
              </Box>
              
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