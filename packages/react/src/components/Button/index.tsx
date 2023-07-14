import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  borderRadius: '$sm',
  textAlign: 'center',
  minWidth: 64,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  padding: '0 $6',

  transition: 'background-color 250ms ease-out',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$primaryDark',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$primaryDark',
        color: '$white',
      },
    },

    variant: {
      contained: {
        '&:not(:disabled):hover': {
          backgroundColor: '$primaryLight',
        },

        '&:disabled': {
          backgroundColor: '$buttonDisabled',
        },
      },
      outlined: {
        color: '$primaryDark',
        border: '1px solid $borderDefault',
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          color: '$primaryLight',
        },
      },
      text: {
        color: '$secondaryDark',
        backgroundColor: 'transparent',
        textDecoration: 'underline',

        '&:not(:disabled):hover': {
          color: '$secondaryLight',
        },

        '&:disabled': {
          opacity: '0.7',
        },
      },
    },

    size: {
      small: {
        height: '$7',
        fontSize: '$xs',
      },
      medium: {
        height: '$12',
      },
      large: {
        height: '$16',
        fontSize: '$md',
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'medium',
    variant: 'contained',
    fullWidth: false,
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
