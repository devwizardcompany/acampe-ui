import { TextField, TextFieldProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {},
  argTypes: {},
} as Meta<TextFieldProps>

export const Default: StoryObj<TextFieldProps> = {}

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    disabled: true,
  },
}

export const Password: StoryObj<TextFieldProps> = {
  args: {
    password: true,
  },
}
