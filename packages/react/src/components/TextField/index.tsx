import { Eye, EyeClosed } from '@phosphor-icons/react'
import { ComponentProps, useState } from 'react'
import { Button, Input, Wrapper } from './styles'

export interface TextFieldProps extends ComponentProps<typeof Input> {
  password: boolean
}

export function TextField({ password, ...props }: TextFieldProps) {
  const [hidden, setHidden] = useState<boolean>(true)

  return (
    <Wrapper>
      <Input type={password && hidden ? 'password' : 'text'} {...props} />
      {password && (
        <Button type="button" onClick={() => setHidden((state) => !state)}>
          {hidden ? <Eye /> : <EyeClosed />}
        </Button>
      )}
    </Wrapper>
  )
}
