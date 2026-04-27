import { Button } from '../Button/Button'
import { NumberedList } from '../NumberedList/NumberedList'
import { ProofCard } from '../ProofCard/ProofCard'
import classNames from 'classnames'

export function ProofPoints({ title, proofPoints = [], linkText, linkUrl, centered }) {
  return (
    <div className='bg-white'>
      <div className='container'>
        <div className={classNames(
          'flex flex-col gap-12 py-20 md:py-28',
          centered ? 'md:items-center' : 'items-start'
        )}>
          <h2 className='text-3xl lg:text-4xl leading-[1.4] font-bold text-navy'>
            {title}
          </h2>
          <div className=''>
            <NumberedList
              items={proofPoints}
              className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8'
            />
          </div>
          {linkText && linkUrl && (
            <Button label={linkText} href={linkUrl} size='large' colour='navy' />
          )}
        </div>
      </div>
    </div>
  )
}
