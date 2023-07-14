import { Card, CardProps, Typography } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Card',
  component: Card,
  args: {
    children: <Typography>Hello Camper!</Typography>,
    color: 'primary',
    size: 'medium',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    bordered: {
      control: {
        type: 'boolean',
      },
    },
    shadow: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}
