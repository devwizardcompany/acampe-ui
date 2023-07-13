import { styled } from '../../styles'

export const Wrapper = styled('div', {
  borderRadius: '$md',
  border: '1px solid $borderInput',
  backgroundColor: '$inputDefault',
  boxSizing: 'border-box',
  padding: '$3 $6',
  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$primaryDark',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$xs',
  fontWeight: '$regular',
  color: '$secondaryDarkest',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$borderDefault',
  },
})
