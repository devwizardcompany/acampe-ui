import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$8',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',

  a: {
    textDecoration: 'none',
    color: '$secondaryDark',
    position: 'relative',

    '&:hover': {
      textDecoration: 'none',
      color: '$textDefault',
    },

    '&:not(:last-child):after': {
      content:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cg opacity='0.3'%3E%3Cpath d='M9 18L15 12L9 6' stroke='%23373737' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E\")",
      position: 'absolute',
      width: '$6',
      height: '$6',
      right: '-$7',
      top: '2px',
      margin: 0,
      padding: 0,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      fontSize: '$2xl',
      fontFamily: '$default',
      fontWeight: '$medium',
    },

    '&:last-child': {
      all: 'unset',
      fontWeight: '$semiBold',
      color: '$primaryDark',
      cursor: 'text',
    },
  },
})
