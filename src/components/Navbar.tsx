import React from 'react'
import { Button, Stack, Text, Icon, useMediaQuery } from '@chakra-ui/react'
import * as Feather from 'feather-icons/dist/icons.json'
import { FeatherIcon } from '../utils/createIcon'

const WebNavbar = () => {
  return (
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
  )
}

const MobileNavbar = () => {
  return (
    <Button colorScheme="gray" variant="ghost">
      <Text>Services</Text>
    </Button>
  )
}

export const Navbar = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  return isLargerThan1000 ? <WebNavbar /> : <MobileNavbar />
}
