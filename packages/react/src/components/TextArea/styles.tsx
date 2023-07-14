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
  resize: 'none',

  border: '1px solid $borderInput',
  background: '$white',
  boxSizing: 'border-box',
  padding: '$5',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  '&:has(input:focus)': {
    borderColor: '$primaryDark',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$borderDefault',
  },
})
