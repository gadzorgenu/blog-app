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
  Link,
  ListItem,
  List

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
                   
                    <List my='20px' textAlign='center'>
                        <ListItem my='20px'>Profile</ListItem>
                        <ListItem my='20px'>My Accounts</ListItem>
                        <ListItem my='20px'>Help</ListItem>
                        <ListItem my='20px'>Docs</ListItem>
                        <ListItem my='20px'>FAQ</ListItem>
                    </List>
                    <Link href='/login' ml={5} pt='50px'>Logout</Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
       </>
    )
}

export default SideBar
