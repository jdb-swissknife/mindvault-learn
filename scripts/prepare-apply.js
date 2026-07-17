import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const root = resolve(import.meta.dirname, '..')
const templatePath = resolve(root, 'templates/apply/index.template.html')
const outputPath = resolve(root, 'public/apply/index.html')

function loadEnvFile(path) {
  if (!existsSync(path)) return {}
  return Object.fromEntries(
    readFileSync(path, 'utf-8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#') && line.includes('='))
      .map((line) => {
        const index = line.indexOf('=')
        const key = line.slice(0, index)
        const value = line.slice(index + 1).replace(/^['\"]|['\"]$/g, '')
        return [key, value]
      }),
  )
}

const fileEnv = {
  ...loadEnvFile(resolve(root, '.env')),
  ...loadEnvFile(resolve(root, '.env.local')),
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || fileEnv.VITE_SUPABASE_URL || ''
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || fileEnv.VITE_SUPABASE_ANON_KEY || ''

let html = readFileSync(templatePath, 'utf-8')
html = html
  .replaceAll('__SUPABASE_URL__', supabaseUrl)
  .replaceAll('__SUPABASE_ANON_KEY__', supabaseAnonKey)

mkdirSync(resolve(root, 'public/apply'), { recursive: true })
writeFileSync(outputPath, html)
console.log(`Prepared apply page${supabaseUrl && supabaseAnonKey ? ' with lead capture enabled' : ' without Supabase env vars'}`)
