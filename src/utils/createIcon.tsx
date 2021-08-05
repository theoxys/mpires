import { ComponentWithAs, Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface FeatherIconData extends IconProps {
  icon: string
}

export const FeatherIcon: ComponentWithAs<'svg', FeatherIconData> = ({
  icon,
  h = '24px',
  fill = 'transparent',
  stroke = 'white',
  strokeWidth = '2px',
  ...rest
}) => {
  return (
    <Icon h={h} fill={fill} stroke={stroke} strokeWidth={strokeWidth} {...rest}>
      <svg dangerouslySetInnerHTML={{ __html: icon }} />
    </Icon>
  )
}
