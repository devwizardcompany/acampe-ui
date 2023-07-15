import { TextField, TextFieldProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlass } from 'phosphor-react'

export default {
  title: 'Form/TextField',
  component: TextField,
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
