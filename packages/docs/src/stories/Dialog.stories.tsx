import { Dialog, DialogProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Dialog',
  component: Dialog,
  args: {
    title: 'Dialog Title',
    labelPrimaryButton: 'Save',
    labelSecondaryButton: 'Cancel',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit porro! Iusto eius ex recusandae odit libero enim, dolore nam voluptatibus rem at modi? Totam hic tempore amet quibusdam ipsa.',
    isIconClosed: true,
  },
  argTypes: {
    secondaryButton: {
      control: {
        type: 'boolean',
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<DialogProps>

export const Default: StoryObj<DialogProps> = {
  args: {
    title: 'Dialog Title',
    labelPrimaryButton: 'Save',
    labelSecondaryButton: 'Cancel',
  },
}
