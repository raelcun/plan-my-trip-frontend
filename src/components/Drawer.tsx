import {
  Box,
  Collapse,
  Divider,
  Drawer as MDrawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { useState } from 'react'

const DrawerItemButton: React.FC<{
  text?: string
  leadingIcon?: string
  trailingIcon?: string
  level?: number
  selected?: boolean
  onClick?: () => void
}> = ({ text, selected, leadingIcon, trailingIcon, level, onClick }) => (
  <ListItemButton selected={selected} onClick={onClick} sx={{ pl: 3 * (level || 1) - 1 }}>
    <ListItemIcon>{leadingIcon && <Icon>{leadingIcon}</Icon>}</ListItemIcon>
    <ListItemText primary={text} />
    {trailingIcon && <Icon>{trailingIcon}</Icon>}
  </ListItemButton>
)

const DrawerGroup: React.FC<{ name: string; icon?: string; isOpen?: boolean; level?: number }> = ({
  level,
  children,
  icon,
  name,
  isOpen,
}) => {
  const [open, setOpen] = useState(isOpen || false)

  return (
    <List>
      <DrawerItemButton
        text={name}
        level={level}
        leadingIcon={icon}
        trailingIcon={open ? 'expand_less' : 'expand_more'}
        onClick={() => setOpen(!open)}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </List>
  )
}

export type DrawerItem = 'storming' | 'todo' | 'packing' | 'cost' | 'itinerary'

export const Drawer: React.FC<{ selectedItem?: DrawerItem; onItemClicked?: (item: DrawerItem) => void }> = ({
  onItemClicked,
  selectedItem,
}) => {
  const handleClick = (item: DrawerItem) => onItemClicked && onItemClicked(item)

  return (
    <MDrawer
      variant="permanent"
      anchor="left"
      data-testid="drawer"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <DrawerItemButton
          selected={selectedItem === 'storming'}
          text="Storming"
          leadingIcon="psychology"
          onClick={() => handleClick('storming')}
        />
        <DrawerItemButton
          selected={selectedItem === 'todo'}
          text="Todo"
          leadingIcon="task_alt"
          onClick={() => handleClick('todo')}
        />
        <DrawerItemButton
          selected={selectedItem === 'packing'}
          text="Packing"
          leadingIcon="work"
          onClick={() => handleClick('packing')}
        />
        <DrawerItemButton
          selected={selectedItem === 'itinerary'}
          text="Itinerary"
          leadingIcon="event"
          onClick={() => handleClick('itinerary')}
        />
        <DrawerItemButton
          selected={selectedItem === 'cost'}
          text="Cost"
          leadingIcon="paid"
          onClick={() => handleClick('cost')}
        />
        <Divider />
        <DrawerGroup name="Test Storming" icon="psychology" level={1}>
          <DrawerItemButton text="Lodging" leadingIcon="bed" level={2} />
          <DrawerItemButton text="Flights" leadingIcon="flight" level={2} />
          <DrawerItemButton text="Activities" leadingIcon="local_activity" level={2} />
        </DrawerGroup>
      </Box>
    </MDrawer>
  )
}
