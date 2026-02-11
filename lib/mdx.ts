import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Guide {
  slug: string
  title: string
  content: string
  excerpt?: string
}

export function getGuidesBySection(section: string): Guide[] {
  if (!section) {
    return []
  }

  const sectionPath = path.join(contentDirectory, section)

  if (!fs.existsSync(sectionPath)) {
    return []
  }

  const files = fs.readdirSync(sectionPath)
  const guides = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const filePath = path.join(sectionPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { content } = matter(fileContent)

      // Extract title from first # heading
      const titleMatch = content.match(/^#\s+(.+)$/m)
      const title = titleMatch ? titleMatch[1] : slug

      // Extract first paragraph as excerpt
      const paragraphs = content.split('\n\n')
      const firstParagraph = paragraphs.find(p => p.trim() && !p.startsWith('#'))
      const excerpt = firstParagraph ? firstParagraph.substring(0, 150) + '...' : ''

      return {
        slug,
        title,
        content,
        excerpt,
      }
    })

  return guides
}

export function getGuide(section: string, slug: string): Guide | null {
  try {
    const filePath = path.join(contentDirectory, section, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContent)

    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : slug

    return {
      slug,
      title,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getSinglePageContent(slug: string): Guide | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContent)

    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : slug

    return {
      slug,
      title,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getAllSections(): string[] {
  const sections = [
    'start-here',
    'helpdesk',
    'windows',
    'linux',
    'reseau',
    'cloud-devops',
    'cas-reels',
  ]

  return sections.filter((section) => {
    const sectionPath = path.join(contentDirectory, section)
    return fs.existsSync(sectionPath)
  })
}
