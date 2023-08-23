import { Eye, EyeClosed } from 'phosphor-react'
import {
  ComponentProps,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import { Button, Container, HelperText, Input, Text, Wrapper } from './styles'

export interface TextFieldProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
  label?: string
  password?: boolean
  error?: string
  required?: boolean
}

export const TextField = forwardRef<ElementRef<typeof Input>, TextFieldProps>(
  ({ icon, label, password, error, required, ...props }: TextFieldProps, ref) => {
    const [hidden, setHidden] = useState<boolean>(true)

    return (
      <Container>
        {label && <Text htmlFor={props.name} error={!!error}>{label} {required && <span>*</span>}</Text>}

        <Wrapper data-icon={!!icon} error={!!error}>
          {icon && icon}

          <Input
            ref={ref}
            type={password && hidden ? 'password' : 'text'}
            {...props}
            id={props.name}
          />

          {password && (
            <Button type="button" onClick={() => setHidden((state) => !state)}>
              {hidden ? <Eye /> : <EyeClosed />}
            </Button>
          )}
        </Wrapper>

        {error && <HelperText>{error}</HelperText>}
      </Container>
    )
  },
)

TextField.displayName = 'TextField'
