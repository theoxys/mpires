import React from 'react'

interface LogoData {
  size?: string
}

export const Logo = ({ size = '40px' }: LogoData) => {
  return (
    <img
      src="assets/logo.svg"
      style={{
        display: 'inline-block',
        height: size,
        objectFit: 'contain'
      }}
    />
  )
}
