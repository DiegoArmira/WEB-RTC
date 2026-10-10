import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'
import { services } from './content'

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

test('v2 opens with a contextual RTC photograph and preserves complete service cards', () => {
  const { container } = render(<App />)
  expect(container.querySelector('#presentacion img[src*="rtc-campo-01"]')).toBeInTheDocument()
  const cards = container.querySelectorAll('#servicios article')
  expect(cards).toHaveLength(4)
  services.forEach(([title, text], index) => {
    expect(within(cards[index] as HTMLElement).getByRole('heading', { name: title })).toBeInTheDocument()
    expect(within(cards[index] as HTMLElement).getByText(text)).toBeInTheDocument()
    expect(cards[index].querySelector('[aria-hidden="true"]')).toHaveTextContent(`0${index + 1}`)
  })
  expect(container.querySelector('#servicios article:last-child img[src*="rtc-capacitacion-01"]')).toBeInTheDocument()
})

test('v2 removes inferred photo copy and associates photos only with documented contexts', () => {
  const { container } = render(<App />)
  const evidence = container.querySelector('#evidencia') as HTMLElement
  expect(evidence.textContent?.trim()).toBe('Evidencia visual, fotografías y marcas')
  expect(container.querySelector('figcaption')).toBeNull()
  expect(container.querySelector('#capacidades img[src*="rtc-investigacion-01"]')).toBeInTheDocument()
  expect(container.querySelector('#experiencia img[src*="rtc-experiencia-01"]')).toBeInTheDocument()
  expect(container.querySelector('#evidencia img[src*="rtc-territorio-01"]')).toBeInTheDocument()
  // The canonical sources do not identify a photograph as belonging to any named project.
  expect(container.querySelector('.case img[src*="/photos/"]')).toBeNull()
  expect(screen.queryByText(/Cómo trabajamos/i)).not.toBeInTheDocument()
  const allowed = /rtc-consultoria|swisscontact|save-the-children|global-communities|helvetas|creative-associates|rtc-(campo|capacitacion|experiencia|territorio|investigacion)-01/
  container.querySelectorAll('img').forEach((img) => expect(img.getAttribute('src')).toMatch(allowed))
})
