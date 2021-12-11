import { AppBar as MAppBar, Icon, Button, Toolbar, Typography, ButtonGroup } from '@mui/material'

export type AppBarProps = {
  onShareClicked?: () => void
}

export const AppBar: React.FC<AppBarProps> = ({ onShareClicked }) => (
  <MAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Hilton Head Vacation 🥂
      </Typography>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        startIcon={<Icon>share</Icon>}
        onClick={onShareClicked}
      >
        share
      </Button>
    </Toolbar>
  </MAppBar>
)
