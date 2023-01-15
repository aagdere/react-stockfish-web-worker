import { TypographyProps } from '@mui/system'

export const reactDark = { 
  bgcolor: '#282c34',
  fontSize: '100%'
}

export const listStyle = {
  width: '100%',
  position: 'relative',
  overflow: 'auto',
  minHeight: 300,
  maxHeight: 300,
  '& ul': { padding: 0 },
  padding: 0,
  bgcolor: 'rgb(0,0,0,0.1)'
}

export const gridStyle = {
  paddingLeft: '1%',
  paddingRight: '1%'
}

export const inputStyle = {
  bgcolor: 'white',
  color: 'black',
  width: '50%'
}

export const listItemStyle = {
  fontSize: '50%'
}

export const progressBarStyle = {
  backgroundColor: 'white',
  width: '50%'
}

export const typographyProps: TypographyProps = { 
  //@ts-ignore
  variant: 'subtitle2', 
  sx: {
      whiteSpace: 'nowrap',
      overflow: 'visible',
      textOverflow: 'ellipsis',
    },
  align: 'left'
}