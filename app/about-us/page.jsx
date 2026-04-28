import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { Hero } from '../../components/Hero/Hero'
import { Underline } from '../../components/Embelishments/Underline/Underline'
import { Burst } from '../../components/Embelishments/Burst/Burst'
import { TeamProfiles } from '../../components/TeamProfiles/TeamProfiles'
import { ProofPoints } from '../../components/ProofPoints/ProofPoints'
import { TwoColumn } from '../../components/TwoColumn/TwoColumn'
import Link from 'next/link'
import { Divider } from '../../components/Divider/Divider'
import { TintedImage } from '../../components/TintedImage/TintedImage'
import { Logos } from '../../components/Logos/Logos'

export const metadata = {
  title: 'About us \\\\ Two Degrees West',
  description:
    'We help ambitious organisations turn complex digital ambitions into clear, scalable products. Bringing senior expertise, structured thinking and long-term perspective to every engagement.',
}

export default function AboutUsPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero
          title={
              <Underline colour='mint'>About us</Underline>
          }
          subtitle='TDW are the independent digital consultancy that helps ambitious ideas land properly.'
        />
        <TwoColumn 
          title={
            <>
              What we <Burst colour='aqua'>do</Burst>
            </>
          }
          body={
            <>
              <p>We're a senior-led independent consultancy working closely with brands to deliver ambitious, scalable digital platforms. We combine human insight and experience with thoughtfully applied AI, bringing structured thinking and a long-term perspective to every engagement.</p>
              <p>The clients we work with value our experience across <Link href='/services#strategy-and-architecture'>technical strategy & architecture</Link>, <Link href='/services#design-and-experience'>design & user experience</Link>, and <Link href='/services#development-and-delivery'>development & project delivery</Link>.</p>
              <p>Our <Link href='/packages'>consulting offer</Link> is designed to meet the varied needs of digital teams who are shaping a new initiative or are looking for ways to improve and maintain an existing platform.</p>
            </>
          }
          aside={
            <TintedImage image='/img/development.jpg' alt='Platform Development' colour='lavender' />
          }
        />
        <Divider />
        <TeamProfiles
          title={(
            <>
              <Underline colour='lavender'>Our story</Underline>
            </>
          )}
          body={
            <>
              <p>Two Degrees West launched in 2023, but the partnership behind it began nearly two decades earlier when Patrick and Paul met studying Geography in Manchester in 2004.</p>
              <p>The name is a nod to where we met in Manchester, close to 2° west of the Greenwich Meridian, and to what we learnt there, which continues to inform how we approach our work today, bringing clarity, structure and discipline to complex digital challenges.</p>
            </>
          }
          profiles={[
            {
              name: 'Paul Gregory',
              description: 'Paul is a seasoned software engineer with a passion for building scalable, maintainable digital products. With a background spanning architecture and front-end development, he brings structure to complexity, ensuring platforms are well considered, technically sound and built to scale from the outset.',
              image: '/img/paul-gregory.jpg',
            },
            {
              name: 'Patrick Hamilton',
              description: 'Patrick leads delivery and client relationships, ensuring projects run smoothly and teams stay aligned. With experience leading large-scale delivery teams, he brings clarity, momentum and accountability, giving clients confidence that work is on track and outcomes are delivered properly.',
              image: '/img/patrick-hamilton.jpg',
            },
          ]}
        />
        <Divider />
        <ProofPoints
          title={<>What sets us <Burst colour='mint'>apart</Burst></>}
          proofPoints={[
            {
              title: 'Clarity before code',
              description:
                'We resolve complexity early through clear strategy, architecture and technical direction, so delivery starts aligned, not guessing.',
            },
            {
              title: 'Senior-led from start to finish',
              description:
                'Every engagement is led by experienced practitioners from start to delivery, ensuring continuity, accountability and confident decisions.',
              colour: 'aqua',
            },
            {
              title: 'Built to scale, not rebuilt later',
              description:
                'We design digital products for growth from day one, avoiding unnecessary rework as ambition evolves.',
              colour: 'lavender',
            },
            {
              title: 'Built for the long term',
              description:
                'We design with change in mind, ensuring platforms can evolve, scale and perform as organisations grow.',
              colour: 'orange',
            },
            {
              title: 'Shared ownership',
              description:
                'We work as partners, not suppliers. Sharing responsibility, aligning on outcomes and committing to success together.',
              colour: 'peach',
            },
            {
              title: 'Thoughtful use of AI',
              description:
                'We believe in using AI when it boosts human ingenuity and not just because we can.',
              colour: 'steel',
            },
          ]}
          centered
        />
        <Divider />
        <Logos />
      </main>
      <SiteFooter contactBanner={true} />
    </div>
  )
}
