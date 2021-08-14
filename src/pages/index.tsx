import {
  Button,
  DarkMode,
  Flex,
  Heading,
  LightMode,
  Stack,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Background } from '../components/Background'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <Background>
      <Stack spacing="4" align="center" justify="center" w="1440px">
        <DarkMode>
          <Flex
            w="100%"
            h="60px"
            pt="24px"
            align="center"
            px="6"
            flexDir="column"
          >
            <Navbar />
            <Stack
              flexDir="row"
              mt="6rem"
              w="90%"
              justify="space-between"
              align="center"
            >
              <Stack flexDir="column" spacing="2rem" w="550px">
                <Heading fontSize="5xl">
                  Construindo experiências digitais incriveis
                </Heading>
                <Text fontSize="18px" fontWeight="300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo ultrices dictumst amet non, augue. Congue malesuada
                  amet, vivamus tristique porttitor interdum tempus. Vel egestas
                  augue varius sit lectus condimentum erat ultrices.
                </Text>
                <LightMode>
                  <Button size="lg" colorScheme="orange" w="250px">
                    Meus Conteúdos
                  </Button>
                </LightMode>
              </Stack>
              <img
                src="assets/phoneSketch.svg"
                style={{
                  width: '1000px'
                }}
              />
            </Stack>
          </Flex>
        </DarkMode>
      </Stack>
    </Background>
  )
}
