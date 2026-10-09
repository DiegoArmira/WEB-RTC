import { render, screen } from '@testing-library/react'
import App from './App'
test('renders the Vite scaffold', () => {
  render(<App />)
  expect(screen.getByRole('heading')).toBeInTheDocument()
})
