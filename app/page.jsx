import { Divider } from '../components/Divider/Divider'
import { HeroHome } from '../components/HeroHome/HeroHome'
import { ProofPoints } from '../components/ProofPoints/ProofPoints'
import { SiteHeader } from '../components/SiteHeader/SiteHeader'
import { ImageCard } from '../components/ImageCard/ImageCard'
import { SiteFooter } from '../components/SiteFooter/SiteFooter'
import { Underline } from '../components/Embelishments/Underline/Underline'
import { Burst } from '../components/Embelishments/Burst/Burst'
import { TwoColumn } from '../components/TwoColumn/TwoColumn'
import { Button } from '../components/Button/Button'
import { Logos } from '../components/Logos/Logos'

export default function HomePage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <HeroHome
          title={
            <>
              We help ambitious <br className='hidden sm:inline' />ideas land <Underline colour='mint' animate>properly</Underline>
            </>
          }
          linkText='More about us'
          linkUrl='/about-us'
        />
        <TwoColumn
          title={
            <>
              What we <Burst colour='aqua'>do</Burst>
            </>
          }
          body={
            <>
              <p>
                We're a senior-led independent consultancy working closely with brands to deliver ambitious, scalable digital platforms. We combine human insight and experience with thoughtfully applied AI, bringing structured thinking and a long-term perspective to every engagement.
              </p>
              <p>
                Our consulting offer is designed to meet the varied needs of digital teams who are shaping a new initiative or are looking for ways to improve and maintain an existing platform.
              </p>
              <p className='mt-8'>
                <Button label='View consulting packages' href='/packages' />
              </p>
            </>
          }
          aside={
            <div className='-mt-36 md:mt-0 md:absolute md:bottom-0 w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6 md:gap-8'>
              <ImageCard
                label={<>Technical Strategy &<br /> Architecture</>}
                href='/services#strategy-and-architecture'
                colour='mint'
                image='/img/tech-strategy.jpg'
              />
              <ImageCard
                label={<>Product Design &<br /> Experience</>}
                href='/services#design-and-experience'
                colour='aqua'
                image='/img/design-ux.jpg'
              />
              <ImageCard
                label={<>Data &<br /> Growth Intelligence</>}
                href='/services#data-and-growth-intelligence'
                colour='lavender'
                image='/img/data-growth.jpg'
              />
            </div>
          }
          asideMobileFirst
          asideClasses='self-stretch'
        />
        <Divider />
        <ProofPoints
          title={<>Why <Underline colour='orange'>partner</Underline> with us</>}
          proofPoints={[
            {
              title: 'Clarity before code',
              description:
                'We resolve complexity early through clear strategy, architecture and technical direction, so delivery starts aligned, not guessing.',
              colour: 'aqua',
            },
            {
              title: 'Senior-led from start to finish',
              description:
                'Every engagement is led by experienced practitioners from start to delivery, ensuring continuity, accountability and confident decisions.',
              colour: 'lavender',
            },
            {
              title: 'Built to scale, not rebuilt later',
              description:
                'We design digital products for growth from day one, avoiding unnecessary rework as ambition evolves.',
              colour: 'orange',
            },
          ]}
        />
        <Divider />
        <Logos />
      </main>
      <SiteFooter contactBanner={true} />
    </div>
  )
}
