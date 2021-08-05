import { Flex } from '@chakra-ui/react'
import React from 'react'

export const Background: React.FC = (props) => {
  return (
    <Flex
      align="flex-start"
      justify="center"
      w="100vw"
      h="100vh"
      bg="linear-gradient(to right bottom, #10191a, #132023, #17272d, #1b2e37, #213542, #213744, #223847, #223a49, #1b3743, #16343d, #123036, #0f2d30);"
    >
      {props.children}
    </Flex>
  )
}
