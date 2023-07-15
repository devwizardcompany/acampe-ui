import { styled } from '../../styles'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const Text = styled('label', {
  fontWeight: '$medium',
  fontFamily: '$default',
  fontSize: '$xs',
})

export const Input = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$xs',
  fontWeight: '$regular',
  color: '$secondaryDarkest',
  width: '100%',
  height: '$20',
  resize: 'none',

  borderRadius: '$xs',
  border: '1px solid $borderInput',
  background: '$white',
  boxSizing: 'border-box',
  padding: '$3',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  '&:focus': {
    borderColor: '$primaryDark',
    outline: 'none',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$borderDefault',
  },
})
