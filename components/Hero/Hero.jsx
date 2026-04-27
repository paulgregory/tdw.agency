import classNames from 'classnames'
import { Button } from '../Button/Button'

export function Hero({ title, subtitle, desktopNarrow = false }) {
  return (
    <div className='flex w-full min-h-[400px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex-col justify-end items-start gap-6 self-stretch hero-shading pt-0 pb-12'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12'>
          <h1 className={classNames('text-3xl lg:text-4xl xl:text-5xl leading-[1.4] font-semibold text-white row-start-1', desktopNarrow ? 'md:col-span-3' : 'md:col-span-4')}>
            {title}
          </h1>
          {subtitle && (
            <p className={classNames('text-lg lg:text-xl leading-[1.4] text-white row-start-2', desktopNarrow ? 'md:col-span-3' : 'md:col-span-4')}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
