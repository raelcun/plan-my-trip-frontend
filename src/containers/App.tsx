import { Box, Toolbar, Typography } from '@mui/material'
import { AppBar, FAB, Drawer, DrawerItem } from 'components'
import { useState } from 'react'

export const App = () => {
  const [page, setPage] = useState<DrawerItem>('lodging')

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar onShareClicked={() => console.log('share clicked')} />
        <Drawer onItemClicked={(item) => setPage(item)} />
        <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph sx={{ height: '200vh' }}>
            You're on the {page} page
          </Typography>
        </Box>
      </Box>
      {(page === 'lodging' || page === 'flights' || page === 'activities') && (
        <FAB
          onFlightsClicked={() => console.log('add flight clicked')}
          onLodgingClicked={() => console.log('add lodging clicked')}
        />
      )}
    </>
  )
}
