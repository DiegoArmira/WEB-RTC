const { spawnSync } = require('node:child_process')
const { join } = require('node:path')

const vitestEntry = join(__dirname, '..', 'node_modules', 'vitest', 'vitest.mjs')
const result = spawnSync(process.execPath, [vitestEntry, 'run', ...process.argv.slice(2)], {
  env: { ...process.env, NODE_ENV: 'test' },
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
