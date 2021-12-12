import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Icon,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

const RentalCarSection: React.FC<{
  details: {
    name: string
    pickupTime?: number
    pickupLocation?: string
    dropoffTime?: number
    dropoffLocation?: string
    confirmationNumber?: string
    notes?: string
  }
}> = ({ details }) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: '#EDF4FC', '& > .MuiTextField-root': { m: 1 } }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography gutterBottom={false} variant="h6" sx={{ mr: 1 }}>
        {details.name}
      </Typography>
      <IconButton size="small">
        <Icon>delete</Icon>
      </IconButton>
    </Box>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Pickup Time"
        value={details.pickupTime}
        onChange={() => {}}
      />
    </LocalizationProvider>
    <TextField label="Pickup Location" defaultValue={details.pickupLocation} />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Dropoff Time"
        value={details.dropoffTime}
        onChange={() => {}}
      />
    </LocalizationProvider>
    <TextField label="Dropoff Location" defaultValue={details.dropoffLocation} />
    <TextField label="Confirmation Number" defaultValue={details.confirmationNumber} />
    <TextField label="Notes" multiline />
  </Paper>
)

const Section: React.FC<{ heading: string }> = ({ heading, children }) => (
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
      <Typography variant="h5">{heading}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
)

export const Storming = () => {
  const rentalCarDetails = [
    {
      name: 'Rolling in Style',
      pickupTime: new Date().getTime(),
      pickupLocation: '8832 Commerce Loop Dr, Columbus, OH 43240',
      dropoffTime: new Date().getTime(),
      dropoffLocation: '8832 Commerce Loop Dr, Columbus, OH 43240',
      confirmationNumber: 'abc123',
    },
    {
      name: 'Saving Cash',
      pickupTime: new Date().getTime(),
      pickupLocation: '8832 Commerce Loop Dr, Columbus, OH 43240',
      dropoffTime: new Date().getTime(),
      dropoffLocation: '8832 Commerce Loop Dr, Columbus, OH 43240',
      confirmationNumber: 'abc123',
    },
  ]

  return (
    <>
      <img
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        alt="pretty hilton head"
        src="https://live-sonesta-8.pantheonsite.io/sites/default/files/field_featured_images/pano_xl/HHI-SH-ppc1.jpg"
      />
      <Section heading="Lodging">
        <Typography paragraph>TODO</Typography>
      </Section>
      <Section heading="Rental Cars">
        {rentalCarDetails.map((details) => (
          <RentalCarSection details={details} />
        ))}
        <Button startIcon={<Icon>add</Icon>}>Add Rental Car</Button>
      </Section>
    </>
  )
}
