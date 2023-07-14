import { Check } from '@phosphor-icons/react'
import { ComponentProps } from '@stitches/react'
import { ElementRef, forwardRef } from 'react'
import { CheckboxIndicator, CheckboxRoot, Container, Label } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {
  label: string
}

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRoot>,
  CheckboxProps
>(({ label, ...props }: CheckboxProps, ref) => {
  return (
    <Container>
      <CheckboxRoot id={props.name} ref={ref} {...props}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxRoot>

      <Label htmlFor={props.name}>{label}</Label>
    </Container>
  )
})

Checkbox.displayName = 'Checkbox'
