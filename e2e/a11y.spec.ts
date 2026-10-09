import AxeBuilder from '@axe-core/playwright'
import { test, expect } from '@playwright/test'
test('@a11y scaffold has no automatically detectable violations', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})
