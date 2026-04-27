import classNames from 'classnames'
import { Button } from '../Button/Button'
import { PackageIcon } from '../PackageIcon/PackageIcon'

export function Package({ number, icon, title, subTitle, intro, whatWeDo, whatYouGain, whyItMatters, idealFor, duration, colour = 'lavender', tinted,buttonLabel = 'Get in touch', className, ...props }) {
  const colours = {
    mint: 'bg-mint',
    aqua: 'bg-aqua',
    lavender: 'bg-lavender',
  }

  const borderColours = {
    mint: 'border-mint',
    aqua: 'border-aqua',
    lavender: 'border-lavender',
  }

  return (
    <div className={classNames(tinted ? 'bg-light-grey' : 'bg-white', className)}{...props}>
      <div className='container'>
        <div className='grid lg:grid-cols-3 gap-8 items-start py-20 md:py-28'>
          <div className='lg:col-span-2 flex flex-col gap-6'>
            <div className='flex items-center gap-5'>
              <div className={classNames('block font-semibold text-3xl w-[54px] h-[54px] lg:w-[70px] lg:h-[70px] text-center flex flex-shrink-0 items-center justify-center p-3 lg:p-4', colours[colour])}>
                <PackageIcon icon={icon} className='w-full h-full block text-navy' />
              </div>
              <div>
                <h2 className='font-bold text-2xl lg:text-4xl text-navy'>{title}</h2>
                <span className='block font-light text-xl lg:text-2xl text-navy mt-1'>{subTitle}</span>
              </div>
            </div>

            <div className='prose prose-xl max-w-none'>
              <p>{intro}</p>
            </div>

            <div className='grid sm:grid-cols-2 gap-8'>
              <div className='prose'>
                <h3>What we do</h3>
                {whatWeDo}
              </div>
              <div className='prose'>
                <h3>What you gain</h3>
                {whatYouGain}
              </div>
            </div>
            {duration && (
              <>
                <div className='hidden lg:block w-full h-[1px] bg-grey'></div>
                <div className='prose max-w-none'>
                  {duration}
                </div>
              </>
            )}
          </div>
          <div className={classNames('border-3 p-6 lg:p-8 rounded-3xl flex flex-col gap-6 bg-white', borderColours[colour])}>
            <div className='prose'>
              <h3>Why it matters</h3>
              {whyItMatters}
            </div>
            <div className='w-full h-[1px] bg-grey'></div>
            <div className='prose'>
              <h3>Ideal for</h3>
              {idealFor}
            </div>
            <Button label={buttonLabel} href='/contact' className='w-full' colour={colour} />
          </div>
        </div>
      </div>
    </div>
  )
}