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
  await expect(page.getByRole('link', { name: /ir a contacto/i })).toHaveCSS('outline-style', 'solid')
})

test('v2 preserves every photograph without cropping, reflows, and respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('#presentacion img[src*="rtc-campo-01"]')).toBeVisible()
  const photos = page.locator('img[src*="/photos/"]')
  await expect(photos).toHaveCount(5)
  for (const photo of await photos.all()) {
    await photo.scrollIntoViewIfNeeded()
    await expect(photo).toBeVisible()
    await expect.poll(() => photo.evaluate((img: HTMLImageElement) => {
      const box = img.getBoundingClientRect()
      return img.complete && img.naturalWidth > 0 && Math.abs(box.width / box.height - img.naturalWidth / img.naturalHeight) < 0.01
    })).toBe(true)
    expect(await photo.evaluate((img) => getComputedStyle(img).objectFit)).not.toBe('cover')
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto')
})
