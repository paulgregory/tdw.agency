import classNames from 'classnames'
import Image from 'next/image'

export function TintedImage({
  colour = 'mint',
  image = '',
  alt = '',
}) {
  const colours = {
    mint: 'bg-mint',
    aqua: 'bg-aqua',
    lavender: 'bg-lavender',
  }

  return (
    <div
      className={classNames(
        'rounded-xl overflow-hidden',
        colours[colour],
      )}
    >
      <Image
        src={image}
        alt={alt}
        width={800}
        height={800}
        className='w-full aspect-video md:aspect-square object-cover mix-blend-multiply'
      />
    </div>
  )
}
