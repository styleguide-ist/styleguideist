import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Card = ({
  children,
  className = '',
  // width = '100%',
  // height = '100%',
  // width = '128px',
  // height = '128px',
  sx = {},
}) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      sx={{
        bg: 'card',
        border: 'border',
        borderColor: 'borderColor',
        borderRadius: 1,
        boxShadow: 'default',

        width: '400px',
        height: 'auto',
        paddingBottom: 12,
        // padding: '24px 16px',

        variant: theme.atoms.card ? 'atoms.card' : null,
        ...sx,
      }}
      className={`${!children && 'w-52 h-52'} ${className}`}
    >
      {children}
    </div>
  )
}
