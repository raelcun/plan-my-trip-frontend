import { Box, Toolbar, Typography } from '@mui/material'
import { AppBar, Drawer, DrawerItem } from 'components'
import { Storming } from 'containers'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const Page: React.FC<{ name: string }> = ({ name }) => (
  <Typography paragraph sx={{ height: '200vh' }}>
    You're on the {name} page
  </Typography>
)

const mapPathToDrawerItem = (path: string): DrawerItem | undefined =>
  ((
    {
      '/': 'storming',
      '/todo': 'todo',
      '/packing': 'packing',
      '/itinerary': 'itinerary',
      '/cost': 'cost',
    } as { [key: string]: DrawerItem }
  )[path])

export const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar onShareClicked={() => console.log('share clicked')} />
        <Drawer selectedItem={mapPathToDrawerItem(location.pathname)} onItemClicked={(item) => navigate(item)} />
        <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Storming />} />
            <Route path="/todo" element={<Page name="todo" />} />
            <Route path="/packing" element={<Page name="packing" />} />
            <Route path="/itinerary" element={<Page name="itinerary" />} />
            <Route path="/cost" element={<Page name="cost" />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}
