import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { Hero } from '../../components/Hero/Hero'
import { Underline } from '../../components/Embelishments/Underline/Underline'
import { TwoColumn } from '../../components/TwoColumn/TwoColumn'
import { Divider } from '../../components/Divider/Divider'
import { Package } from '../../components/Package/Package'
import Link from 'next/link'

export const metadata = {
  title: 'Our consulting packages \\\\ Two Degrees West',
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
              <>Consulting <Underline colour='mint'>Packages</Underline></>
          }
          subtitle={
            <>Tailored consulting packages for organisations at every stage of the product life cycle.<br className='hidden xl:inline' /> Clear, productised engagements that reduce risk and create momentum.</>
          }
        />
        <div className='relative'>
          <div className='bg-white border-b border-grey sticky top-0 z-10'>
            <div className='container'>
              <ul className='flex degree-separator-small py-6 [&_a]:text-dark-grey [&_a:hover]:text-near-black [&_a]:transition-colors [&_a]:duration-200 [&_a]:whitespace-nowrap [&_li]:whitespace-nowrap [&_li]:flex-shring-0 overflow-scroll no-scrollbar'>
                <li><Link href='#platform-audit'>01 - Platform Audit</Link></li>
                <li><Link href='#clarity-sprint'>02 - Clarity Sprint</Link></li>
                <li><Link href='#delivery-partnership'>03 - Delivery Partnership</Link></li>
              </ul>
            </div>
          </div>

          <Package
            id='platform-audit'
            icon='audit'
            colour='aqua'
            title='Platform Audit'
            subTitle='Understand what exists'
            intro='Used when a live platform exists but its health, risks and future evolution need clearer definition.'
            whatWeDo={
              (
                <>
                  <p>A focused technical and experience review of the platform.</p>
                  <ul>
                    <li>Platform architecture review.</li>
                    <li>UX, accessibility and performance evaluation.</li>
                    <li>Prioritised technical and strategic recommendations.</li>
                  </ul>
                </>
              )
            }
            whatYouGain={
              (
                <>
                  <ul>
                    <li>A clear picture of the platform's current health and risks.</li>
                    <li>Prioritised recommendations for improvement.</li>
                    <li>Insight into technical debt, performance and UX gaps.</li>
                    <li>A roadmap for upgrade, redesign or replatforming decisions.</li>
                  </ul>
                </>
              )
            }
            whyItMatters={
              (
                <>
                  <p>Digital platforms often evolve over time, accumulating technical debt and complexity.</p>
                  <p>A Platform Audit provides a clear view of architecture, performance and UX — helping teams make confident decisions about upgrades, redesigns or replatforming.</p>
                </>
              )
            }
            idealFor={
              (
                <>
                  <ul>
                    <li>Organisations managing legacy or complex digital platforms.</li>
                    <li>Websites that are underperforming or difficult to evolve.</li>
                    <li>Teams planning upgrades, redesigns or replatforming initiatives.</li>
                  </ul>
                </>
              )
            }
            duration={
              (
                <p>A typical Platform Audit runs over <strong>1-2 weeks</strong> and provides clear insight into platform health, risks and opportunities.</p>
              )
            }
            buttonLabel='Get an audit'
            className='scroll-mt-[72px]'
          />

          <Package
            id='clarity-sprint'
            icon='clarity'
            colour='lavender'
            tinted={true}
            title='Clarity Sprint'
            subTitle='Define what to build'
            intro='Used when the vision exists, but scope, architecture and delivery approach still need defining.'
            whatWeDo={
              (
                <>
                  <p>A focused discovery combining product thinking, UX and solution architecture.</p>
                  <ul>
                    <li>Stakeholder discovery and product workshops.</li>
                    <li>Validation of assumptions and risks.</li>
                    <li>Definition of platform architecture and delivery approach.</li>
                  </ul>
                </>
              )
            }
            whatYouGain={
              (
                <>
                  <ul>
                    <li>Clear, build-ready technical direction.</li>
                    <li>Documented decisions and validated assumptions.</li>
                    <li>Recommended platform architecture and delivery plan.</li>
                    <li><strong>Confidence to proceed</strong>, with reduced risk and clearer scope.</li>
                  </ul>
                </>
              )
            }
            whyItMatters={
              (
                <>
                  <p>Digital initiatives often stall between vision and delivery due to unclear scope, competing priorities and technical uncertainty. The <strong>Clarity Sprint</strong> resolves these risks quickly, aligning stakeholders and defining the right technical direction before investment.</p>
                </>
              )
            }
            idealFor={
              (
                <>
                  <ul>
                    <li>Organisations planning a new platform or major rebuild.</li>
                    <li>Teams with a vision but unclear technical direction.</li>
                    <li>Digital initiatives that have stalled before delivery.</li>
                  </ul>
                </>
              )
            }
            duration={
              (
                <p>A typical Clarity Sprint runs over <strong>2-4 weeks</strong> and provides the foundation for successful delivery.</p>
              )
            }
            buttonLabel='Discuss a project'
            className='scroll-mt-[72px]'
          />

          <Package
            id='delivery-partnership'
            colour='mint'
            icon='partnership'
            title='Delivery Partnership'
            subTitle='Build and evolve'
            intro='Ongoing collaboration for organisations that need senior technical leadership, UX collaboration and delivery capability.'
            whatWeDo={
              (
                <>
                  <p>Ongoing collaboration across product, UX and development.</p>
                  <ul>
                    <li>Solutions architecture and technical leadership.</li>
                    <li>UX collaboration and front-end development.</li>
                    <li>Platform governance.</li>
                    <li>Continuous improvement.</li>
                  </ul>
                </>
              )
            }
            whatYouGain={
              (
                <>
                  <ul>
                    <li>Senior technical leadership guiding platform evolution.</li>
                    <li>Consistent UX and front-end development practices.</li>
                    <li>Reliable delivery across complex digital initiatives.</li>
                    <li>A scalable platform that improves over time.</li>
                  </ul>
                </>
              )
            }
            whyItMatters={
              (
                <>
                  <p>Digital initiatives often stall between vision and delivery due to unclear scope, competing priorities and technical uncertainty.</p>
                  <p>The Clarity Sprint resolves these risks quickly, aligning stakeholders and defining the right technical direction before investment.</p>
                </>
              )
            }
            idealFor={
              (
                <>
                  <ul>
                    <li>Organisations running long-term digital platforms.</li>
                    <li>Multi-agency delivery environments.</li>
                    <li>Teams needing senior technical leadership and partner support.</li>
                  </ul>
                </>
              )
            }
            duration={
              (
                <p>A delivery partnership is built for the <strong>long-term</strong> support of your team to grow your platform.</p>
              )
            }
            buttonLabel="Let's chat"
            className='scroll-mt-[72px]'
          />
        </div>
      </main>
      <SiteFooter contactBanner={true} />
    </div>
  )
}
