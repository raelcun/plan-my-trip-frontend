import { Typography } from '@mui/material'
import { FAB } from 'components'

export const Storming = () => {
  return (
    <>
      <Typography paragraph sx={{ height: '200vh' }}>
        You're on the storming page
      </Typography>
      <FAB
        onFlightsClicked={() => console.log('add flight clicked')}
        onLodgingClicked={() => console.log('add lodging clicked')}
      />
    </>
  )
}
