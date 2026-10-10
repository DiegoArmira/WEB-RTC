// Run with the existing local Vite server on 127.0.0.1:4173.
// Uses the installed Playwright; no image transformations or page modifications.
import { chromium, devices } from '@playwright/test'
import { fileURLToPath } from 'node:url'

const browser = await chromium.launch()
try {
  for (const mobile of [false, true]) {
    const context = await browser.newContext(mobile
      ? { ...devices['Pixel 5'], viewport: { width: 393, height: 851 }, deviceScaleFactor: 1, reducedMotion: 'reduce' }
      : { viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, reducedMotion: 'reduce' })
    const page = await context.newPage()
    await page.goto('http://127.0.0.1:4173')
    for (const img of await page.locator('img').all()) {
      await img.scrollIntoViewIfNeeded()
      await img.evaluate((element) => element.decode())
    }
    await page.evaluate(() => window.scrollTo(0, 0))
    async function capture(id, first, last) {
      const clip = await page.evaluate(({ first, last }) => {
        const top = document.querySelector(first).getBoundingClientRect().top + window.scrollY
        const bottom = document.querySelector(last).getBoundingClientRect().bottom + window.scrollY
        return { x: 0, y: top, width: window.innerWidth, height: bottom - top }
      }, { first, last })
      await page.screenshot({ path: fileURLToPath(new URL(`./${id}.png`, import.meta.url)), fullPage: true, clip })
      console.log(`${id}: ${clip.width} × ${clip.height}px, ${first} → ${last}`)
    }
    await capture(mobile ? 'D-03' : 'D-01', '#presentacion', '#servicios')
    await capture(mobile ? 'capacidades-mobile' : 'capacidades-desktop', '#capacidades', '#capacidades')
    if (mobile) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Tab')
      if (await page.locator('a[href^="mailto:"]').evaluate((el) => document.activeElement !== el)) {
        throw new Error('Contact keyboard journey did not focus email')
      }
    }
    await capture(mobile ? 'D-04' : 'D-02', mobile ? '#evidencia' : '#experiencia', mobile ? '#contacto' : '#evidencia')
    await context.close()
  }
} finally {
  await browser.close()
}
