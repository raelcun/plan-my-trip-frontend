import {
  Box,
  Drawer as MDrawer,
  List,
  ListItemText,
  Toolbar,
  Icon,
  ListItemButton,
  Collapse,
  ListItemIcon,
} from '@mui/material'
import { useState } from 'react'

const DrawerItemButton: React.FC<{
  text?: string
  leadingIcon?: string
  trailingIcon?: string
  level?: number
  onClick?: () => void
}> = ({ text, leadingIcon, trailingIcon, level, onClick }) => (
  <ListItemButton onClick={onClick} sx={{ pl: 3 * (level || 1) - 1 }}>
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

export type DrawerItem = 'lodging' | 'flights' | 'activities' | 'todo' | 'packing' | 'cost' | `segment_${string}`

export const Drawer: React.FC<{ onItemClicked?: (item: DrawerItem) => void }> = ({ onItemClicked }) => {
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
        <DrawerGroup name="Storming" icon="psychology" level={1}>
          <DrawerItemButton text="Lodging" leadingIcon="bed" level={2} onClick={() => handleClick('lodging')} />
          <DrawerItemButton text="Flights" leadingIcon="flight" level={2} onClick={() => handleClick('flights')} />
          <DrawerItemButton
            text="Activities"
            leadingIcon="local_activity"
            level={2}
            onClick={() => handleClick('activities')}
          />
        </DrawerGroup>
        <DrawerItemButton text="Todo" leadingIcon="task_alt" onClick={() => handleClick('todo')} />
        <DrawerItemButton text="Packing" leadingIcon="work" onClick={() => handleClick('packing')} />
        <DrawerGroup name="Itinerary" icon="event" level={1}>
          {[1, 2, 3, 4, 5].map((i) => (
            <DrawerItemButton key={i} text={`Mar ${i}`} onClick={() => handleClick(`segment_mar_${i}`)} />
          ))}
        </DrawerGroup>
        <DrawerItemButton text="Cost" leadingIcon="paid" onClick={() => handleClick('cost')} />
      </Box>
    </MDrawer>
  )
}
