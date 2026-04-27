'use client'

import { useState } from 'react'
import classNames from 'classnames'

export function Accordion({ items = [], allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([])

  function toggleItem(index) {
    setOpenIndexes((previousOpenIndexes) => {
      const isAlreadyOpen = previousOpenIndexes.includes(index)

      if (allowMultiple) {
        if (isAlreadyOpen) {
          return previousOpenIndexes.filter((openIndex) => openIndex !== index)
        }

        return [...previousOpenIndexes, index]
      }

      if (isAlreadyOpen) {
        return []
      }

      return [index]
    })
  }

  return (
    <div className='flex flex-col gap-3'>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        const contentId = `accordion-content-${index}`

        return (
          <div key={item.label} className='border-b border-grey last:border-0 pb-3 last:pb-0'>
            <button
              type='button'
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className='font-bold text-sm cursor-pointer block w-full text-left flex flex-row items-center justify-between'
            >
              <span>{item.label}</span>
              <svg width="20" height="9" viewBox="0 0 24 11" fill="none" className={classNames(isOpen && 'rotate-180')}>
                <path d="M12.0187 9.40325C13.7297 7.29014 18.0269 2.78445 21.5274 1.66655" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M11.036 9.20989C9.32497 7.09678 5.02783 2.59109 1.52725 1.47319" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>
            <div
              id={contentId}
              className={classNames(
                'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
              aria-hidden={!isOpen}
            >
              <div className='min-h-0'>
                <div className='prose prose-sm max-w-full pt-2'>
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
