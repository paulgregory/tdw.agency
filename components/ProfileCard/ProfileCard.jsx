import Image from 'next/image'

export function ProfileCard({ name, description, image }) {
  return (
    <div className='flex flex-col sm:flex-row gap-8 items-start'>
      {image && (
        <div className='w-full max-w-[250px] sm:w-[180px] md:w-[200px] lg:w-[220px] rounded-xl overflow-hidden flex-shrink-0'>
          <Image
            src={image}
            alt={name}
            width={390}
            height={390}
            className='w-full'
          />
        </div>
      )}
      <div className='prose'>
        <h3 className='text-navy'>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
