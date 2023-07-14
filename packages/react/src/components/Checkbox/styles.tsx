import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const Label = styled('label', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$secondaryDark',
  cursor: 'pointer',
  userSelect: 'none',
})

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  '&:has(:disabled)': {
    cursor: 'not-allowed',
    opacity: 0.5,

    label: {
      cursor: 'not-allowed',
    },
  },
})

export const CheckboxRoot = styled(Checkbox.Root, {
  width: '$6',
  height: '$6',
  background: '$white',
  border: '2px solid $borderDefault',
  borderRadius: '$sm',
  padding: '0',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '0 2px 10px $primaryDark',
  },

  '&[data-state="checked"]': {
    borderColor: '$primaryDark',
    background: '$primaryDark',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
})
