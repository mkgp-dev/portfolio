import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import App from '@/App'
import { PROFILE } from '@/content/profile'

function getSourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) {
      return getSourceFiles(path)
    }

    return path.match(/\.(ts|tsx|css)$/) ? [path] : []
  })
}

describe('portfolio app', () => {
  it('ships core SEO metadata and crawl files', () => {
    const indexHtml = readFileSync(join(process.cwd(), 'index.html'), 'utf8')
    const robotsTxt = readFileSync(join(process.cwd(), 'public/robots.txt'), 'utf8')
    const sitemapXml = readFileSync(join(process.cwd(), 'public/sitemap.xml'), 'utf8')

    expect(indexHtml).toContain('rel="canonical"')
    expect(indexHtml).toContain('name="robots"')
    expect(indexHtml).toContain('property="og:url"')
    expect(indexHtml).toContain('property="og:image"')
    expect(indexHtml).toContain('name="twitter:image"')
    expect(indexHtml).toContain('application/ld+json')

    expect(robotsTxt).toContain('User-agent: *')
    expect(robotsTxt).toContain('Allow: /')
    expect(robotsTxt).toContain('Sitemap:')

    expect(sitemapXml).toContain('<urlset')
    expect(sitemapXml).toContain('<loc>')
  })

  it('renders the one-page portfolio shell and removes starter content', () => {
    render(<App />)
    const sectionNav = screen.getByRole('navigation', { name: /portfolio sections/i })

    expect(
      screen.getByRole('heading', { level: 1, name: /mark kenneth pelayo/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/junior web\/software developer/i)).toBeInTheDocument()
    expect(within(sectionNav).getByRole('link', { name: /projects/i })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(within(sectionNav).getByRole('link', { name: /certificates/i })).toHaveAttribute(
      'href',
      '#certificates',
    )
    expect(within(sectionNav).getByRole('link', { name: /journey/i })).toHaveAttribute(
      'href',
      '#journey',
    )
    expect(within(sectionNav).getByRole('link', { name: /^social$/i })).toHaveAttribute(
      'href',
      '#socials',
    )
    expect(within(sectionNav).getByRole('link', { name: /resume/i })).toHaveAttribute(
      'href',
      'https://github.com/mkgp-dev/mkgp-dev/blob/main/storage/resume.pdf',
    )

    expect(screen.getByRole('heading', { level: 2, name: /^projects$/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /certificates/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /journey/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /^social$/i })).toBeInTheDocument()
    expect(screen.getByText(/currently looking/i)).toBeInTheDocument()
    PROFILE.availability.actions.forEach((action) => {
      const matcher = new RegExp(action.label, 'i')

      if (action.href.length > 0) {
        expect(
          screen
            .getAllByRole('link', { name: matcher })
            .some((link) => link.getAttribute('href') === action.href),
        ).toBe(true)
        return
      }

      expect(screen.getByRole('button', { name: matcher })).toBeDisabled()
    })

    expect(screen.queryByText(/get started/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/edit src\/App\.tsx/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/count is/i)).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 2, name: /^documentation$/i }),
    ).not.toBeInTheDocument()
  })

  it('smooth-scrolls to in-page sections from the right-pane navigation', async () => {
    const scrollIntoView = vi.fn()
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })

    render(<App />)
    const user = userEvent.setup()
    const sectionNav = screen.getByRole('navigation', { name: /portfolio sections/i })

    await user.click(within(sectionNav).getByRole('link', { name: /certificates/i }))

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    })
  })

  it('renders representative backup content, stack icons, and outbound links without react-router', async () => {
    render(<App />)
    const user = userEvent.setup()

    const tabs = screen.getByRole('tablist', { name: /project categories/i })
    expect(within(tabs).getByRole('tab', { name: /showcase/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(within(tabs).getByRole('tab', { name: /the odin project/i })).toBeInTheDocument()
    expect(within(tabs).getByRole('tab', { name: /freecodecamp/i })).toBeInTheDocument()

    expect(screen.getByText(/kaizer music player/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /source for kaizer music player/i }),
    ).toHaveAttribute('href', 'https://github.com/ternilabs/kaizer-music-player')

    await user.click(within(tabs).getByRole('tab', { name: /the odin project/i }))
    expect(screen.getByText(/droppy/i)).toBeInTheDocument()

    await user.click(within(tabs).getByRole('tab', { name: /freecodecamp/i }))
    expect(screen.getByText(/25 \+ 5 clock/i)).toBeInTheDocument()

    expect(screen.getByText(/introduction to computer science/i)).toBeInTheDocument()
    expect(screen.getByText(/transitioning from learning to job hunting/i)).toBeInTheDocument()

    const stack = screen.getByRole('list', { name: /tech stack/i })
    expect(within(stack).getByLabelText(/react/i)).toBeInTheDocument()
    expect(within(stack).getByLabelText(/typescript/i)).toBeInTheDocument()
    expect(within(stack).getByLabelText(/tailwind/i)).toBeInTheDocument()
    expect(within(stack).getByLabelText(/codex/i)).toBeInTheDocument()

    expect(
      screen
        .getAllByRole('link', { name: /github/i })
        .some((link) => link.getAttribute('href') === 'https://github.com/mkgp-dev'),
    ).toBe(true)
    expect(
      screen
        .getAllByRole('link', { name: /email/i })
        .some(
          (link) =>
            link.getAttribute('href') ===
            PROFILE.availability.actions.find((action) => action.label === 'Email')?.href,
        ),
    ).toBe(true)

    const sourceFiles = getSourceFiles(join(process.cwd(), 'src'))
    const routerImports = sourceFiles
      .map((file) => ({ file, content: readFileSync(file, 'utf8') }))
      .filter(({ content }) => content.includes('react-router'))

    expect(routerImports).toEqual([])
  })
})
