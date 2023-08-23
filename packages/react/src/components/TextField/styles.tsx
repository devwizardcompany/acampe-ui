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
  color: '$secondaryDarkest',

  '& span': {
    color: '$warning',
    fontWeight: '$bold'
  },

  variants: {
    error: {
      true: {
        color: '$warning',
      }
    }
  }
})

export const Wrapper = styled('div', {
  borderRadius: '$md',
  border: '1px solid $borderInput',
  backgroundColor: '$inputDefault',
  boxSizing: 'border-box',
  padding: '$3 $6',

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

  '&[data-icon="true"]': {
    padding: '$3 $4',
  },

  svg: {
    width: '$5',
    height: '$5',
  },

  variants: {
    error: {
      true: {
        borderColor: '$warning',

        '&:has(input:focus)': {
          borderColor: '$warning',
        }
      }
    }
  }
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

  '&::placeholder': {
    color: '$borderDefault',
  },
})

export const HelperText = styled('span', {
  fontFamily: '$default',
  fontSize: '$xs',
  fontWeight: '$regular',
  color: '$warning',
})
