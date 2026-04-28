import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { Hero } from '../../components/Hero/Hero'
import { Underline } from '../../components/Embelishments/Underline/Underline'
import { TwoColumn } from '../../components/TwoColumn/TwoColumn'
import ContactForm from '../../components/ContactForm/ContactForm'

export const metadata = {
  title: 'Contact us \\\\ Two Degrees West',
  description:
    'We help ambitious organisations turn complex digital ambitions into clear, scalable products. Bringing senior expertise, structured thinking and long-term perspective to every engagement.',
}

export default function ContactUsPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero
          title={
              <><Underline colour='mint'>Contact</Underline> us</>
          }
          subtitle="Planning a new platform, improving one, or exploring options? Let's have a chat."
          desktopNarrow={true}
        />
        <TwoColumn 
          body={
            <>
              <p className='lg:text-lg/8'>We'd love to chat to you about a potential project or partnership. Get in touch with us using the enquiry form or by email on <a href='mailto:hello@tdw.agency'>hello@tdw.agency</a>.</p>
            </>
          }
          aside={
            <div className='md:-mt-[350px] bg-light-grey p-6 lg:p-8 rounded-3xl md:min-h-[500px]'>
              <ContactForm />
            </div>
          }
          contentClassName='!items-start'
        />
      </main>
      <SiteFooter contactBanner={false} />
    </div>
  )
}
