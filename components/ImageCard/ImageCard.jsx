import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export function ImageCard({
  label = 'Button',
  href = '',
  colour = 'mint',
  image = '',
  ...props
}) {
  const colours = {
    mint: 'bg-mint',
    aqua: 'bg-aqua',
    lavender: 'bg-lavender',
  }

  return (
    <Link
      className={classNames(
        'relative block p-6 w-full flex items-end justify-start min-h-40 md:min-h-38 lg:min-h-48 xl:min-h-60 cursor-pointer justify-center rounded-xl overflow-hidden hover:[&_span]:translate-x-[0.5em] focus:[&_span]:translate-x-[0.5em] hover:[&_img]:grayscale focus:[&_img]:grayscale [&_img]:brightness-90 [&_img]:brightness-90 hover:[&_img]:brightness-70 focus:[&_img]:brightness-70',
        colours[colour],
      )}
      href={href}
      {...props}
    >
      <Image
        src={image}
        alt={label}
        width={800}
        height={400}
        className='absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale-50 transition-all duration-600'
      />
      <div className='relative z-1 text-white font-bold text-lg md:text-2xl'>
        {label} <span className='inline-block ml-2 transition-transform duration-300'>&rarr;</span>
      </div>
    </Link>
  )
}
