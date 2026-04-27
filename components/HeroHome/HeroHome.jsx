import { Button } from '../Button/Button'

export function HeroHome({ title, linkUrl, linkText }) {
  return (
    <div className='flex w-full min-h-[700px] sm:min-h-[500px] md:min-h-135 lg:min-h-155 xl:min-h-175 flex-col justify-end items-start gap-6 self-stretch hero-shading pt-0 pb-50 sm:pb-40 md:pb-20'>
      <div className='container'>
        <div className='grid grid-cols-5 gap-8'>
          <div className='col-span-5 md:col-span-3 flex flex-col gap-8 lg:gap-12 items-start'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl leading-[1.4] font-semibold text-white'>
              {title}
            </h1>
            {linkUrl && linkText && (
              <Button label={linkText} href={linkUrl} size='large' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
