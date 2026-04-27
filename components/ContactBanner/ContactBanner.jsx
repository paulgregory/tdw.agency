import { Banner } from '../Banner/Banner'
import { Underline } from '../Embelishments/Underline/Underline'

export function ContactBanner() {
  return (
    <Banner
      title={<>We'd <Underline colour='mint'>love to chat</Underline></>}
      body={
        <p className='lg:text-xl'>
          Planning a new platform, improving one, or exploring options? Talk to our team.
        </p>
      }
      linkText='Get in touch'
      linkUrl='/contact'
      className='pt-20 md:pt-28'
    />
  )
}
