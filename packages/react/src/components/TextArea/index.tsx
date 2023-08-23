import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, HelperText, Input, Text } from './styles'

export interface TextAreaProps extends Omit<ComponentProps<typeof Input>, 'error'> {
  label?: string
  required?: boolean
  error?: string
}

export const TextArea = forwardRef<ElementRef<typeof Input>, TextAreaProps>(
  ({ label, error, required, ...props }: TextAreaProps, ref) => {
    return (
      <Container>
        {label && <Text htmlFor={props.name} error={!!error}>{label} {required && <span>*</span>}</Text>}

        <Input ref={ref} {...props} id={props.name} error={!!error} />

        {error && <HelperText>{error}</HelperText>}
      </Container>
    )
  },
)

TextArea.displayName = 'TextArea'
