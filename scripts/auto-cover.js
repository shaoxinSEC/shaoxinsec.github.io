'use strict'

const fs = require('fs')

function hasCoverInFrontMatter(raw) {
  const match = raw.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---/)
  if (!match) return false
  return /^cover\s*:/m.test(match[1])
}

function extractFirstImage(text) {
  if (!text) return null

  const markdown = text.match(/!\[[^\]]*\]\(([^)]+)\)/)
  if (markdown) return markdown[1].trim()

  const html = text.match(/<img[^>]+src=["']([^"']+)["']/i)
  if (html) return html[1].trim()

  return null
}

function stripFrontMatter(text) {
  return text.replace(/^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]*/, '')
}

function resolveCover(post) {
  const raw = post.raw || fs.readFileSync(post.full_source, 'utf8')
  if (hasCoverInFrontMatter(raw)) return null

  const content = post._content || stripFrontMatter(raw)
  return extractFirstImage(content) || false
}

hexo.extend.filter.register('before_generate', async () => {
  const posts = hexo.model('Post').toArray()

  await Promise.all(posts.map(async post => {
    const cover = resolveCover(post)
    if (cover === null) return
    await post.update({ cover })
  }))
})
