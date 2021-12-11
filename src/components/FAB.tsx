import { SpeedDial, SpeedDialAction, SpeedDialIcon, Icon } from '@mui/material'
import { useState } from 'react'

type GenericFabProps = {
  items: {
    tooltip: string
    icon: {
      name: string
      onClick?: () => void
    }
  }[]
}

const GenericFab: React.FC<GenericFabProps> = ({ items }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <SpeedDial
      ariaLabel="add activity section to list"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {items.map(({ tooltip, icon }) => (
        <SpeedDialAction
          key={tooltip}
          icon={<Icon onClick={icon.onClick}>{icon.name}</Icon>}
          tooltipTitle={tooltip}
          tooltipOpen
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  )
}

export const FAB: React.FC<{
  onFlightsClicked?: () => void
  onLodgingClicked?: () => void
}> = ({ onFlightsClicked, onLodgingClicked }) => (
  <GenericFab
    items={[
      { tooltip: 'Lodging', icon: { onClick: onFlightsClicked, name: 'bed' } },
      { tooltip: 'Flights', icon: { onClick: onLodgingClicked, name: 'flight' } },
    ]}
  />
)
