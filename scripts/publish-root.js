import { cpSync, existsSync, lstatSync, readdirSync, rmSync } from 'fs'
import { resolve } from 'path'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')

const generatedEntries = [
  'assets',
  'index.html',
  'CNAME',
  '.nojekyll',
  'quest.html',
  'lesson1.html',
  'lesson2.html',
  'lesson3.html',
  'lesson4.html',
  'lesson5.html',
  'lesson6.html',
  'lesson18.html',
  'privacy.html',
  'logo.png',
  'mascot.png',
  'mascot.webp',
  'icons.svg',
  'favicon.svg',
  'demo.html',
  'apply',
  'audience-intelligence',
  'reports',
]

for (const entry of generatedEntries) {
  const target = resolve(root, entry)
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true })
  }
}

for (const entry of readdirSync(dist, { withFileTypes: true })) {
  const src = resolve(dist, entry.name)
  const dst = resolve(root, entry.name)
  cpSync(src, dst, { recursive: true })
}

console.log('Published dist to repo root for GitHub Pages legacy mode')
