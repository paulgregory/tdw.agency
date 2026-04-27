import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { createServer } from 'node:http'

const HOST = process.env.HOST ?? '127.0.0.1'
const PORT = Number(process.env.PORT ?? 3000)
const ROOT = process.cwd()

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function resolveCandidatePaths(urlPath) {
  const clean = decodeURIComponent((urlPath || '/').split('?')[0])
  const relativePath = clean.replace(/^\/+/, '')
  const normalized = normalize(relativePath)

  if (normalized.startsWith('..')) {
    return []
  }

  const direct = join(ROOT, normalized)
  const withHtml = join(ROOT, `${normalized}.html`)
  const asDirectoryIndex = join(ROOT, normalized, 'index.html')

  if (clean === '/' || normalized === '') {
    return [join(ROOT, 'index.html')]
  }

  return [direct, withHtml, asDirectoryIndex]
}

function serveFile(filePath, res) {
  const ext = extname(filePath).toLowerCase()
  const contentType = MIME_TYPES[ext] ?? 'application/octet-stream'
  res.writeHead(200, { 'Content-Type': contentType })
  createReadStream(filePath).pipe(res)
}

const server = createServer((req, res) => {
  const candidates = resolveCandidatePaths(req.url ?? '/')

  for (const filePath of candidates) {
    if (existsSync(filePath)) {
      const stat = statSync(filePath)
      if (stat.isFile()) {
        serveFile(filePath, res)
        return
      }
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('404 Not Found')
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    process.stderr.write(
      `Port ${PORT} is already in use. Run with a different port, for example: PORT=4173 npm run start\n`
    )
    process.exit(1)
  }

  if (error.code === 'EACCES' || error.code === 'EPERM') {
    process.stderr.write(
      `Permission denied when binding ${HOST}:${PORT}. Try a different host/port, for example: HOST=0.0.0.0 PORT=4173 npm run start\n`
    )
    process.exit(1)
  }

  throw error
})

server.listen(PORT, HOST, () => {
  process.stdout.write(`Serving static site at http://${HOST}:${PORT}\n`)
})
