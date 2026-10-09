import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'
test('renders the Vite scaffold', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})
