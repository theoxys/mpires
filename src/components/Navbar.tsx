import React from 'react'
import {
  Button,
  Stack,
  Text,
  Icon,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  useDisclosure,
  Flex
} from '@chakra-ui/react'
import * as Feather from 'feather-icons/dist/icons.json'
import { FeatherIcon } from '../utils/createIcon'
import { Logo } from './Logo'
import { NavbarButton } from './NavbarButton'

const WebNavbar = () => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Logo />
      <Stack
        align="flex-end"
        justify="flex-end"
        w="100%"
        spacing="2"
        direction="row"
      >
        <Button colorScheme="gray" variant="ghost">
          <Text>Services</Text>
        </Button>
        <Button colorScheme="gray" variant="ghost">
          <Text>Projects</Text>
        </Button>
        <Button colorScheme="gray" variant="ghost">
          <Text>Blog</Text>
        </Button>
        <Button colorScheme="gray" variant="outline">
          <Text>Github</Text>
          <FeatherIcon icon={Feather.github} marginLeft="12px" />
        </Button>
        <Button colorScheme="gray" variant="outline">
          <Text>Linkedin</Text>
          <FeatherIcon icon={Feather.linkedin} marginLeft="12px" />
        </Button>
        <Button colorScheme="gray" variant="outline">
          <FeatherIcon icon={Feather.mail} />
        </Button>
      </Stack>
    </Flex>
  )
}

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex w="100%" align="center" justify="space-between">
      <Button
        colorScheme="gray"
        variant="ghost"
        onClick={onOpen}
        ref={btnRef}
        p={0}
      >
        <FeatherIcon icon={Feather.menu} h="28px" w="28px" />
      </Button>
      <Logo size="30px" />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Seja bem vindo!</DrawerHeader>

          <DrawerBody>
            <NavbarButton icon={Feather.briefcase} label="Services" />
            <NavbarButton icon={Feather.command} label="Projects" />
            <NavbarButton icon={Feather['file-text']} label="Blog" />
            <NavbarButton icon={Feather.github} label="Github" />
            <NavbarButton icon={Feather.linkedin} label="Linkedin" />
            <NavbarButton icon={Feather.mail} label="E-mail" />
          </DrawerBody>

          <DrawerFooter>
            <Text>Made with 💙 by Matheus Pires</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export const Navbar = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  return isLargerThan1000 ? <WebNavbar /> : <MobileNavbar />
}
