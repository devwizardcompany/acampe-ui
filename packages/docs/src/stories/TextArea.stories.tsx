import { TextArea, TextAreaProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
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
  },
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}
