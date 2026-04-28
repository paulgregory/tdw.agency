import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { Hero } from '../../components/Hero/Hero'
import { Underline } from '../../components/Embelishments/Underline/Underline'
import { Burst } from '../../components/Embelishments/Burst/Burst'
import { DoubleUnderline } from '../../components/Embelishments/DoubleUnderline/DoubleUnderline'
import { TwoColumn } from '../../components/TwoColumn/TwoColumn'
import { Divider } from '../../components/Divider/Divider'
import { TintedImage } from '../../components/TintedImage/TintedImage'
import { Packages } from '../../components/Packages/Packages'
import Link from 'next/link'
import { Banner } from '../../components/Banner/Banner'

export const metadata = {
  title: 'Core services \\\\ Two Degrees West',
  description:
    'We help ambitious organisations turn complex digital ambitions into clear, scalable products. Bringing senior expertise, structured thinking and long-term perspective to every engagement.',
}

export default function ServicesPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero
          title={
              <>Our core <Underline colour='mint'>services</Underline></>
          }
          subtitle={
            <>We help ambitious organisations turn complex digital ambitions into clear, scalable products.<br className='hidden xl:inline' /> Bringing senior expertise, structured thinking and long-term perspective to every engagement.</>
          }
        />
        <div className='relative'>
          <div className='bg-white border-b border-grey sticky top-0 z-8'>
            <div className='container'>
              <ul className='flex degree-separator-small py-6 [&_a]:text-dark-grey [&_a:hover]:text-near-black [&_a]:transition-colors [&_a]:duration-200 [&_a]:whitespace-nowrap [&_li]:whitespace-nowrap [&_li]:flex-shring-0 overflow-scroll no-scrollbar'>
                <li><Link href='#strategy-and-architecture'>Technical Strategy &amp; Architecture</Link></li>
                <li><Link href='#design-and-experience'>Product Design &amp; Experience</Link></li>
                <li><Link href='#development-and-delivery'>Development &amp; Delivery</Link></li>
              </ul>
            </div>
          </div>
          <TwoColumn
            id='strategy-and-architecture'
            className='scroll-mt-[72px] overflow-hidden'
            title={<>Technical Strategy &amp; <Burst colour='mint'>Architecture</Burst></>}
            body={
              <>
                <p>We turn product vision and business requirements into clear, build-ready technical decisions that enable confident delivery.</p>
                <p><strong>Technical discovery & validation</strong> that challenges assumptions, reduces risk and ensures delivery starts on solid foundations.</p>
                <p><strong>Solutions architecture</strong> that designs scalable foundations for growth, not short-term fixes.</p>
                <p><strong>Technical specifications & scopes</strong> that align stakeholders, reduce rework and prevent over-engineering.</p>
              </>
            }
            aside={
              <TintedImage image='/img/tech-strategy.jpg' alt='Technical Strategy & Architecture' colour='mint' />
            }
            asideMobileFirst={true}
          />
          <Banner
            title={<><Underline colour='mint'>TDW packages</Underline></>}
            body={<p className='lg:text-xl'>Clear, productised engagements that reduce risk and create momentum.</p>}
            linkText='Consulting packages'
            linkUrl='/packages'
            className='bg-white'
          />
          <TwoColumn
            id='design-and-experience'
            className='scroll-mt-[72px] overflow-hidden'
            title={<>Product Design &amp; <Burst colour='aqua'>Experience</Burst></>}
            body={
              <>
                <p>We use design to align teams and decisions, ensuring products are intuitive, buildable and ready to scale.</p>
                <p><strong>UX planning & prototyping</strong> that maps journeys, tests ideas early and validates before build.</p>
                <p><strong>UI design</strong> that creates clean, usable interfaces focused on adoption, conversion and long-term growth.</p>
                <p><strong>Design validation &amp; iteration</strong> that tests concepts early, using feedback to refine decisions before development begins.</p>
              </>
            }
            aside={
              <TintedImage image='/img/design-ux.jpg' alt='Product Design & Experience' colour='aqua' />
            }
            asideDesktopFirst={true}
            asideMobileFirst={true}
          />
          <Divider />
          <TwoColumn
            id='development-and-delivery'
            className='scroll-mt-[72px] overflow-hidden'
            title={<>Development &amp; <Burst colour='lavender'>Delivery</Burst></>}
            body={
              <>
                <p>Senior-led delivery of complex digital products, ensuring quality, predictability and scalability from start to finish.</p>
                <p><strong>Technical leadership</strong> with senior engineers providing clear governance, decision-making and accountability throughout.</p>
                <p><strong>Platform development</strong> that enables growth through scalable, resilient platforms built to evolve over time.</p>
                <p><strong>Performance, SEO &amp; analytics</strong> embedded from day one, ensuring products perform, are discoverable and improve over time.</p>
              </>
            }
            aside={
              <TintedImage image='/img/development.jpg' alt='Platform Development' colour='lavender' />
            }
            asideMobileFirst={true}
          />
        </div>
      </main>
      <SiteFooter contactBanner={true} />
    </div>
  )
}
