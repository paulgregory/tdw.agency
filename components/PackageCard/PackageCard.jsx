import classNames from "classnames"

export function PackageCard({ title, subTitle, intro, children, colour = 'mint' }) {
  const colours = {
    mint: 'bg-mint',
    aqua: 'bg-aqua',
    lavender: 'bg-lavender',
  }

  return (
    <div className='bg-white rounded-3xl overflow-hidden lg:min-h-[400px]'>
      <div className={classNames('px-6 py-4 rounded-b-3xl', colours[colour])}>
        <h3 className='lg:text-lg font-bold'>{title}</h3>
        <span className='lg:text-lg font-light'>{subTitle}</span>
      </div>
      <div className='p-6'>
        {intro && (
          <div className='prose prose-sm lg:prose-base border-b border-grey pb-3 mb-3'>
            <p>{intro}</p>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}