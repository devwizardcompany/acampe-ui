import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Typography = styled('p', {
  fontFamily: '$default',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },

    color: {
      white: {
        color: '$white',
      },
      black: {
        color: '$black',
      },
      primaryDark: {
        color: '$primaryDark',
      },
      primaryLight: {
        color: '$primaryLight',
      },
      secondaryDarkest: {
        color: '$secondaryDarkest',
      },
      secondaryDark: {
        color: '$secondaryDark',
      },
      secondaryLight: {
        color: '$secondaryLight',
      },
      warning: {
        color: '$warning',
      },
      success: {
        color: '$success',
      },
      background: {
        color: '$background',
      },
      buttonDisabled: {
        color: '$buttonDisabled',
      },
      borderDefault: {
        color: '$borderDefault',
      },
      borderInput: {
        color: '$borderInput',
      },
      inputDefault: {
        color: '$inputDefault',
      },
      textDefault: {
        color: '$textDefault',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export interface TypographyProps extends ComponentProps<typeof Typography> {
  as?: ElementType
}

Typography.displayName = 'Typography'
