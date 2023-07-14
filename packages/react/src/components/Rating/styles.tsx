import { styled } from '../../styles'

export const Wrapper = styled('div', {
  boxSizing: 'border-box',
  display: 'inline-block',
  alignItems: 'center',

  input: {
    display: 'none',
  },

  label: {
    float: 'right',
    cursor: 'pointer',
    color: '$buttonDisabled',
  },

  'label:before': {
    content: '\u2605',
    fontSize: '$2xl',
  },

  'input:hover ~ label': {
    color: '$primaryDark',
  },

  'input:checked ~ label': {
    color: '$primaryDark',
  },
})
