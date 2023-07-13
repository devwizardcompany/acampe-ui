import { Button, ButtonProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Submit',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
  },
  argTypes: {
    color: {
      options: ['primary'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const HasIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight weight="bold" />
      </>
    ),
  },
}
