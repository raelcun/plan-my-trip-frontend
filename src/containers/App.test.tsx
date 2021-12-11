import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

describe('App', () => {
  it('should switch pages when clicking on menu items', async () => {
    expect.assertions(2)

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByText(/You're on the storming page/i)).toBeInTheDocument()

    const drawer = screen.getByTestId('drawer')
    fireEvent.click(within(drawer).getByText(/Todo/i))

    expect(screen.getByText(/You're on the todo page/i)).toBeInTheDocument()
  })
})
