import AxeBuilder from '@axe-core/playwright'
import { test, expect } from '@playwright/test'

test('@a11y axe is available for future specs', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toBeInstanceOf(Array)
})
