import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Card = styled('div', {
  textAlign: 'center',
  boxSizing: 'border-box',
  borderRadius: '$xs',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$4',

  variants: {
    color: {
      primary: {
        backgroundColor: '$white',
        color: '$secondaryDarkest',
      },
      secondary: {
        backgroundColor: '$primaryLight10',
        color: '$secondaryDarkest',
      },
    },

    bordered: {
      true: {
        border: '1px solid $borderDefault',
      },
    },

    shadow: {
      true: {
        boxShadow: '0px 4px 4px 0px rgba(174, 174, 174, 0.25)',
      },
    },

    size: {
      small: {
        padding: '$2 $4',
      },
      medium: {
        padding: '$6 $4',
      },
      large: {
        padding: '$8 $12',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
})

export interface CardProps extends ComponentProps<typeof Card> {
  as?: ElementType
}

Card.displayName = 'Card'
