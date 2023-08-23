import { TextArea, TextAreaProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'name',
    placeholder: 'Escreva um comentário',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

export const Error: StoryObj<TextAreaProps> = {
  args: {
    label: 'Message',
    error: 'Field is required'
  },
}

export const Required: StoryObj<TextAreaProps> = {
  args: {
    label: 'Message',
    required: true
  },
}
