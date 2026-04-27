import classNames from 'classnames'

export function NumberedList({ items, startingAt = 1, className }) {
  const colours = {
    mint: 'bg-mint',
    aqua: 'bg-aqua',
    lavender: 'bg-lavender',
    orange: 'bg-orange',
    peach: 'bg-peach',
    steel: 'bg-steel',
  }

  return (
    <ol className={classNames('list-decimal list-inside space-y-4 list-none flex flex-col gap-6', className)}>
      {items.map((item, index) => (
        <li key={index} className='flex flex-row gap-4 items-start'>
          <span className={classNames('block aspect-square w-[50px] leading-[50px] flex-shrink-0 text-2xl text-center font-semibold text-near-black', item.colour ? colours[item.colour] : colours['mint'])}>
            {(startingAt + index).toString().padStart(2, '0')}
          </span>
          <div className='prose prose-p:leading-6'>
            <h4 className='text-navy text-lg mb-0'>{item.title}</h4>
            {item.description}
          </div>
        </li>
      ))}
    </ol>
  )
}