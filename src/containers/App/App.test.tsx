import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { happyPath, registerJestServer } from '../../mocks';

describe('App', () => {
  const server = registerJestServer()

  it('should render result of api call', async () => {
    expect.assertions(1)

    server.use(...happyPath)

    render(<App />);
    const linkElement = await screen.findByText(/test response/i);
    expect(linkElement).toBeInTheDocument();
  })
})