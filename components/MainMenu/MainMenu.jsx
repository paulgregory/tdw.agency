'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

function normalizePath(path = '/') {
  if (!path || path === '/') {
    return '/'
  }

  return path.endsWith('/') ? path.slice(0, -1) : path
}

export function MainMenu({
  links = [],
  currentPath,
  className,
  onLinkClick,
}) {
  const pathname = normalizePath(currentPath ?? usePathname() ?? '/')

  return (
    <nav className={className}>
      <ul className='flex flex-col md:flex-row gap-8 md:gap-0 degree-separator'>
        {links.map((link) => {
          const href = normalizePath(link.url)
          const isActive = pathname === href

          return (
            <li key={`${link.url}-${link.title}`} className='flex flex-col items-center gap-8 md:block'>
              <Link
                href={link.url}
                onClick={onLinkClick}
                className={classNames(
                  'transition-colors duration-200 hover:text-peach text-white text-4xl md:text-xl font-semibold md:font-bold',
                  isActive && 'decorate-menu-underline'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainMenu
