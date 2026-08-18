const result = await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  minify: true,
  target: 'node',
})

if (!result.success) {
  console.error('Build failed:', result.logs)
  process.exit(1)
}
