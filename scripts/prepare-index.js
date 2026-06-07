import { copyFileSync } from 'fs'
import { resolve } from 'path'

const root = resolve(import.meta.dirname, '..')
copyFileSync(resolve(root, 'index.template.html'), resolve(root, 'index.html'))
console.log('Restored index.html from index.template.html')
