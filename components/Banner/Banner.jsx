import { Button } from '../Button/Button'
import classNames from 'classnames'

export function Banner({title, body, linkText, linkUrl, className}) {
  return (
    <div className={className}>
      <div className='container'>
        <div className='bg-near-black text-white rounded-3xl p-6 md:p-10 lg:p-18 flex items-start lg:items-center flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 lg:justify-between'>
          <div>
            <h3 className='text-2xl md:text-3xl lg:text-4xl leading-[1.4] font-bold font-bold mb-6'>
              {title}
            </h3>
            {body}
          </div>
          <Button label={linkText} colour='mint' size='large' href={linkUrl} />
        </div>
      </div>
    </div>
  )
}
