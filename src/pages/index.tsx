import {
  Button,
  DarkMode,
  Flex,
  Heading,
  Icon,
  LightMode,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import * as Feather from 'feather-icons'

import React, { useEffect } from 'react'
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'

export default function Home() {
  useEffect(() => {
    Feather.replace()
  }, [])
  return (
    <Background>
      <script src="https://unpkg.com/feather-icons"></script>
      <Stack spacing="4" align="center" justify="center" w="1440px">
        <DarkMode>
          <Flex w="100%" h="60px" pt="24px" align="flex-start" px="6">
            <Navbar />
          </Flex>
        </DarkMode>
      </Stack>
    </Background>
  )
}
