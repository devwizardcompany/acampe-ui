import { Rating, RatingProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    numberStars: 5,
  },
  argTypes: {},
} as Meta<RatingProps>

export const Default: StoryObj<RatingProps> = {}
