import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar,
    Text,
    Box,
    Flex
  } from "@chakra-ui/react"
  import { ChevronDownIcon } from "@chakra-ui/icons";

const MenuOptions = () => {
    return (
        <Menu>
            <MenuButton as='button' ml={2} variant="outline" border='none'  >
                <Flex>
                    <Avatar size='sm' src='../assets/profile.jpeg' name='Georgina Adzorgenu' ml={4} />
                    <Box pt={1} px={1}>
                        <ChevronDownIcon />
                    </Box>
                </Flex>
            </MenuButton>
            <MenuList  color='black'>
                <MenuGroup>
                    <Text p={2}fontSize='15px'>Signed in as <Text as='span' fontWeight='bold'>gynaSweetie</Text></Text>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Settings </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default MenuOptions
