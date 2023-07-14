import { Checkbox, CheckboxProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
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
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
  args: {
    label: 'Accept terms and conditions.',
  },
}
