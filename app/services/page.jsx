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
                <li><Link href='#data-and-growth-intelligence'>Data &amp; Growth Intelligence</Link></li>
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
                <p><strong>Technical leadership</strong> with senior engineers providing clear governance, decision-making and accountability throughout.</p>
                <p><strong>Rapid prototyping</strong> with AI-assistance to validate ideas quickly and add confidence to the development phase.</p>
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
            id='data-and-growth-intelligence'
            className='scroll-mt-[72px] overflow-hidden'
            title={<>Data &amp; <Burst colour='lavender'>Growth Intelligence</Burst></>}
            body={
              <>
                <p>We turn customer data, analytics, experimentation and AI into actionable insights that improve customer experience, increase conversion and accelerate growth.</p>
                <p><strong>CRO &amp; experimentation</strong>; we identify opportunities, test improvements, and optimise customer journeys to increase conversion.</p>
                <p><strong>Insights &amp; analytics</strong> that measure performance of your digital product and drive improvement.</p>
                <p><strong>AI &amp; personalisation</strong> employed to improve experiences, boost efficiency, and drive growth.</p>
              </>
            }
            aside={
              <TintedImage image='/img/data-growth.jpg' alt='Data and growth intelligence' colour='lavender' />
            }
            asideMobileFirst={true}
          />
        </div>
      </main>
      <SiteFooter contactBanner={true} />
    </div>
  )
}
