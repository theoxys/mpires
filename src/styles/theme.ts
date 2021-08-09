import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    headings: 'Poppins',

    body: 'Poppins'
  },

  styles: {
    global: {
      _focus: {
        boxShadow: 'none !important'
      },
      body: {
        bg: 'gray.900',

        color: 'gray.50'
      }
    }
  }
})
