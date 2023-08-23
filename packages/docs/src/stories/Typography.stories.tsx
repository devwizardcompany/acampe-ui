import { Typography, TypographyProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit porro! Iusto eius ex recusandae odit libero enim, dolore nam voluptatibus rem at modi? Totam hic tempore amet quibusdam ipsa.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
    color: {
      options: [
        'white',
        'black',
        'primaryDark',
        'primaryLight',
        'secondaryDarkest',
        'secondaryDark',
        'secondaryLight',
        'warning',
        'success',
        'background',
        'buttonDisabled',
        'borderDefault',
        'borderInput',
        'inputDefault',
        'textDefault',
      ],
      control: {
        type: 'select',
      },
    },
    weight: {
      options: [
        'regular',
        'medium',
        'semiBold',
        'bold',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TypographyProps>

export const Default: StoryObj<TypographyProps> = {}

export const CustomTag: StoryObj<TypographyProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
