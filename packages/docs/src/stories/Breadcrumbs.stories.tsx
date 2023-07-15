import { Breadcrumbs, BreadcrumbsProps } from '@acampe-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    children: (
      <>
        <a href="#">Home</a>
        <a href="#">Navigation</a>
        <a href="#">Breadcrumbs</a>
      </>
    ),
  },
  argTypes: {},
} as Meta<BreadcrumbsProps>

export const Default: StoryObj<BreadcrumbsProps> = {}
