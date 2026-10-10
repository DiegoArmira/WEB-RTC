import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders the six approved institutional blocks in conceptual order', () => {
  const { container } = render(<App />)
  const sections = Array.from(container.querySelectorAll('#presentacion, main > section'))

  expect(sections.map((section) => section.id)).toEqual([
    'presentacion', 'servicios', 'capacidades', 'experiencia', 'evidencia', 'contacto',
  ])
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Evidencia para decisiones que fortalecen el desarrollo.')
  expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(5)
})

test('uses approved content and keeps each experience logo with its factual case', () => {
  render(<App />)
  expect(screen.getAllByText('Líneas de base')).not.toHaveLength(0)
  expect(screen.getByText('Evaluaciones intermedias')).toBeInTheDocument()
  expect(screen.getByText('Evaluaciones finales')).toBeInTheDocument()
  expect(screen.getAllByText('Procesos de capacitación')).not.toHaveLength(0)
  const cases = Array.from(document.querySelectorAll<HTMLElement>('.case'))
  expect(cases).toHaveLength(5)
  expect(within(cases[0]).getByAltText('Logo de Swisscontact para el caso Paisajes Mayas Sostenibles')).toBeInTheDocument()
  expect(within(cases[1]).getByAltText('Logo de Save the Children para el caso Acción Niñez')).toBeInTheDocument()
  expect(within(cases[2]).getByAltText('Logo de Global Communities para el caso Programa Unidos')).toBeInTheDocument()
  expect(within(cases[3]).getByAltText('Logo de HELVETAS para el caso de gestión de recursos hídricos')).toBeInTheDocument()
  expect(within(cases[4]).getByAltText('Logo de Creative Associates International para el caso de fortalecimiento de competencias')).toBeInTheDocument()
  expect(screen.queryByText(/WhatsApp/i)).not.toBeInTheDocument()
})

test('provides semantic landmarks, contact links, and an internal contact shortcut', () => {
  render(<App />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /ir a contacto/i })).toHaveAttribute('href', '#contacto')
  expect(screen.getByRole('link', { name: /consultoriartc@gmail.com/i })).toHaveAttribute('href', 'mailto:consultoriartc@gmail.com')
  expect(screen.getByRole('link', { name: /3905 9217/i })).toHaveAttribute('href', 'tel:+50239059217')
})
