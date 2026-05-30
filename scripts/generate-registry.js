import { readdirSync, writeFileSync, readFileSync, mkdirSync } from 'fs'
import { join, basename, extname } from 'path'

const rootDir = join(import.meta.dirname, '..')
const uiDir = join(rootDir, 'src', 'components', 'ui')
const registryDir = join(rootDir, 'registry')
const registryUiDir = join(registryDir, 'ui')

mkdirSync(registryUiDir, { recursive: true })

function getComponents() {
  return readdirSync(uiDir)
    .filter(f => {
      const ext = extname(f)
      const name = basename(f, ext)
      return (
        (ext === '.tsx' || ext === '.ts') &&
        name !== 'index' &&
        !name.endsWith('.test') &&
        !name.endsWith('.stories') &&
        !name.endsWith('.spec')
      )
    })
    .sort()
}

function getExportsFromFile(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const exports = []

  // Match export const/function/class/interface/type
  const exportRegex = /export\s+(?:const|function|class|interface|type)\s+(\w+)/g
  let match
  while ((match = exportRegex.exec(content)) !== null) {
    exports.push(match[1])
  }

  return exports
}

function generateRegistry() {
  const files = getComponents()
  const componentList = []

  for (const file of files) {
    const name = basename(file, extname(file))
    const filePath = join(uiDir, file)
    const content = readFileSync(filePath, 'utf-8')
    const exports = getExportsFromFile(filePath)

    const componentMeta = {
      name,
      type: 'ui',
      file: `src/components/ui/${file}`,
      exports,
    }

    componentList.push(componentMeta)

    // Write per-component JSON
    writeFileSync(
      join(registryUiDir, `${name}.json`),
      JSON.stringify(componentMeta, null, 2),
    )
  }

  // Write index
  const index = {
    name: 'vanguard-gnl-uikit',
    version: '2.0.0',
    components: componentList,
  }

  writeFileSync(join(registryDir, 'index.json'), JSON.stringify(index, null, 2))
  console.log(`Generated registry with ${componentList.length} components`)
}

generateRegistry()
