import { fireEvent, render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should switch pages when clicking on menu items', async () => {
    expect.assertions(2)

    render(<App />)

    expect(screen.getByText(/You're on the lodging page/i)).toBeInTheDocument()

    const drawer = screen.getByTestId('drawer')
    fireEvent.click(within(drawer).getByText(/Storming/i))
    fireEvent.click(within(drawer).getByText(/Flights/i))

    expect(screen.getByText(/You're on the flights page/i)).toBeInTheDocument()
  })
})
