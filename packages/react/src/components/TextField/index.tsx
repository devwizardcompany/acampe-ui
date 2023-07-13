import { Eye, EyeClosed } from '@phosphor-icons/react'
import { ComponentProps, ReactNode, useState } from 'react'
import { Button, Container, Input, Text, Wrapper } from './styles'

export interface TextFieldProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
  label?: string
  password: boolean
}

export function TextField({ icon, label, password, ...props }: TextFieldProps) {
  const [hidden, setHidden] = useState<boolean>(true)

  return (
    <Container>
      {label && <Text htmlFor={props.name}>{label}</Text>}

      <Wrapper data-icon="true">
        {icon && icon}

        <Input
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
    </Container>
  )
}
