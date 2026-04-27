import classNames from 'classnames'

export function TwoColumn({ title, body, aside, asideMobileFirst = false, asideDesktopFirst = false, asideClasses = '', className, contentClassName, ...props }) {
  return (
    <div className={classNames('bg-white', className)}{...props}>
      <div className='container'>
        <div className={classNames('grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 py-20 md:py-28 items-center', contentClassName)}>
          <div className={classNames('md:col-span-3 flex flex-col gap-6', asideDesktopFirst && 'md:items-end')}>
            {title && (
              <h2 className='text-3xl lg:text-4xl leading-[1.4] font-bold text-navy w-full lg:max-w-[calc(100%-100px)] 2xl:max-w-[calc(100%-200px)]'>
                {title}
              </h2>
            )}
            <div className={classNames('prose w-full lg:max-w-[calc(100%-100px)] 2xl:max-w-[calc(100%-200px)]')}>
              {body}
            </div>
          </div>
          {aside && (
            <div 
              className={classNames(
                'relative md:col-span-2',
                asideMobileFirst ? 'max-md:order-first' : '',
                asideDesktopFirst ? 'md:order-first' : '',
                asideClasses
              )}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
