import classNames from 'classnames'
import Link from 'next/link'

export function Button({
  label = 'Button',
  href = '',
  colour = 'mint',
  size = 'normal',
  icon = true,
  className = '',
  ...props
}) {
  const colours = {
    mint: 'bg-mint text-navy',
    navy: 'bg-navy text-mint',
    lavender: 'bg-lavender text-near-black',
    aqua: 'bg-aqua text-navy',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    normal: 'px-7 py-3 text-base',
    large: 'px-7 py-3 text-base lg:px-9 lg:py-3 lg:text-xl',
    xlarge: 'px-7 py-3 text-base lg:px-9 lg:py-3 lg:text-2xl',
  }

  return (
    <Link
      className={classNames(
        'cursor-pointer text-center rounded-full font-semibold hover:[&_span]:translate-x-[0.5em] focus:[&_span]:translate-x-[0.5em] whitespace-nowrap hover:no-underline',
        colours[colour],
        sizes[size],
        className
      )}
      href={href}
      {...props}
    >
      {label}
      {icon && <span className='inline-block ml-2 transition-transform duration-300'>&rarr;</span>}
    </Link>
  )
}
