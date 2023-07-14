import { Check } from '@phosphor-icons/react'
import { ComponentProps } from '@stitches/react'
import { CheckboxIndicator, CheckboxRoot, Container, Label } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {
  label: string
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <Container>
      <CheckboxRoot {...props} id={props.name}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxRoot>

      <Label htmlFor={props.name}>{label}</Label>
    </Container>
  )
}
