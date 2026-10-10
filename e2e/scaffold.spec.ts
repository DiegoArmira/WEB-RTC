import { expect, test } from '@playwright/test'

test('institutional journey exposes essential content and contact on mobile and desktop', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Evidencia para decisiones que fortalecen el desarrollo.')
  await expect(page.locator('#presentacion, main > section')).toHaveCount(6)
  const contactShortcut = page.getByRole('link', { name: /ir a contacto/i })
  await expect(contactShortcut).toBeVisible()
  await contactShortcut.click()
  await expect(page.locator('#contacto')).toBeInViewport()
  await expect(page.getByRole('link', { name: /consultoriartc@gmail.com/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /3905 9217/i })).toBeVisible()
})

test('keyboard users receive focus on the contact shortcut', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: /ir a contacto/i })).toBeFocused()
})
