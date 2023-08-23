import { TextField, TextFieldProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlass } from 'phosphor-react'

export default {
  title: 'Form/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'name',
  },
  argTypes: {
    label: {
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
} as Meta<TextFieldProps>

export const Default: StoryObj<TextFieldProps> = {}

export const Password: StoryObj<TextFieldProps> = {
  args: {
    password: true,
  },
}

export const HasIcon: StoryObj<TextFieldProps> = {
  args: {
    icon: <MagnifyingGlass />,
    placeholder: 'Search',
  },
}

export const Error: StoryObj<TextFieldProps> = {
  args: {
    label: 'First Name',
    error: 'Field is required'
  },
}

export const Required: StoryObj<TextFieldProps> = {
  args: {
    label: 'Last Name',
    required: true
  },
}
