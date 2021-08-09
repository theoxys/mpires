import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { FeatherIcon } from '../utils/createIcon'
import * as Feather from 'feather-icons/dist/icons.json'

interface NavbarButtonData {
  icon?: string
  label: string
}

export const NavbarButton = ({ icon, label }: NavbarButtonData) => {
  return (
    <Button
      colorScheme="gray"
      variant="ghost"
      w="100%"
      justifyContent="flex-start"
    >
      <FeatherIcon icon={icon} mr="1rem" />
      <Text>{label}</Text>
    </Button>
  )
}
