import React,{useState} from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Avatar,
  useDisclosure,
  Link
} from '@chakra-ui/react'
const SideBar = () => {
    const {isOpen,onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')

    return (
       <>
        <Button onClick={onOpen}>
        </Button>
        <Drawer placement={placement} isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay/>
            <DrawerCloseButton/>
            <DrawerContent>
                <DrawerBody>
                    <Box m='auto'>
                    <Avatar size='lg' src='../assets/profile.jpeg' name='Georgina Adzorgenu' />
                    </Box>
                    <Link href='/login' ml={5} pt='50px'>Logout</Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
       </>
    )
}

export default SideBar
