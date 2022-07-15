import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function TitleBox({ children, marginBottom, ...props }) {
  const TBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: '1em',
    marginBottom: marginBottom ? '1em' : '',
  }))

  return <TBox {...props}>{children}</TBox>
}
