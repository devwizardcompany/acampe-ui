import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, Input, Text } from './styles'

export interface TextAreaProps extends ComponentProps<typeof Input> {
  label?: string
}

export const TextArea = forwardRef<ElementRef<typeof Input>, TextAreaProps>(
  ({ label, ...props }: TextAreaProps, ref) => {
    return (
      <Container>
        {label && <Text htmlFor={props.name}>{label}</Text>}

        <Input ref={ref} {...props} id={props.name} />
      </Container>
    )
  },
)

TextArea.displayName = 'TextArea'
