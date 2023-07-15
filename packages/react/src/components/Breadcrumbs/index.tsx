import { ComponentProps, ReactNode } from 'react'
import { Container } from './styles'

export interface BreadcrumbsProps extends ComponentProps<typeof Container> {
  children: ReactNode
}

export function Breadcrumbs({ children, ...props }: BreadcrumbsProps) {
  return <Container {...props}>{children}</Container>
}

Breadcrumbs.displayName = 'Breadcrumbs'
