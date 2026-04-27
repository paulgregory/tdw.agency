import Image from 'next/image'

export function Logos() {
  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='max-w-40 sm:max-w-none mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-12 sm:gap-16 md:gap-12 lg:gap-24 items-center py-20 md:py-28'>
          <Image
            src='/img/macallan-logo.svg'
            alt='The Macallan'
            width={500}
            height={109}
          />
          <Image
            src='/img/nationalgrid-logo.svg'
            alt='National Grid'
            width={500}
            height={104}
          />
          <Image
            src='/img/bafta-logo.svg'
            alt='BAFTA'
            width={500}
            height={157}
          />
          <Image
            src='/img/business-stream-logo.svg'
            alt='Business Stream'
            width={500}
            height={111}
          />
          <Image
            src='/img/wateraid-logo.svg'
            alt='WaterAid'
            width={500}
            height={154}
          />
        </div>
      </div>
    </div>
  )
}