import Image from 'next/image'

export function ProfileCard({ name, description, image }) {
  return (
    <div className='flex flex-col sm:flex-row gap-8 items-start'>
      {image && (
        <div className='w-full max-w-[390px] sm:w-[180px] md:w-[200px] lg:w-[220px] rounded-xl overflow-hidden flex-shrink-0'>
          <Image
            src={image}
            alt={name}
            width={390}
            height={390}
            className='w-full'
          />
        </div>
      )}
      <div>
        <h4 className='text-lg/6 lg:text-xl/7 text-navy font-bold mb-2'>{name}</h4>
        <p className='text-sm/6 lg:text-base/7'>{description}</p>
      </div>
    </div>
  )
}
